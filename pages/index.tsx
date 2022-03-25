import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.main`
  background-color: var(--background-color);
  height: 100vh;
`;

const Home: NextPage = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleToggle = (event) => {
    setIsDarkTheme(event.target.checked);
  };

  const getMediaQueryPreference = () => {
    const mediaQuery = '(prefers-color-scheme: dark)';
    const mql = window.matchMedia(mediaQuery);
    const hasPreference = typeof mql.matches === 'boolean';
    if (hasPreference) {
      return mql.matches ? 'dark' : 'light';
    }
  };

  const storeUserSetPreference = (pref) => {
    localStorage.setItem('theme', pref);
  };
  const getUserSetPreference = () => {
    return localStorage.getItem('theme');
  };

  useEffect(() => {
    const userSetPreference = getUserSetPreference();
    if (userSetPreference !== null) {
      setIsDarkTheme(userSetPreference === 'dark');
    } else {
      const mediaQueryPreference = getMediaQueryPreference();
      setIsDarkTheme(mediaQueryPreference === 'dark');
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkTheme !== undefined) {
      if (isDarkTheme) {
        root.setAttribute('data-theme', 'dark');
        storeUserSetPreference('dark');
      } else {
        root.removeAttribute('data-theme');
        storeUserSetPreference('light');
      }
    }
  }, [isDarkTheme]);

  return (
    <HomeWrapper>
      <Head>
        <title>Tom Keogh | Portfolio</title>
        <meta name='description' content="Tom Keogh's portfolio site" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>Tom's page</h1>
        <label>
          <input
            type='checkbox'
            checked={isDarkTheme}
            onChange={handleToggle}
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
