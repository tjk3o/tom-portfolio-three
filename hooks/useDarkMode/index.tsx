import { useContext } from 'react';
import { DarkModeContext } from './DarkModeProvider';

const useDarkMode = () => {
  const { handleSetIsDarkTheme, isDarkTheme } = useContext(DarkModeContext);
  return { handleSetIsDarkTheme, isDarkTheme };
};

export default useDarkMode;
