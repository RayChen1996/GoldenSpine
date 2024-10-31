import {colord} from 'colord';
import type {ViewStyle} from 'react-native';
import type {SxProps} from '@gluestack-style/react/lib/typescript/types';

import getOverlayAlpha from '@/utils/getOverlayAlpha';

type PressableSxType = SxProps<ViewStyle>;

/** - 生成背景色 */
function _generateBgColor(basicColor: string) {
  return colord(basicColor).alpha(getOverlayAlpha(1)).toHex();
}
/** - 淺色模式背景 */
const _lightBg = _generateBgColor('#000');
/** - 深色模式背景 */
const _darkBg = _generateBgColor('#fff');

/** - 基本按下的sx */
export const pressableSx: PressableSxType = {
  ':active': {
    backgroundColor: _lightBg,
  },
  _dark: {
    ':active': {backgroundColor: _darkBg},
  },
};

/** - 基本按下的sx(反轉) */
export const pressableInvertSx: PressableSxType = {
  ':active': {
    backgroundColor: _darkBg,
  },
  _dark: {
    ':active': {backgroundColor: _lightBg},
  },
};

/** - 固定淺色按下的sx */
export const pressableLightSx: PressableSxType = {
  ':active': {
    backgroundColor: _lightBg,
  },
};

/** - 固定深色按下的sx */
export const pressableDarkSx: PressableSxType = {
  ':active': {
    backgroundColor: _darkBg,
  },
};
