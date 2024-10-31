/** - 獲得youtube影片id */
export default function getYoutubeURLId(url?: string) {
  const match = url?.match(regExp);
  return match?.[6] || null;
}

/** - 正則表達式 */
const regExp =
  /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|live\/|v\/)?)([\w-]+)(\S+)?$/;
