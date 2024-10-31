import type {ID, String, Int} from './type';

export * from './appbase/response';

/** - 會員 */
export interface Member {
  /** - ID */
  id: ID;
  /** - 意見回饋列表 */
  feedbackSubmissions: FeedbackSubmission[];
  /** - 意見回饋總數 */
  feedbackSubmissionCount: Int;
}
/** - 意見回饋 */
export interface FeedbackSubmission {
  /** - ID */
  id: ID;
  /** - 會員 */
  member?: Member;
  /** - 說明 */
  description: String;
  /** - 分數 */
  score?: Int;
  /** - 附件 */
  attachments?: String[];
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}
/** - 意見回饋滿意度 */
export interface FeedbackSatisfaction {
  /** - 分數列表 */
  scores: FeedbackSatisfactionScore[];
  /** - 平均分數 */
  averageScore: Int;
}
/** - 意見回饋滿意度分數 */
export interface FeedbackSatisfactionScore {
  /** - 分數 */
  score: Int;
  /** - 意見回饋總數 */
  feedbackSubmissionCount: Int;
  /** - 意見回饋百分比 */
  feedbackSubmissionPercentage: Float;
}
