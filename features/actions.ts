import commerce from "@/utils/api";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const getListProduct = createAsyncThunk(
  "shoppingcart/list",
  async () => {
    const response = await commerce.products.list();
    return response;
  }
);
export const getListSortProduct = createAction<string>("shoppingcart/sortlist");
export const getListSearchProduct = createAction<string>("shoppingcart/searchlist");
