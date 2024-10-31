import type {ID, String, Boolean, Int} from '../type';

export * from './response';

/** - 輪播圖 */
export interface Carousel {
  /** - ID */
  id: ID;
  /** - 名稱 */
  name: String;
  /** - 內容 */
  items: CarouselItem[];
  /** - 間隔時間（毫秒） */
  interval?: Int;
  /** - 啟用 */
  enabled: Boolean;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 輪播圖輸入 */
export interface CarouselInput {
  /** - ID */
  id?: ID;
  /** - 名稱 */
  name: String;
  /** - 內容 */
  items: CarouselItemInput[];
  /** - 間隔時間（毫秒） */
  interval?: Int;
}

/** - 輪播圖內容 */
export interface CarouselItem {
  /** - 圖片 */
  image: String;
  /** - 標題 */
  caption?: String;
  /** - 連結 */
  link?: String;
}

/** - 輪播圖內容輸入 */
export interface CarouselItemInput {
  /** - 圖片 */
  image: String;
  /** - 標題 */
  caption?: String;
  /** - 連結 */
  link?: String;
}

/** - 常見問題 */
export interface FAQ {
  /** - ID */
  id: ID;
  /** - 問題 */
  question: String;
  /** - 答案 */
  answer: String;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 常見問題輸入 */
export interface FAQInput {
  /** - ID */
  id?: ID;
  /** - 問題 */
  question: String;
  /** - 答案 */
  answer: String;
}

/** - 文章 */
export interface Post {
  /** - ID */
  id: ID;
  /** - 代稱 */
  slug: String;
  /** - 標題 */
  title: String;
  /** - 內文 */
  body: String;
  /** - 主題圖片 */
  featureImage: String;
  /** - 推薦 */
  featured: Boolean;
  /** - 標籤列表 */
  tags: Tag[];
  /** - 標籤總數 */
  tagCount: Int;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 文章輸入 */
export interface PostInput {
  /** - ID */
  id?: ID;
  /** - 代稱 */
  slug: String;
  /** - 標題 */
  title: String;
  /** - 內文 */
  body: String;
  /** - 主題圖片 */
  featureImage: String;
  /** - 推薦 */
  featured?: Boolean;
  /** - 標籤 */
  tagIds: ID[];
}

/** - 影片 */
export interface Video {
  /** - ID */
  id: ID;
  /** - 代稱 */
  slug: String;
  /** - 標題 */
  title: String;
  /** - 網址 */
  url: String;
  /** - 主題圖片 */
  featureImage: String;
  /** - 推薦 */
  featured: Boolean;
  /** - 標籤列表 */
  tags: Tag[];
  /** - 標籤總數 */
  tagCount: Int;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 影片輸入 */
export interface VideoInput {
  /** - ID */
  id?: ID;
  /** - 代稱 */
  slug: String;
  /** - 標題 */
  title: String;
  /** - 網址 */
  url: String;
  /** - 主題圖片 */
  featureImage: String;
  /** - 推薦 */
  featured: Boolean;
  /** - 標籤 */
  tagIds: ID[];
}

/** - 標籤 */
export interface Tag {
  /** - ID */
  id: ID;
  /** - 名稱 */
  name: String;
  /** - 代稱 */
  slug: String;
  /** - 描述 */
  description?: String;
  /** - 主題圖片 */
  featureImage?: String;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 標籤輸入 */
export interface TagInput {
  /** - ID */
  id?: ID;
  /** - 名稱 */
  name: String;
  /** - 代稱 */
  slug: String;
  /** - 描述 */
  description?: String;
  /** - 主題圖片 */
  featureImage?: String;
}
