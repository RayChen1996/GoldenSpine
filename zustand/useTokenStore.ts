import { createWithEqualityFn } from "zustand/traditional";
import { persist, createJSONStorage, combine } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { deepEqual } from "fast-equals";

/** - 狀態 */
export interface State {
  /** - token */
  token: string;
}
/** - 預設狀態 */
const initialState: State = {
  token: "",
};

/** - 登入憑證 */
const useTokenStore = createWithEqualityFn(
  persist(
    combine(initialState, (set) => ({
      /** - 更改token */
      setToken(token: State["token"]) {
        if (token && typeof token === "string") {
          set({ token });
        }
      },
      /** - 清除token */
      cleanToken() {
        set({ token: initialState.token });
      },
    })),
    {
      name: "@token",
      storage: createJSONStorage(() => AsyncStorage),
    }
  ),
  deepEqual
);

export default useTokenStore;
