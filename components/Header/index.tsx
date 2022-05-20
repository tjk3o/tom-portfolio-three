import { ReactNode, useState, useEffect } from 'react';
import Avatar from '../Avatar';
import { Toggle } from '../Buttons/Toggle';
import { HeaderContainer, ToggleText } from './styles';

type HeaderProps = {
  showToggleText: boolean;
  isDarkTheme: boolean;
  handleSetIsDarkTheme: () => void;
};

export default function Header({
  showToggleText,
  isDarkTheme,
  handleSetIsDarkTheme,
}: HeaderProps): ReactNode {
  const [small, setSmall] = useState(false);

  // TODO debounce resize function
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);

  return (
    <HeaderContainer
      animate={{ height: small ? 60 : 200 }}
      transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
    >
      <Avatar small={small} />
      <div style={{ position: 'absolute', right: 0, display: 'flex' }}>
        <ToggleText showToggleText={showToggleText}>dark mode</ToggleText>
        <Toggle isOn={isDarkTheme} toggleSwitch={handleSetIsDarkTheme} />
      </div>
    </HeaderContainer>
  );
}
