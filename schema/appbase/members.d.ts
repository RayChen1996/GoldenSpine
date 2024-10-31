import type {ID, String, Boolean, Int} from '../type';
import {Response} from './response';

export * from './response';

/** - 驗證回應 */
export interface VerificationResponse extends Response {
  /** - 已存在的會員 */
  existingMember?: Boolean;
}

/** - 登入回應 */
export interface SignInResponse extends Response {
  /** - 會員 */
  member?: Member;
  /** - 登入憑證 */
  token?: String;
}

/** - 會員 */
export interface Member {
  /** - ID */
  id: ID;
  /** - 社群登入 */
  socialSignIns: SocialSignIn[];
  /** - 帳號 */
  username?: String;
  /** - 國碼 */
  countryCode?: String;
  /** - 手機號碼 */
  mobile?: String;
  /** - 備用手機號碼 */
  secondaryMobiles?: Mobile[];
  /** - 電子信箱 */
  email?: String;
  /** - 備用電子信箱 */
  secondaryEmails?: String[];
  /** - 編號 */
  number?: String;
  /** - 名字 */
  firstName?: String;
  /** - 姓氏 */
  lastName?: String;
  /** - 姓名 */
  fullName?: String;
  /** - 暱稱 */
  nickname?: String;
  /** - 大頭貼照 */
  profilePicture?: String;
  /** - 生日 */
  dob?: Date;
  /** - 性別 */
  gender?: Gender;
  /** - 邀請人 */
  referrer?: Member;
  /** - 邀請的會員 */
  referrees?: Member[];
  /** - 邀請的會員總數 */
  referreeCount: Int;
  /** - 邀請碼 */
  referralCode?: String;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 會員輸入 */
export interface MemberInput {
  /** - ID */
  id?: ID;
  /** - 帳號 */
  username?: String;
  /** - 密碼 */
  password?: String;
  /** - 國碼 */
  countryCode?: String;
  /** - 手機號碼 */
  mobile?: String;
  /** - 備用手機號碼 */
  secondaryMobiles?: MobileInput[];
  /** - 電子信箱 */
  email?: String;
  /** - 備用電子信箱 */
  secondaryEmails?: String[];
  /** - 編號 */
  number?: String;
  /** - 名字 */
  firstName?: String;
  /** - 姓氏 */
  lastName?: String;
  /** - 姓名 */
  fullName?: String;
  /** - 暱稱 */
  nickname?: String;
  /** - 大頭貼照 */
  profilePicture?: String;
  /** - 生日 */
  dob?: Date;
  /** - 性別 */
  gender?: Gender;
  /** - 邀請碼 */
  referralCode?: String;
}

/** - 手機號碼 */
export interface Mobile {
  /** - 國碼 */
  countryCode?: String;
  /** - 手機號碼 */
  mobile: String;
}

/** - 手機號碼輸入 */
export interface MobileInput {
  /** - 國碼 */
  countryCode?: String;
  /** - 手機號碼 */
  mobile: String;
}

/**
 * - 性別
 *    - `MALE`: 男性
 *    - `FEMALE`: 女性
 *    - `OTHER`: 其他
 */
export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

/** - 社群登入 */
export interface SocialSignIn {
  /** - 授權供應商 */
  authProvider: AuthProvider;
  /** - 編號 */
  id: String;
}

/** - 社群登入輸入 */
export interface SocialSignInInput {
  /** - 授權供應商 */
  authProvider: AuthProvider;
  /** - 編號 */
  id: String;
  /** - 名稱 */
  name: String;
  /** - 電子信箱 */
  email?: String;
  /** - 存取權杖 */
  accessToken: String;
}

/**
 * - 授權供應商
 *    - `FACEBOOK`: Facebook
 *    - `GOOGLE`: Google
 *    - `LINE`: LINE
 */
export type AuthProvider = 'FACEBOOK' | 'GOOGLE' | 'LINE';
