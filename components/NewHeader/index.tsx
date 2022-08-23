import React, { useEffect, useState } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { Toggle } from '../Buttons/Toggle';

function Header({
  handleSetIsDarkTheme,
  isDarkTheme,
  showToggleText,
}: {
  handleSetIsDarkTheme: (preference: string) => void;
  isDarkTheme: boolean;
  showToggleText: boolean;
}): React.ReactElement {
  const [scrollYOffset, setScrollYOffset] = useState(0);
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    setScrollYOffset(window?.scrollY);
  }, []);

  const headerColor = useTransform(
    scrollY,
    [0, 120, 130],
    [
      'var(--color-header-background)',
      'var(--color-header-background)',
      'var(--color-tertiary)',
    ]
  );

  const threshold = scrollY === 0 ? scrollYOffset : scrollY;
  const headerTitleOpacity = useTransform(threshold, [58, 59], ['0%', '100%']);
  return (
    <motion.header
      style={{
        position: 'fixed',
        zIndex: 2,
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
      <motion.h1
        style={{
          color: 'var(--color-primary)',
          opacity: headerTitleOpacity,
          width: 'fit-content',
          margin: '0 auto',
          fontSize: '16px',
        }}
      >
        Tom Keogh
      </motion.h1>
      <Toggle
        isOn={isDarkTheme}
        toggleSwitch={handleSetIsDarkTheme}
        showToggleText={showToggleText}
      />
    </motion.header>
  );
}

export default Header;
