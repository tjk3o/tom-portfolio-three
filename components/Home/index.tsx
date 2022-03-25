import Head from 'next/head';
import styled from 'styled-components';
import useDarkMode from '../../hooks/useDarkMode';
import { Toggle } from '../Buttons/Toggle';
import Header from '../Header';
import Avatar from '../Avatar';
import { HEADER_HEIGHT } from '../Header/styles';
import { mediaQueries } from '../../theme';

const HomeWrapper = styled.main`
  background-color: var(--background-color);
  height: 100vh;
  flex: 1 1 0;
  display: block;
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;

  ${mediaQueries.tabletPortraitUp`
    justify-content: flex-end;
  `};
`;

const MainAndFooterContainer = styled.div`
  min-height: calc(100vh - ${HEADER_HEIGHT}px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardGrid = styled.div`
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

const Card = styled.div`
  width: 100%;
  background: pink;
  border-radius: 15px;
  padding-bottom: 120%;
`;

export default function Home() {
  const { handleSetIsDarkTheme, isDarkTheme } = useDarkMode();
  return (
    <HomeWrapper>
      <Head>
        <title>Tom Keogh | Portfolio</title>
        <meta name='description' content="Tom Keogh's portfolio site" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header>
        <Toggle isOn={isDarkTheme} toggleSwitch={handleSetIsDarkTheme} />
      </Header>
      <MainAndFooterContainer>
        <Main>
          <Avatar />
          <h1>Tom&apos;s page</h1>
          <CardGrid>
            <Card />
            <Card />
            <Card />
            <Card />
          </CardGrid>
        </Main>
        <Footer>
          <span>Created by tjk3o</span>
        </Footer>
      </MainAndFooterContainer>
    </HomeWrapper>
  );
}
