import {colord} from 'colord';

import getOverlayAlpha from '@/utils/getOverlayAlpha';

export type ElevationKeys =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
  | '23'
  | '24';

/** - 生成背景色 */
function _generateBgColor(basicColor: string, alpha: number) {
  if (alpha === 0) {
    return 'transparent';
  }
  return colord(basicColor).alpha(alpha).toHex();
}

function _creatColorMap(basicColor: string) {
  const result = {} as Record<ElevationKeys, string>;
  for (let index = 0, length = 24; index <= length; index++) {
    result[String(index) as ElevationKeys] = _generateBgColor(
      basicColor,
      getOverlayAlpha(index),
    );
  }
  return result;
}

function _creatOpacity() {
  const result = {} as Record<ElevationKeys, number>;
  for (let index = 0, length = 24; index <= length; index++) {
    result[String(index) as ElevationKeys] = getOverlayAlpha(index);
  }
  return result;
}

/** - 亮色 */
const light = _creatColorMap('#ffffff');

/** - 深色 */
const dark = _creatColorMap('#000000');

/** - 背景深度 */
export default {
  /** - 亮色 */
  light,
  /** - 深色 */
  dark,
  /** - 透明度 */
  opacity: _creatOpacity(),
};
