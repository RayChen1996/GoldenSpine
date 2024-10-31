import type {ID, String, Int, Float, Boolean} from '../type';

export * from './response';

/** - 會員 */
export interface Member {
  /** - ID */
  id: ID;
  /** - 當前點數 */
  currentPoints: Float;
  /** - 點數紀錄列表 */
  points: Point[];
  /** - 點數紀錄總數 */
  pointCount: Int;
  /** - 最新的獎勵兌換 */
  currentRewardRedemption?: RewardRedemption;
  /** - 獎勵兌換列表 */
  rewardRedemptions: RewardRedemption[];
  /** - 獎勵兌換總數 */
  rewardRedemptionCount: Int;
}

/** - 點數紀錄 */
export interface Point {
  /** - ID */
  id: ID;
  /** - 會員 */
  member: Member;
  /** - 類型 */
  type: PointType;
  /** - 數量 */
  amount: Float;
  /** - 描述 */
  description?: String;
  /** - 獎勵兌換 */
  rewardRedemption?: RewardRedemption;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/**
 * - 點數紀錄類型
 *    - `EARNED`: 已獲得
 *    - `SPENT`: 已使用
 * */
export type PointType = 'EARNED' | 'SPENT';

/** - 獎勵 */
export interface Reward {
  /** - ID */
  id: ID;
  /** - 分類 */
  category: RewardCategory;
  /** - 名稱 */
  name: String;
  /** - 點數 */
  points: Float;
  /** - 相片 */
  photos: String[];
  /** - 描述 */
  description?: String;
  /** - 規格 */
  specifications?: RewardSpecification[];
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
  /** - 上架 */
  enabled: Boolean;
}

/** - 獎勵輸入 */
export interface RewardInput {
  /** - ID */
  id?: ID;
  /** - 分類 ID */
  categoryId: ID;
  /** - 名稱 */
  name: String;
  /** - 點數 */
  points: Int;
  /** - 相片 */
  photos: String[];
  /** - 描述 */
  description?: String;
  /** - 規格 */
  specifications?: RewardSpecificationInput[];
  /** - 上架 */
  enabled: Boolean;
}

/** - 獎勵分類 */
export interface RewardCategory {
  /** - ID */
  id: ID;
  /** - 名稱 */
  name: String;
  /** - 獎勵列表 */
  rewards: Reward[];
  /** - 獎勵總數 */
  rewardCount: Int;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 獎勵規格 */
export interface RewardSpecification {
  /** - 名稱 */
  name: String;
  /** - 選項 */
  options: String[];
}

/** - 獎勵規格輸入 */
export interface RewardSpecificationInput {
  /** - 名稱 */
  name: String;
  /** - 選項 */
  options: String[];
}

/** - 獎勵兌換 */
export interface RewardRedemption {
  /** - ID */
  id: ID;
  /** - 會員 */
  member: Member;
  /** - 獎勵 */
  reward: Reward;
  /** - 規格 */
  specifications: RewardRedemptionSpecification[];
  /** - 點數紀錄 */
  point: Point;
  /** - 到期日 */
  expiryDate?: Date;
  /** - 使用時間 */
  usedAt?: Date;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 獎勵兌換輸入 */
export interface RewardRedemptionInput {
  /** - 獎勵 */
  rewardId: ID;
  /** - 規格 */
  specifications?: RewardRedemptionSpecificationInput[];
}

/** - 獎勵兌換規格 */
export interface RewardRedemptionSpecification {
  /** - 名稱 */
  name: String;
  /** - 選項 */
  option: String;
}

/** - 獎勵兌換規格輸入 */
export interface RewardRedemptionSpecificationInput {
  /** - 名稱 */
  name: String;
  /** - 選項 */
  option: String;
}
