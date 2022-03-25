import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import useDarkMode from '../hooks/useDarkMode';

const HomeWrapper = styled.main`
  background-color: var(--background-color);
  height: 100vh;
`;

const Home: NextPage = () => {
  const { handleSetIsDarkTheme, isDarkTheme } = useDarkMode();
  return (
    <HomeWrapper>
      <Head>
        <title>Tom Keogh | Portfolio</title>
        <meta name='description' content="Tom Keogh's portfolio site" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>Tom&apos;s page</h1>
        <label>
          <input
            type='checkbox'
            checked={isDarkTheme}
            onChange={handleSetIsDarkTheme}
          />
          {isDarkTheme === true ? 'Dark' : 'Light'}
        </label>
      </main>
      <footer>
        <span>Created by tjk3o</span>
      </footer>
    </HomeWrapper>
  );
};

export default Home;
