import { useState } from 'react';
import Head from 'next/head';
import { SliceZone } from '@prismicio/react';
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
  CreatedBy,
  Footer,
} from './styles';
import { useEffect } from 'react';
import { PrismicRichText } from '@prismicio/react';
import { components } from '../../slices';

export default function Home({ data }) {
  const { handleSetIsDarkTheme, isDarkTheme } = useDarkMode();
  const [showToggleText, setShowToggleText] = useState(true);
  console.log(data);

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
          <PrismicRichText field={data.title} />
          <Hr />
          <CardGrid>
            <SliceZone slices={data.slices} components={components} />
          </CardGrid>
        </Main>
        <Footer>
          <CreatedBy>Created by tjk3o</CreatedBy>
        </Footer>
      </MainAndFooterContainer>
    </HomeWrapper>
  );
}
