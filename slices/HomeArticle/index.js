import React, { useRef } from 'react';
import { PrismicRichText } from '@prismicio/react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardContainer = styled(motion.div)`
  position: relative;
  height: 0;
  background: var(--color-secondary);
  color: white;
  border-radius: 20px;
  overflow: hidden;
  padding-bottom: 120%;
  max-height: 0;
  will-change: transform;
`;

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
  // backdrop-filter: blur(160px) saturate(3) hue-rotate(10deg);
  background: brown;
`;

const Subtitle = styled.h4`
  padding: 0 20px;
  margin: 0;
  width: 300px;
`;

const CardTextContainer = styled.div`
  width: auto;
  height: 0;
`;

const CardText = styled(motion.div)`
  position: relative;
  z-index: 2;
  width: 100%;
  background: white;
`;

const HomeArticle = ({ slice, context, index }) => {
  const cardRef = useRef();
  const currentCardIsOpen = context?.openCard === index;
  const distanceFromTop = cardRef?.current?.getBoundingClientRect()?.top;

  return (
    <div>
      <CardContainer
        ref={cardRef}
        transition={{
          duration: 0.5,
          zIndex: { delay: currentCardIsOpen ? 0 : 0.5 },
          filter: { duration: 0 },
        }}
        variants={{
          open: {
            top:
              distanceFromTop > 0
                ? `-${distanceFromTop}px`
                : `${distanceFromTop * -1}px`,
            zIndex: 3,
            left: 0,
            right: 0,
            borderRadius: '0px',
            marginLeft: '0px',
            marginRight: '0px',
            width: '100%',
            filter: 'drop-shadow(0 0 0 grey)',
          },
          closed: {
            width: 'calc(100% - 60px)',
            top: '0px',
            zIndex: 0,
            left: 'unset',
            right: 'unset',
            borderRadius: '15px',
            marginLeft: '30px',
            marginRight: '30px',
            filter: 'drop-shadow(0 0 3px grey)',
          },
        }}
        initial='closed'
        animate={currentCardIsOpen ? 'open' : 'closed'}
        onClick={() =>
          context?.setOpenCard(currentCardIsOpen ? undefined : index)
        }
      >
        <ImageContainer
          imgSrc={
            slice?.primary?.image?.url ? slice?.primary?.image?.url : null
          }
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
      </CardContainer>
      <CardTextContainer>
        <CardText
          transition={{
            duration: 0.5,
          }}
          variants={{
            open: {
              height: '120vh',
              top:
                distanceFromTop > 0
                  ? `-${distanceFromTop}px`
                  : `${distanceFromTop * -1}px`,
            },
            closed: {
              height: '0vh',
              top: 0,
            },
          }}
          initial='closed'
          animate={currentCardIsOpen ? 'open' : 'closed'}
        ></CardText>
      </CardTextContainer>
    </div>
  );
};

export default HomeArticle;
