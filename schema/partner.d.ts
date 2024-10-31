import type {ID, String, Int} from './type';

import type {Reward as BaseReward} from './points';
import type {Member as BaseMember} from './appbase/members';

export * from './appbase/response';

/** - 會員 */
export interface Member extends BaseMember {
  /** - ID */
  id: ID!;
}

/** - 合作夥伴 */
export interface Partner {
  /** - ID */
  id: ID;
  /** - 申請人姓名 */
  fullName: String;
  /** - 手機號碼 */
  mobile: String;
  /** - 大頭貼照 */
  profilePicture: String;
  /** - 名稱 */
  name: String;
  /** - 電子信箱 */
  email: String;
  /** - 描述 */
  description: String;
  /** - 獎勵列表 */
  rewards: Reward[];
  /** - 獎勵總數 */
  rewardCount: Int;
  /** - 獎勵分類列表 */
  rewardCategories: RewardCategory[];
  /** - 獎勵分類總數 */
  rewardCategoryCount: Int;
  /** - 管理員列表 */
  managers: PartnerManager[];
  /** - 管理員總數 */
  managerCount: Int;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 合作夥伴輸入 */
export interface PartnerInput {
  /** - ID */
  id?: ID;
  /** - 申請人姓名 */
  fullName: String;
  /** - 手機號碼 */
  mobile: String;
  /** - 名稱 */
  name: String;
  /** - 電子信箱 */
  email: String;
  /** - 簡介 */
  description: String;
  /** - 大頭貼 */
  profilePicture: String;
}

/** - 獎勵 */
export interface Reward extends BaseReward {
  /** - ID */
  id: ID;
  /** - 合作夥伴 */
  partner?: Partner;
}

/** - 合作夥伴獎勵輸入 */
export interface PartnerRewardInput {
  /** - ID */
  id?: ID;
  /** - 合作夥伴 ID */
  partnerId: ID;
  /** - 分類 ID */
  categoryId: ID;
  /** - 名稱 */
  name: String;
  /** - 點數 */
  points: Int;
  /** - 相片 */
  photos: String[];
  /** - 描述 */
  description: String;
  /** - 規格 */
  specifications?: PartnerRewardSpecificationInput[];
  /** - 上架 */
  enabled: Boolean;
}

/** - 合作夥伴獎勵規格輸入 */
export interface PartnerRewardSpecificationInput {
  /** - 名稱 */
  name: String;
  /** - 選項 */
  options: String[];
}

/** - 獎勵分類 */
export interface RewardCategory {
  /** - ID */
  id: ID;
  /** - 合作夥伴 */
  partners: Partner[];
  /** - 合作夥伴數量 */
  partnerCount: Int;
}

/** - 合作夥伴申請 */
export interface PartnerApplication {
  /** - ID */
  id: ID;
  /** - 申請人姓名 */
  fullName: String;
  /** - 手機號碼 */
  mobile: String;
  /** - 合作夥伴名稱 */
  partnerName: String;
  /** - 電子信箱 */
  email: String;
  /** - 簡介 */
  description: String;
  /** - 大頭貼 */
  profilePicture: String;
  /** - 狀態 */
  status: PartnerApplicationStatus;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 合作夥伴申請輸入 */
export interface PartnerApplicationInput {
  /** - ID */
  id?: ID;
  /** - 申請人姓名 */
  fullName: String;
  /** - 手機號碼 */
  mobile: String;
  /** - 合作夥伴名稱 */
  partnerName: String;
  /** - 電子信箱 */
  email: String;
  /** - 簡介 */
  description: String;
  /** - 大頭貼 */
  profilePicture: String;
}

/**
 * - 合作夥伴申請狀態
 *    - `PENDING`: "等待中"
 *    - `ACCEPTED`: "已接受"
 *    - `REJECTED`: "已拒絕"
 * */
export type PartnerApplicationStatus = 'PENDING' | 'ACCEPTED' | 'REJECTED';

/** - 合作夥伴管理員 */
export interface PartnerManager {
  /** - ID */
  id: ID;
  /** - 合作夥伴 */
  partner: Partner;
  /** - 會員 */
  member: Member;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 合作夥伴管理員輸入 */
export interface PartnerManagerInput {
  /** - ID */
  id?: ID;
  /** - 合作夥伴 */
  partnerId: ID;
  /** - 會員 */
  memberId: ID;
}
