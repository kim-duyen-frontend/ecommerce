import { Cart } from "@chec/commerce.js/types/cart";
import { Product } from "@chec/commerce.js/types/product";

export type TProductsState = {
  pending: boolean;
  products: Product[]
  cart: Cart
  type_sort: string | null
  text_search: string;
  newFilterSearchList: Product[]
  active_page: number
  item_pages: TItemPages
};
export type TPaginationProducts = {
  total: number
}
export type TItemPages = {
  minItem: number
  maxItem: number
}