import type {ID, String, Boolean, Int, Float} from '../type';
import {Response} from './response';

export * from './response';

/** - 訂單更新回應 */
export interface OrderUpdateResponse extends Response {
  /** - 訂單 */
  order?: Order;
}

/** - 購物車更新回應 */
export interface CartUpdateResponse extends Response {
  /** - 購物車 */
  cart?: Cart;
}

/** - 會員 */
export interface Member {
  /** - ID */
  id: ID;
  /** - 最新建立的購物車 */
  lastCart?: Cart;
  /** - 購物車列表 */
  carts: Cart[];
  /** - 購物車總數 */
  cartCount: Int;
  /** - 最新建立的訂單 */
  lastOrder?: Order;
  /** - 訂單列表 */
  orders: Order[];
  /** - 訂單總數 */
  orderCount: Int;
}

/** - 商品 */
export interface Product {
  /** - ID */
  id: ID;
  /** - 名稱 */
  name: String;
  /** - 副標題 */
  subtitle?: String;
  /** - 代稱 */
  slug?: String;
  /** - 相片 */
  photos?: String[];
  /** - 類別 */
  category?: ProductCategory;
  /** - 原價 */
  originalPrice: Float;
  /** - 折扣價 */
  discountPrice?: Float;
  /** - 行銷宣傳文字 */
  promotionalText?: String[];
  /** - 描述 */
  description?: String;
  /** - 規格 */
  specifications?: ProductSpecification[];
  /** - 庫存紀錄列表 */
  stocks: ProductStock[];
  /** - 庫存紀錄總數 */
  stockCount: Int;
  /** - 當前庫存數量 */
  currentStockAmount: Int;
  /** - 優先順序 */
  priority: Int;
  /** - 啟用 */
  enabled: Boolean;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 商品輸入 */
export interface ProductInput {
  /** - ID */
  id?: ID;
  /** - 名稱 */
  name: String;
  /** - 副標題 */
  subtitle?: String;
  /** - 代稱 */
  slug?: String;
  /** - 相片 */
  photos?: String[];
  /** - 類別 */
  categoryId?: ID;
  /** - 原價 */
  originalPrice: Float;
  /** - 折扣價 */
  discountPrice?: Float;
  /** - 行銷宣傳文字 */
  promotionalText?: [String];
  /** - 描述 */
  description?: String;
  /** - 規格 */
  specifications?: ProductSpecificationInput[];
  /** - 啟用 */
  enabled: Boolean;
}

/** - 商品類別 */
export interface ProductCategory {
  /** - ID */
  id: ID;
  /** - 名稱 */
  name: String;
  /** - 副標題 */
  subtitle?: String;
  /** - 代稱 */
  slug?: String;
  /** - 相片 */
  photos?: String[];
  /** - 啟用 */
  enabled: Boolean;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 商品類別輸入 */
export interface ProductCategoryInput {
  /** - ID */
  id?: ID;
  /** - 名稱 */
  name: String;
  /** - 副標題 */
  subtitle?: String;
  /** - 代稱 */
  slug?: String;
  /** - 相片 */
  photos?: String[];
  /** - 啟用 */
  enabled: Boolean;
}

/** - 商品規格 */
export interface ProductSpecification {
  /** - ID */
  id: ID;
  /** - 商品 */
  product: Product;
  /** - 名稱 */
  name: String;
  /** - 相片 */
  photos?: String[];
  /** - 原價 */
  originalPrice?: Float;
  /** - 折扣價 */
  discountPrice?: Float;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 商品規格輸入 */
export interface ProductSpecificationInput {
  /** - ID */
  id?: ID;
  /** - 名稱 */
  name: String;
  /** - 相片 */
  photos?: String[];
  /** - 原價 */
  originalPrice?: Float;
  /** - 折扣價 */
  discountPrice?: Float;
}

/** - 商品庫存紀錄 */
export interface ProductStock {
  /** - ID */
  id?: ID;
  /** - 數量 */
  amount: Int;
  /** - 備註 */
  note?: String;
  /** - 訂單 */
  order?: Order;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 購物車 */
export interface Cart {
  /** - ID */
  id: ID;
  /** - 會員 */
  member?: Member;
  /** - 品項 */
  items: CartItem[];
  /** - 商品總金額 */
  subtotalPrice: Float;
  /** - 結帳總金額 */
  totalPrice: Float;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 購物車品項 */
export interface CartItem {
  /** - ID */
  id: ID;
  /** - 商品 */
  product: Product;
  /** - 規格 */
  specification?: ProductSpecification;
  /** - 單價 */
  unitPrice: Float;
  /** - 數量 */
  quantity: Int;
  /** - 小計 */
  totalPrice: Float;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 訂單 */
export interface Order {
  /** - ID */
  id: ID;
  /** - 會員 */
  member?: Member;
  /** - 購物車 */
  cart?: Cart;
  /** - 編號 */
  number: String;
  /** - 品項 */
  items: OrderItem[];
  /** - 商品總金額 */
  subtotalPrice: Float;
  /** - 結帳總金額 */
  totalPrice: Float;
  /** - 寄送方式 */
  receiver?: OrderReceiver;
  /** - 狀態 */
  status: OrderStatus;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 訂單輸入 */
export interface OrderInput {
  /** - 購物車 ID */
  cartId?: ID;
  /** - 品項 */
  items: OrderItemInput[];
  /** - 寄送方式 */
  receiver?: OrderReceiverInput;
}

/** - 訂單品項 */
export interface OrderItem {
  /** - ID */
  id: ID;
  /** - 商品 */
  product: Product;
  /** - 規格 */
  specification?: ProductSpecification;
  /** - 單價 */
  unitPrice: Float;
  /** - 數量 */
  quantity: Int;
  /** - 小計 */
  totalPrice: Float;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 訂單品項輸入 */
export interface OrderItemInput {
  /** - 商品 */
  productId: ID;
  /** - 規格 */
  specificationId?: ID;
  /** - 數量 */
  quantity: Int;
}

/** - 訂單寄送方式 */
export interface OrderReceiver {
  /** - 姓名 */
  fullName: String;
  /** - 手機號碼 */
  mobile: String;
  /** - 收件地址 */
  address: OrderReceiverAddress;
}

/** - 訂單寄送方式輸入 */
export interface OrderReceiverInput {
  /** - 姓名 */
  fullName: String;
  /** - 手機號碼 */
  mobile: String;
  /** - 收件地址 */
  address: OrderReceiverAddressInput;
}

/** - 訂單寄送方式地址 */
export interface OrderReceiverAddress {
  /** - 郵遞區號 */
  zipcode?: String;
  /** - 縣市 */
  division: String;
  /** - 區域 */
  subdivision: String;
  /** - 地址 */
  address: String;
}

/** - 訂單寄送方式地址輸入 */
export interface OrderReceiverAddressInput {
  /** - 郵遞區號 */
  zipcode?: String;
  /** - 縣市 */
  division: String;
  /** - 區域 */
  subdivision: String;
  /** - 地址 */
  address: String;
}

/**
 * - 訂單狀態
 *    - `WAITING_FOR_PAYMENT`: 尚未付款
 *    - `WAITING_FOR_SHIPMENT`: 等待出貨
 *    - `SHIPPING`: 寄送中
 *    - `COMPLETED`: 已完成
 */
export type OrderStatus =
  | 'WAITING_FOR_PAYMENT'
  | 'WAITING_FOR_SHIPMENT'
  | 'SHIPPING'
  | 'COMPLETED';
