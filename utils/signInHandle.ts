import useTokenStore from '@/zustand/useTokenStore';

/** - 處理是否登入的相關事件 */
export default function signInHandle(
  onLoggedIn?: () => void,
  onNotLoggedIn?: () => void,
) {
  return async function () {
    /** - 是否有登入憑證 */
    const hasToken = Boolean(useTokenStore.getState().token);
    if (hasToken) {
      onLoggedIn?.();
    } else {
      onNotLoggedIn?.();
    }
  };
}
