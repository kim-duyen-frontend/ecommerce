import { Product } from "@chec/commerce.js/types/product";

export type TProductsState = {
  pending: boolean;
  products: Product[];
  type_sort: string | null;
  text_search: string;
  newFilterSearchList: Product[];
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