import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/app/store";

export const selectCollectionEcommerce = (state: RootState) => state.products;
export const selectCollectionEcommerceSelector = createSelector(
  selectCollectionEcommerce,
  (state) => state
);
