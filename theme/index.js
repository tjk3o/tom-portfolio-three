import { css } from 'styled-components';

export const breakpoints = {
  smallMobile: {
    min: 0,
    max: 320,
  },
  mobile: {
    min: 0,
    max: 599,
  },
  tabletPortrait: {
    min: 600,
    max: 959,
  },
  tabletLandscape: {
    min: 960,
    max: 1023,
  },
  tabletLarge: {
    min: 1024,
    max: 1199,
  },
  desktop: {
    min: 1200,
    max: 1279,
  },
  desktopSmall: {
    min: 1280,
    max: 1439,
  },
  desktopLarge: {
    min: 1440,
    max: 1919,
  },
  desktopXL: {
    min: 1920,
    max: null,
  },
};

export const mediaQueries = Object.entries(breakpoints).reduce(
  (prev, [key, { min, max }]) => ({
    ...prev,
    [`${key}Up`]: (...args) => css`
      @media (min-width: ${min}px) {
        ${css(...args)};
      }
    `,
    ...(max && {
      [`${key}Only`]: (...args) => css`
        @media (min-width: ${min}px) and (max-width: ${max}px) {
          ${css(...args)};
        }
      `,
      [`${key}Down`]: (...args) => css`
        @media (max-width: ${max}px) {
          ${css(...args)};
        }
      `,
    }),
  }),
  {}
);

export default mediaQueries;
