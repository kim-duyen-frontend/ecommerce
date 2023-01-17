import commerce from "@/utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getListProduct = createAsyncThunk(
  "shoppingcart/list",
  async () => {
    const response = await commerce.products.list();
    return response;
  }
);
