import Head from 'next/head';
import useDarkMode from '../../hooks/useDarkMode';
import { Toggle } from '../Buttons/Toggle';
import Header from '../Header';
import Avatar from '../Avatar';
import {
  HomeWrapper,
  MainAndFooterContainer,
  Main,
  Hr,
  CardGrid,
  Card,
  Footer,
} from './styles';

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
