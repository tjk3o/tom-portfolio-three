import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import useDarkMode from '../../hooks/useDarkMode';
import { Toggle } from '../Buttons/Toggle';
import Header from '../Header';
import Avatar from '../Avatar';
import {
  HomeWrapper,
  MainAndFooterContainer,
  Main,
  ToggleText,
  Hr,
  CardGrid,
  Card,
  Footer,
} from './styles';
import { useEffect } from 'react';

export default function Home() {
  const { handleSetIsDarkTheme, isDarkTheme } = useDarkMode();
  const [showToggleText, setShowToggleText] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowToggleText(false), 3000);
  }, []);
  return (
    <HomeWrapper>
      <Head>
        <title>Tom Keogh | Portfolio</title>
        <meta name='description' content="Tom Keogh's portfolio site" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header>
        <ToggleText showToggleText={showToggleText}>dark mode</ToggleText>

        <Toggle isOn={isDarkTheme} toggleSwitch={handleSetIsDarkTheme} />
      </Header>
      <MainAndFooterContainer>
        <Main>
          <Avatar />
          <h1>Tom&apos;s page</h1>
          <Hr />
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
