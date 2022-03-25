import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ToggleText } from '../../Home/styles';

export const SwitchContainer = styled.div`
  width: 60px;
  height: 40px;
  background-color: var(--color-secondary);
  display: flex;
  justify-content: flex-start;
  border-radius: 50px;
  padding: 5px;
  cursor: pointer;

  ${({ isOn }) =>
    isOn ? 'justify-content: flex-end;' : 'justify-content: flex-start;'};
  &:hover {
    ${ToggleText} {
      opacity: 0;
    }
  }
`;

export const Switch = styled(motion.div)`
  width: 30px;
  height: 30px;
  background-color: var(--color-primary);
  border-radius: 40px;
`;
