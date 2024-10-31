import Members from './appbase/members';
import Points from './appbase/points';
import Forums from './appbase/forums';
export * from './appbase/members';

export interface Member extends Members.Member, Points.Member, Forums.Member {}
