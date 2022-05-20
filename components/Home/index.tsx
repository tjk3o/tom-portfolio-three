import { useState } from 'react';
import Head from 'next/head';
import { SliceZone } from '@prismicio/react';
import useDarkMode from '../../hooks/useDarkMode';
import Header from '../Header';
import {
  HomeWrapper,
  MainAndFooterContainer,
  Main,
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
      <Header
        showToggleText={showToggleText}
        isDarkTheme={isDarkTheme}
        handleSetIsDarkTheme={handleSetIsDarkTheme}
      />
      <MainAndFooterContainer>
        <Main>
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
