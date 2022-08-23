import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ToggleText = styled(motion.span)`
  color: var(--color-primary);
  position: fixed;
  bottom: 5px;
  right: 10px;
  font-size: 12px;

  ${({ showToggleText }) =>
    showToggleText
      ? 'opacity: 1; transition: opacity 0.5s;'
      : 'opacity: 0; transition: opacity 0.5s;'};
`;
