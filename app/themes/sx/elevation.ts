import type {ViewStyle} from 'react-native';
import type {SxProps} from '@gluestack-style/react/lib/typescript/types';

import elevation, {ElevationKeys} from '@/options/elevation';

type ElevationSxType = SxProps<ViewStyle>;

/** - 背景顏色深度的sx */
const elevationSx = (() => {
  const result = {} as Record<ElevationKeys, ElevationSxType>;
  for (let index = 0, length = 24; index <= length; index++) {
    const _key = `${index}` as ElevationKeys;
    result[_key] = {
      backgroundColor: elevation.dark[_key],
      _dark: {
        backgroundColor: elevation.light[_key],
      },
    };
  }
  return result;
})();
export default elevationSx;
