import Head from 'next/head';
import styled from 'styled-components';
import useDarkMode from '../../hooks/useDarkMode';
import { Toggle } from '../Buttons/Toggle';
import Header from '../Header';
import Avatar from '../Avatar';
import { HEADER_HEIGHT } from '../Header/styles';

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
  justify-content: flex-end;
`;

const MainAndFooterContainer = styled.div`
  min-height: calc(100vh - ${HEADER_HEIGHT}px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
        </Main>
        <Footer>
          <span>Created by tjk3o</span>
        </Footer>
      </MainAndFooterContainer>
    </HomeWrapper>
  );
}
