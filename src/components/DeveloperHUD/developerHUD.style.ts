import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { hermaBorderColor, hermaColor, hermaBG } from '../../styles/commonStyles';
import { Height } from '../../types';

export const StyledDeveloperHUD = styled.div`
  font-family: monospace;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 2rem;
  z-index: 666;

  > div {
    color: black;
    position: relative;
    padding: 1.5rem;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    width: 100%;
    min-height: 200px;

    ${css`
      animation: ${hermaBG} 10s ease infinite alternate;
    `};
  }

  .herma-hud__close {
    background-color: black;
    position: absolute;
    top: 1rem;
    right: 1rem;
    border: 0;
    padding: 1rem 1rem;
    color: white;
    cursor: pointer;
    &:after {
      content: '';
      height: 100%;
      border-left-style: solid;
      border-left-width: 1px;
      ${css`
        animation: ${hermaBorderColor} 10s ease infinite alternate;
      `};
      position: absolute;
      transform: rotate(45deg);
      left: 49%;
      top: 0;
    }

    &:before {
      content: '';
      height: 100%;
      border-left-style: solid;
      border-left-width: 1px;
      ${css`
        animation: ${hermaBorderColor} 10s ease infinite alternate;
      `};
      position: absolute;
      transform: rotate(-45deg);
      left: 49%;
      top: 0;
    }
  }
  .herma-hud__tab {
    border: 0;
    background: transparent;
    padding: 0.5rem 1rem;
    font-family: monospace;
    cursor: pointer;
    font-weight: bold;
    border: 1px solid black;
    border-left: 0;
    margin-bottom: 2rem;
    text-transform: uppercase;

    &:first-of-type {
      border-left: 1px solid black;
    }
    &.active {
      background: black;
      ${css`
        animation: ${hermaColor} 10s ease infinite alternate;
      `};
    }
  }
`;

export const HAS_BREAKPOINT_VIEWER_CLASS = 'display-breakpoint-viewer';
export const HAS_GRID_VIEWER_CLASS = 'display-grid-viewer';
export const HAS_VERTICAL_RHYTHM_VIEWER_CLASS = 'display-vertical-rhythm-viewer';

export const globalDeveloperHUD = css`
  html,
  body {
    min-height: 100%;
    margin: 0;
  }
  .breakpoint-viewer,
  .grid-viewer,
  .vertical-rhythm-viewer {
    display: none;
  }
  .${HAS_GRID_VIEWER_CLASS} .grid-viewer,
  .${HAS_VERTICAL_RHYTHM_VIEWER_CLASS} .vertical-rhythm-viewer {
    display: block;
  }
  .${HAS_BREAKPOINT_VIEWER_CLASS} .breakpoint-viewer {
    bottom: 2rem;
    right: unset;
    display: block;

    :before {
      content: 'Mobile Breakpoint';
      only screen and (min-width: 768px) {
        content: 'Tablet Breakpoint';
      }
      only screen and (min-width: 992px) {
        content: 'Desktop Breakpoint';
      }
      only screen and (min-width: 1280px) {
        content: 'XL Desktop Breakpoint';
      }
      only screen and (min-width: 1400px) {
        content: 'XXL Desktop Breakpoint';
      }
    }
  }
`;

const miniHUD = css`
  color: black;
  font-weight: bold;
  font-family: monospace;
  font-size: 14px;
  z-index: 666;
  position: fixed;
  bottom: 2rem;
  padding: 0.75rem 1rem;
  pointer-events: none;
  border-radius: 4px;
  text-transform: uppercase;
  text-align: center;
  ${css`
    animation: ${hermaBG} 10s ease infinite alternate;
  `}
`;

export const GridHUD = styled.div`
  ${miniHUD}
  left: 2rem;
`;

export const VerticalHUD = styled.div`
  ${miniHUD}
  right: 2rem;
`;

export const BreakpointHUD = styled.div`
  ${miniHUD}
  left: 50%;
  transform: translateX(-50%);
`;

export const VerticalRhythmGuides = styled.div`
  width: 100%;
  height: 300%;
  background-image: linear-gradient(0deg, transparent 0px, transparent 23px, #666 23px, #666 24px);
  background-size: 24px 24px;
  background-position: -1px -1px;
  background-blend-mode: multiply;
  opacity: 0.5;
`;

export const Overlay = styled.div<{
  grid?: boolean;
  opacity?: number;
  position?: string;
  height?: Height;
  // theme?: any;
}>`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 666;
  pointer-events: none;

  ${({ height }) => `height: ${height ?? '100%'}`};
  ${({ opacity }) => `opacity: ${opacity ?? 1}`};
  ${({ position }) => `position: ${position ?? 'fixed'}`};
`;

export const GridCol = styled.div`
  border-left: 1px solid rgba(0, 255, 255, 0.6);
  border-right: 1px solid rgba(0, 255, 255, 0.6);
  opacity: 0.4;

  background: rgba(0, 255, 255, 0.2);
  &:first-of-type {
    border-left-color: rgba(120, 155, 255, 0.6);
  }

  &:last-of-type {
    border-right-color: rgba(120, 155, 255, 0.6);
  }
`;
