import React from 'react';
import { Global } from '@emotion/react';
import { CommonProps } from '../../utils/commonProps';
import {
  BreakpointHUD,
  globalDeveloperHUD,
  HAS_BREAKPOINT_VIEWER_CLASS,
  HAS_GRID_VIEWER_CLASS,
  HAS_VERTICAL_RHYTHM_VIEWER_CLASS,
  Overlay,
  StyledDeveloperHUD,
  VerticalRhythmGuides,
  VerticalHUD,
  GridHUD
} from './developerHUD.style';
import { NoSSR } from '../NoSsr';

export interface DeveloperHUDProps extends CommonProps {
  children?: any;
  defaultTab?: `${Tabs}`;
  pageProps?: unknown;
  appState?: unknown;
  on?: boolean;
}

enum Tabs {
  THEME = 'theme',
  PROPS = 'props',
  STATE = 'state'
}

export const DeveloperHUD: React.FC<DeveloperHUDProps> = ({
  children,
  appState,
  pageProps,
  on = false
}) => {
  const [hudUp, setHudUp] = React.useState(false);
  const [tab, setTab] = React.useState<`${Tabs}`>(Tabs.THEME);

  React.useEffect(() => {
    const handleKeyDown = (event: any) =>
      (event.code === 'Backquote' && setHudUp(!hudUp)) ||
      (event.code === 'ControlLeft' && document.body.classList.add('ctrl')) ||
      (event.code === 'Digit1' &&
        document.body.classList.contains('ctrl') &&
        document.body.classList.toggle(HAS_BREAKPOINT_VIEWER_CLASS)) ||
      (event.code === 'Digit2' &&
        document.body.classList.contains('ctrl') &&
        document.body.classList.toggle(HAS_GRID_VIEWER_CLASS)) ||
      (event.code === 'Digit3' &&
        document.body.classList.contains('ctrl') &&
        document.body.classList.toggle(HAS_VERTICAL_RHYTHM_VIEWER_CLASS));

    const handleKeyUp = (event: any) =>
      event.code === 'ControlLeft' && document.body.classList.remove('ctrl');

    if (window) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [hudUp, tab]);

  const hasHUD = on || process.env.NODE_ENV === 'develop';

  const theme = {
    color: 'red'
  };

  return hasHUD ? (
    <>
      {children}
      <NoSSR>
        <Global styles={globalDeveloperHUD} />
        <Overlay className='vertical-rhythm-viewer' position='absolute' height='1690px'>
          <VerticalRhythmGuides />
          <VerticalHUD>Vertical Rhythm guide</VerticalHUD>
        </Overlay>

        <Overlay className='grid-viewer' position='absolute' height='1690px'>
          <p>todo add grid here</p>
          <GridHUD>Grid guide</GridHUD>
        </Overlay>

        <BreakpointHUD className='breakpoint-viewer' />
        {hudUp && (
          <StyledDeveloperHUD data-test='herma-hud'>
            <div>
              <h1>
                DEV HUD{' '}
                <span role='img' aria-label='herma-emoji'>
                  🗿
                </span>
              </h1>
              <button
                className={`herma-hud__tab ${tab === Tabs.THEME ? 'active' : ''}`}
                onClick={() => setTab(Tabs.THEME)}
              >
                {Tabs.THEME}
              </button>
              <button
                className={`herma-hud__tab ${tab === Tabs.PROPS ? 'active' : ''}`}
                onClick={() => setTab(Tabs.PROPS)}
              >
                {Tabs.PROPS}
              </button>
              <button
                className={`herma-hud__tab ${tab === Tabs.STATE ? 'active' : ''}`}
                onClick={() => setTab(Tabs.STATE)}
              >
                {Tabs.STATE}
              </button>

              {tab === Tabs.THEME && (
                <pre>add theme object here {JSON.stringify(theme, null, 2)}</pre>
              )}
              {tab === Tabs.PROPS && (
                <pre>add props object here {JSON.stringify(pageProps, null, 2)}</pre>
              )}
              {tab === Tabs.STATE && (
                <pre>add state object here {JSON.stringify(appState, null, 2)}</pre>
              )}

              <button type='button' className='herma-hud__close' onClick={() => setHudUp(false)} />
            </div>
          </StyledDeveloperHUD>
        )}
      </NoSSR>
    </>
  ) : (
    children
  );
};
