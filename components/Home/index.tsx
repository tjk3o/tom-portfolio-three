import { useState } from 'react';
import Head from 'next/head';
import { SliceZone } from '@prismicio/react';
import useDarkMode from '../../hooks/useDarkMode';
import Header from '../NewHeader';
import {
  HomeWrapper,
  MainAndFooterContainer,
  HeadingContainer,
  Heading,
  Main,
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
  const [openCard, setOpenCard] = useState();

  useEffect(() => {
    setTimeout(() => setShowToggleText(false), 3000);
  }, []);
  return (
    <HomeWrapper>
      <Head>
        <title>Tom Keogh</title>
        <meta name='description' content="Tom Keogh's site" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header
        handleSetIsDarkTheme={handleSetIsDarkTheme}
        isDarkTheme={isDarkTheme}
        showToggleText={showToggleText}
      />
      <HeadingContainer>
        <Heading>
          <PrismicRichText field={data.title} />
        </Heading>
      </HeadingContainer>
      <MainAndFooterContainer>
        <Main>
          <CardGrid>
            <SliceZone
              slices={data.slices}
              components={components}
              context={{ openCard, setOpenCard }}
            />
          </CardGrid>
        </Main>
        <Footer>
          <CreatedBy>Created by tjk3o</CreatedBy>
        </Footer>
      </MainAndFooterContainer>
    </HomeWrapper>
  );
}
