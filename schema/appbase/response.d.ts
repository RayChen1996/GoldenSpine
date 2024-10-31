import type {String, Boolean} from '../type';

/** - 回應 */
export interface Response {
  /** - 成功 */
  success: Boolean;
  /** - 訊息 */
  message?: String;
}
