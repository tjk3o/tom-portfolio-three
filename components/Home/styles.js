import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HEADER_HEIGHT } from '../Header/styles';
import { mediaQueries } from '../../theme';

export const HomeWrapper = styled.main`
  background-color: var(--background-color);
  height: 100vh;
  flex: 1 1 0;
  display: block;
`;

export const ToggleText = styled(motion.span)`
  color: var(--color-primary);
  margin-right: 10px;

  ${({ showToggleText }) =>
    showToggleText
      ? 'opacity: 1; transition: opacity 0.5s;'
      : 'opacity: 0; transition: opacity 0.5s;'};
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;

  ${mediaQueries.tabletPortraitUp`
    justify-content: flex-end;
  `};
`;

export const MainAndFooterContainer = styled.div`
  min-height: calc(100vh - ${HEADER_HEIGHT}px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Hr = styled.hr`
  height: 1px;
  color: var(--color-secondary);
  width: calc(100% - 20px);
  margin-bottom: 50px;
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

export const CardGrid = styled.div`
  margin: 0 10px;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
  width: calc(100% - 20px);
  ${mediaQueries.tabletLandscapeUp`
    margin: 0;
    width: 940px;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
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

export const Card = styled.div`
  width: 100%;
  background: var(--color-secondary);
  border-radius: 15px;
  padding-bottom: 120%;
`;

export const CreatedBy = styled.span`
  margin: 0 auto;
  text-align: right;
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
