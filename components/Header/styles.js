import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HEADER_HEIGHT = 60;
export const LARGE_HEADER_HEIGHT = 200;
export const HeaderContainer = styled(motion.header)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10px;
  position fixed;
  background: grey;
`;

export const ToggleText = styled(motion.span)`
  color: var(--color-primary);
  margin-right: 10px;

  ${({ showToggleText }) =>
    showToggleText
      ? 'opacity: 1; transition: opacity 0.5s;'
      : 'opacity: 0; transition: opacity 0.5s;'};
`;
