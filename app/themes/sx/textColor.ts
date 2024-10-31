import type {TextStyle} from 'react-native';
import type {SxProps} from '@gluestack-style/react/lib/typescript/types';

type TextColorSxType = SxProps<TextStyle>;

/** - 文字顏色`sx` */
const textColorSx: TextColorSxType = {
  color: '$textLight700',
  _dark: {
    color: '$textDark200',
  },
};

export default textColorSx;
