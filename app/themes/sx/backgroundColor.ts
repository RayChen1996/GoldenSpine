import type {ViewStyle} from 'react-native';
import type {SxProps} from '@gluestack-style/react/lib/typescript/types';

type BackgroundColorSxType = SxProps<ViewStyle>;

/** - 背景顏色`sx` */
const backgroundColorSx: BackgroundColorSxType = {
  backgroundColor: '$backgroundLight0',
  _dark: {
    backgroundColor: '$backgroundDark950',
  },
};

export default backgroundColorSx;
