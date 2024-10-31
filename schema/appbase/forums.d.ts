import type {ID, String, Int, Boolean} from '../type';

export * from './response';

/** - 會員 */
export interface Member {
  /** - ID */
  id: ID;
  /** - 擔任版主的討論區列表 */
  moderatedForums: Forum[];
  /** - 擔任版主的討論區總數 */
  moderatedForumCount: Int;
  /** - 討論區發言列表 */
  forumPosts: ForumPost[];
  /** - 討論區發言總數 */
  forumPostCount: Int;
  /** - 按讚的討論區發言列表 */
  likedForumPosts: ForumPost[];
  /** - 按讚的討論區發言總數 */
  likedForumPostCount: Int;
}

/** - 討論區 */
export interface Forum {
  /** - ID */
  id: ID;
  /** - 名稱 */
  name: String;
  /** - 封面相片 */
  coverPhoto: String;
  /** - 版主列表 */
  moderators: Member[];
  /** - 版主總數 */
  moderatorCount: Int;
  /** - 公告列表 */
  announcements: ForumAnnouncement[];
  /** - 公告總數 */
  announcementCount: Int;
  /** - 討論串列表 */
  threads: ForumThread[];
  /** - 討論串總數 */
  threadCount: Int;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 討論區輸入 */
export interface ForumInput {
  /** - ID */
  id?: ID;
  /** - 名稱 */
  name: String;
  /** - 封面相片 */
  coverPhoto: String;
  /** - 版主 ID */
  moderatorIds: ID[];
}

/** - 討論區公告 */
export interface ForumAnnouncement {
  /** - ID */
  id: ID;
  /** - 內文 */
  body: String;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 討論區公告輸入 */
export interface ForumAnnouncementInput {
  /** - ID */
  id?: ID;
  /** - 討論區 ID */
  forumId: ID;
  /** - 內文 */
  body: String;
}

/** - 討論區討論串 */
export interface ForumThread {
  /** - ID */
  id: ID;
  /** - 標題 */
  title: String;
  /** - 第一篇發言 */
  originalPost: ForumPost;
  /** - 發言列表 */
  posts: ForumPost[];
  /** - 發言總數 */
  postCount: Int;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 討論區討論串輸入 */
export interface ForumThreadInput {
  /** - 討論區 ID */
  forumId: ID;
  /** - 標題 */
  title: String;
  /** - 第一篇發言內文 */
  originalPostBody: String;
}

/** - 討論區發言 */
export interface ForumPost {
  /** - ID */
  id: ID;
  /** - 討論串 */
  thread: ForumThread;
  /** - 會員 */
  member: Member;
  /** - 內文 */
  body: String;
  /** - 已按讚 */
  liked: Boolean;
  /** - 按讚會員列表 */
  likedBy: Member[];
  /** - 按讚數 */
  likeCount: Int;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 討論區發言輸入 */
export interface ForumPostInput {
  /** - ID */
  id?: ID;
  /** - 討論串 */
  threadId: ID;
  /** - 內文 */
  body: String;
}
