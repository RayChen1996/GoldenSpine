import type {ViewStyle} from 'react-native';
import type {SxProps} from '@gluestack-style/react/lib/typescript/types';

type PaperSxType = SxProps<ViewStyle>;

/** - 卡片背景顏色`sx` */
const paperSx: PaperSxType = {
  backgroundColor: '$backgroundLight0',
  _dark: {
    backgroundColor: '$backgroundDark900',
  },
};

export default paperSx;
