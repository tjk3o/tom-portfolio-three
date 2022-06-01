import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { Toggle } from '../Buttons/Toggle';
import { ToggleText } from './styles';

function Header({
  handleSetIsDarkTheme,
  isDarkTheme,
  showToggleText,
}: {
  handleSetIsDarkTheme: (preference: string) => void;
  isDarkTheme: boolean;
  showToggleText: boolean;
}): React.ReactElement {
  const { scrollY } = useViewportScroll();

  const headerColor = useTransform(
    scrollY,
    [0, 120, 130],
    [
      'var(--color-header-background)',
      'var(--color-header-background)',
      'var(--color-tertiary)',
    ]
  );
  const headerTitleOpacity = useTransform(scrollY, [58, 59], ['0%', '100%']);
  console.log(scrollY);
  return (
    <motion.header
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        height: 80,
        backdropFilter: 'blur(4px)',
        backgroundColor: headerColor,
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
      }}
    >
      {/* <ToggleText showToggleText={showToggleText}>dark mode</ToggleText> */}
      <motion.h1
        style={{
          color: 'var(--color-primary)',
          opacity: headerTitleOpacity,
          width: 'fit-content',
          margin: '0 auto',
          fontSize: '16px',
        }}
      >
        Tom's stuff
      </motion.h1>
      <Toggle isOn={isDarkTheme} toggleSwitch={handleSetIsDarkTheme} />
    </motion.header>
  );
}

export default Header;
