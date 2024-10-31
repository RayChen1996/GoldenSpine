import Points from './appbase/points';
import {Partner} from './partner';
import Members from './appbase/members';

export * from './appbase/points';

export interface Reward extends Points.Reward {
  partner?: Partner;
}

export interface RewardRedemption extends Points.RewardRedemption {
  member: Members.Member;
}
