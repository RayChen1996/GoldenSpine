import {format} from 'date-fns/format';

/** - 取得相對時間字串 */
export default function getRelativeTimeString(targetDate: Date): string {
  const now = new Date();
  const timeDifference = now.getTime() - targetDate.getTime();

  if (timeDifference < minute) {
    return '不到一分鐘前';
  } else if (timeDifference < hour) {
    const mins = Math.floor(timeDifference / minute);
    return `${mins}\u00A0分鐘前`;
  } else if (timeDifference < day) {
    const hours = Math.floor(timeDifference / hour);
    return `${hours}\u00A0小時前`;
  } else if (timeDifference < month) {
    const days = Math.floor(timeDifference / day);
    return `${days}\u00A0天前`;
  } else if (timeDifference < year) {
    const months = Math.floor(timeDifference / month);
    return `${months}\u00A0個月前`;
  } else {
    return format(targetDate, 'yyyy/LL/dd');
  }
}

const minute = 60 * 1000;
const hour = minute * 60;
const day = hour * 24;
const month = day * 30;
const year = month * 12;
