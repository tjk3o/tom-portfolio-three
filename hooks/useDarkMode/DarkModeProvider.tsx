import { createContext, useState, useCallback, useEffect } from 'react';

export const DarkModeContext = createContext({});

export default function DarkModeProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleSetIsDarkTheme = useCallback(
    function (event) {
      setIsDarkTheme(event.target.checked);
    },
    [setIsDarkTheme]
  );

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
    <DarkModeContext.Provider value={{ handleSetIsDarkTheme, isDarkTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
}
