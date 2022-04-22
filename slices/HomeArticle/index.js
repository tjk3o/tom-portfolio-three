import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import styled from 'styled-components';

const Card = styled.section`
  width: 100%;
  background: var(--color-secondary);
  border-radius: 15px;
  padding-bottom: 120%;
`;

const HomeArticle = ({ slice }) => (
  <Card>
    <span className='title'>
      {slice.primary.title ? (
        <PrismicRichText field={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </span>
    {slice.primary.description ? (
      <PrismicRichText field={slice.primary.description} />
    ) : (
      <p>start by editing this slice from inside Slice Machine!</p>
    )}
  </Card>
);

export default HomeArticle;
