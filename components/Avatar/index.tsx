import { AvatarImage } from './styles';

export default function Avatar({ small }) {
  return (
    <AvatarImage
      small={small}
      src='/e8359216c694931167c71c457349e97b-sticker.png'
      alt='me'
      transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
    />
  );
}
