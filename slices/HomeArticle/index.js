import React, { useEffect, useRef, useState } from 'react';
import { PrismicRichText } from '@prismicio/react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardContainer = styled(motion.div)``;

const ImageContainer = styled.div`
  background-image: ${({ imgSrc }) =>
    imgSrc
      ? `url("${imgSrc}");`
      : 'linear-gradient(rgb(237 213 213), rgb(66 66 133));'}
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
  overflow: hidden;
`;

const Heading = styled.h2`
  padding: 0 10px;
  margin: 0;
`;

const SubtitleBar = styled.div`
  width: 100%;
  height: 80px;
  backdrop-filter: blur(160px) saturate(3) hue-rotate(10deg);
`;

const Subtitle = styled.h4`
  padding: 0 20px;
  margin: 0;
`;
const HomeArticle = ({ slice, context, index }) => {
  const cardRef = useRef();
  const currentCardIsOpen = context?.openCard === index;
  const distanceFromTop = cardRef?.current?.getBoundingClientRect()?.top;

  return (
    <motion.section
      layout
      ref={cardRef}
      transition={{ duration: 0.5 }}
      style={{
        position: 'relative',
        height: 0,
        background: 'var(--color-secondary)',
        color: 'white',
        borderRadius: '20px',
        overflow: 'hidden',
      }}
      variants={{
        open: {
          top:
            distanceFromTop > 0
              ? `-${distanceFromTop}px`
              : `${distanceFromTop * -1}px`,
          zIndex: 2,
          left: 0,
          right: 0,
          borderRadius: '0px',
          marginLeft: '0px',
          marginRight: '0px',
          width: '100%',
          paddingBottom: '140%',
        },
        closed: {
          width: 'calc(100% - 20px)',
          top: '0px',
          zIndex: 0,
          left: 'unset',
          right: 'unset',
          borderRadius: '15px',
          marginLeft: '10px',
          marginRight: '10px',
          paddingBottom: '120%',
        },
      }}
      initial='closed'
      animate={currentCardIsOpen ? 'open' : 'closed'}
      onClick={() =>
        context?.setOpenCard(currentCardIsOpen ? undefined : index)
      }
    >
      <ImageContainer
        imgSrc={slice?.primary?.image?.url ? slice?.primary?.image?.url : null}
      >
        <Heading>
          <span className='title'>
            {slice.primary.title ? (
              <PrismicRichText field={slice.primary.title} />
            ) : (
              <h2>Template slice, update me!</h2>
            )}
          </span>
        </Heading>

        <SubtitleBar>
          <Subtitle>
            {slice.primary.description ? (
              <PrismicRichText field={slice.primary.description} />
            ) : (
              <p>start by editing this slice from inside Slice Machine!</p>
            )}
          </Subtitle>
        </SubtitleBar>
      </ImageContainer>
    </motion.section>
  );
};

export default HomeArticle;
