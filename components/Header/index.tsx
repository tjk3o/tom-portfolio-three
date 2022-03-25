import { ReactNode } from 'react';
import { HeaderContainer } from './styles';

export default function Header({ children }: { children: ReactNode }) {
  return <HeaderContainer>{children}</HeaderContainer>;
}
