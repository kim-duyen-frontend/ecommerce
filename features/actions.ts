import commerce from "@/utils/api";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { TAddCart, TItemPages } from "./types";

export const getListProduct = createAsyncThunk(
  "shoppingcart/list",
  async () => {
    const response = await commerce.products.list();
    return response;
  }
);
export const getCartProduct = createAsyncThunk(
  "shoppingcart/cart",
  async () => {
    const response = await commerce.cart.retrieve("cart_G6kVw7Q3vK52eD");
    return response;
  }
);
export const addToCart = createAsyncThunk(
  "shoppingcart/addtocart",
  async (dataProduct: TAddCart) => {
    const response = await commerce.cart.add(
      dataProduct.id,
      dataProduct.quantity
    );
    return response;
  }
);
export const getListSortProduct = createAction<string>("shoppingcart/sortlist");
export const getListSearchProduct = createAction<string>(
  "shoppingcart/searchlist"
);
export const setPagePagination = createAction<number>(
  "shoppingcart/activepage"
);
export const setItemPages = createAction<TItemPages>("shoppingcart/itempages");
