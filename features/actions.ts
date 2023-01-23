import commerce from "@/utils/api";
import { Product } from "@chec/commerce.js/types/product";
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
export const removeProductFromCart = createAsyncThunk(
  "shoppingcart/removeproductcart",
  async (id: string) => {
    const response = await commerce.cart.remove(id);
    return response;
  }
);
export const deleteCart = createAsyncThunk(
  "shoppingcart/deletecart",
  async () => {
    const response = await commerce.cart.empty();
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
export const setHeartList = createAction<Product>("shoppingcart/heartlist");
