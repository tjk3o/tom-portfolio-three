import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SwitchContainer = styled.div`
  position: fixed;
  right: 10px;
  width: 45px;
  height: 28px;
  background-color: var(--color-secondary);
  display: flex;
  justify-content: flex-start;
  border-radius: 50px;
  padding: 2px;
  cursor: pointer;

  ${({ isOn }) =>
    isOn ? 'justify-content: flex-end;' : 'justify-content: flex-start;'};
  }
`;

export const Switch = styled(motion.div)`
  width: 24px;
  height: 24px;
  background-color: var(--color-tertiary);
  border-radius: 50%;
`;
