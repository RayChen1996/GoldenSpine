/** - 獲得圖層透明度 */
export default function getOverlayAlpha(elevation: number) {
  let alphaValue = 0;
  if (elevation < 1) {
    alphaValue = 5.11916 * Math.pow(elevation, 2);
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return parseFloat((alphaValue / 100).toFixed(2));
}
