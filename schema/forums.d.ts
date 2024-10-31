import Forums from './appbase/forums';
import Members from './appbase/members';

export * from './appbase/forums';

export interface Member extends Forums.Member, Members.Member {
  /** - 擔任版主的討論區列表 */
  moderatedForums: Forum[];
}

export interface Forum extends Forums.Forum {
  /** - 版主列表 */
  moderators: Member[];
  /** - 討論串列表 */
  threads: ForumThread[];
}

export interface ForumThread extends Forums.ForumThread {
  /** - 第一篇發言 */
  originalPost: ForumPost;
  /** - 發言列表 */
  posts: ForumPost[];
}

export interface ForumPost extends Forums.ForumPost {
  member: Member;
}
