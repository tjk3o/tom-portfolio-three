import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import styled from 'styled-components';
import { mediaQueries } from '../../theme';

export const Heading = styled.h1`
  font-size: 16px;
  color: var(--color-secondary);

  ${mediaQueries.tabletLandscapeUp`
    width: 940px;
  `};
  ${mediaQueries.tabletLargeUp`
    width: 1000px;
  `};
  ${mediaQueries.desktopUp`
    width: 1180px;
  `};
  ${mediaQueries.desktopLargeUp`
    width: 1420px;
  `};
  ${mediaQueries.desktopXLUp`
    width: 1920px;
  `};
`;

export const Hr = styled.hr`
  height: 1px;
  border-color: var(--color-tertiary);
  margin: 0 0 50px;
  ${mediaQueries.tabletLandscapeUp`
    width: 940px;
  `};
  ${mediaQueries.tabletLargeUp`
    width: 1000px;
  `};
  ${mediaQueries.desktopUp`
    width: 1180px;
  `};
  ${mediaQueries.desktopLargeUp`
    width: 1420px;
  `};
  ${mediaQueries.desktopXLUp`
    width: 1920px;
  `};
`;

const PageHeading = ({ slice }) => (
  <Heading>
    <span className='title'>
      {slice.primary.title ? (
        <PrismicRichText field={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </span>
    <Hr />
  </Heading>
);

export default PageHeading;
