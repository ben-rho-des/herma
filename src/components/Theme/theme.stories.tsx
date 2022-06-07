import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider, useTheme } from '@emotion/react';
import theme from './Theme';

const matchHex = /(#[a-f\dA-F]{6})/g;
const matchShortHex = /(#[a-f\dA-F]{3})/g;

const swatchString =
  "<span style='position:relative'><div style='background:$1; width: 13px; height: 13px; display: inline-block; position: relative; top: 3px; border: 1px solid black; margin-right: 3px;'></div>$1</span>";

const Component = () => {
  const theme = useTheme();
  return (
    <pre>
      <div
        dangerouslySetInnerHTML={{
          __html: convertHexToSpan(JSON.stringify(theme, null, 2))
        }}
      />
    </pre>
  );
};

const convertHexToSpan = (color: string) =>
  color
    .replace(matchShortHex, swatchString)
    .replace(matchHex, swatchString)
    .replace(
      /rgb(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/g,
      "<span style='position:relative'><div style='background:rgb$1); width: 13px; height: 13px; display: inline-block; position: relative; top: 3px; border: 1px solid black; margin-right: 3px;'></div>rgb$1)</span>"
    )
    .replace(
      /rgba(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(\s*,.+?)?\)/g,
      "<span style='position:relative'><div style='background:rgba$1$2); width: 13px; height: 13px; display: inline-block; position: relative; top: 3px; border: 1px solid black; margin-right: 3px;'></div>rgba$1$2)</span>"
    );

storiesOf('Global/Theme', module).add('Default', () => (
  <ThemeProvider theme={theme}>
    <Component />
  </ThemeProvider>
));
