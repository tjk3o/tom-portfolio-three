import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AvatarImage = styled(motion.img)`
  border-radius: 50%;
  ${({ small }) =>
    small ? `height: 50px; width: 50px;` : 'height: 180px; width: 180px;'}

  background: var(--color-pink);
  margin: 0 auto;
`;
