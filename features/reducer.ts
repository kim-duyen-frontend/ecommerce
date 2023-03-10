import { LIMIT_PAGE } from "@/utils/constVariable";
import { createReducer } from "@reduxjs/toolkit";
import {
  getCartProduct,
  getListProduct,
  getListSearchProduct,
  getListSortProduct,
  setHeartList,
  setItemPages,
  setPagePagination,
  setStarsProduct,
  updateHeartList,
} from "./actions";
import { TProductsState } from "./types";

const initialState: TProductsState = {
  pending: false,
  products: [
    {
      id: "",
      created: 0,
      updated: 0,
      active: false,
      permalink: "",
      name: "",
      description: "",
      price: {
        raw: 0,
        formatted: "",
        formatted_with_symbol: "",
        formatted_with_code: "",
      },
      inventory: {
        managed: false,
        available: 0,
      },
      media: {
        type: "",
        source: "",
      },
      sku: "",
      sort_order: 0,
      seo: {
        title: "",
        description: "",
      },
      thank_you_url: "",
      meta: "",
      conditionals: {
        is_active: false,
        is_tax_exempt: false,
        is_pay_what_you_want: false,
        is_inventory_managed: false,
        is_sold_out: false,
        has_digital_delivery: false,
        has_physical_delivery: false,
        has_images: false,
        collects_fullname: false,
        collects_shipping_address: false,
        collects_billing_address: false,
        collects_extra_fields: false,
      },
      is: {
        active: false,
        tax_exempt: false,
        pay_what_you_want: false,
        inventory_managed: false,
        sold_out: false,
      },
      has: {
        digital_delivery: false,
        physical_delivery: false,
        images: false,
        video: false,
        rich_embed: false,
      },
      collects: {
        fullname: false,
        shipping_address: false,
        billing_address: false,
        extra_fields: false,
      },
      checkout_url: {
        checkout: "",
        display: "",
      },
      extra_fields: [],
      variant_groups: [
        {
          id: "",
          name: "",
          meta: "",
          created: 0,
          updated: 0,
          options: [
            {
              id: "",
              name: "",
              price: {
                raw: 0,
                formatted: "",
                formatted_with_symbol: "",
                formatted_with_code: "",
              },
              assets: null,
              meta: "",
              created: 0,
              updated: 0,
            },
          ],
        },
      ],
      categories: [
        {
          id: "",
          slug: "",
          name: "",
        },
      ],
      assets: [],
      image: {
        id: "",
        url: "",
        description: "",
        is_image: false,
        filename: "",
        file_extension: "",
        image_dimensions: {
          width: 0,
          height: 0,
        },
        file_size: 0,
        meta: "",
        created_at: 0,
        updated_at: 0,
      },
      attributes: [
        {
          id: "",
          meta: "",
          name: "",
          value: null,
        },
      ],
      related_products: [],
    },
  ],
  cart: {
    id: "",
    created: 0,
    updated: 0,
    expires: 0,
    total_items: 0,
    total_unique_items: 0,
    subtotal: {
      raw: 0,
      formatted: "",
      formatted_with_code: "",
      formatted_with_symbol: "",
    },
    currency: {
      symbol: "",
      code: "",
    },
    discount_code: "",
    hosted_checkout_url: "",
    line_items: [],
  },
  type_sort: "",
  text_search: "",
  newFilterSearchList: [],
  active_page: 1,
  item_pages: {
    minItem: 0,
    maxItem: LIMIT_PAGE,
  },
  heartList: [],
  likes: [],
  starList: [],
};
export const ecommerceReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getListProduct.pending, (state) => {
      state.pending = true;
    })
    .addCase(getListProduct.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.products = payload.data;
    })
    .addCase(getCartProduct.pending, (state) => {
      state.pending = true;
    })
    .addCase(getCartProduct.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.cart = payload;
    })
    .addCase(getListSortProduct, (state, { payload }) => {
      state.pending = false;
      state.type_sort = payload;
    })
    .addCase(getListSearchProduct, (state, { payload }) => {
      const temp = [...state.products];
      state.text_search = payload;
      if (state.text_search) {
        state.newFilterSearchList = temp
          .slice(state.item_pages.minItem, state.item_pages.maxItem)
          .filter((item) =>
            item.name
              .toLocaleLowerCase()
              .includes(state.text_search.toLocaleLowerCase())
          );
      } else {
        state.newFilterSearchList = [];
      }
    })
    .addCase(setPagePagination, (state, { payload }) => {
      state.active_page = payload;
    })
    .addCase(setItemPages, (state, { payload }) => {
      state.item_pages = payload;
    })
    .addCase(setHeartList, (state, { payload }) => {
      const temp = [...state.heartList];
      let isCheck = temp.some((item) => item.id === payload.id);
      if (isCheck) {
        state.heartList = temp.filter((item) => item.id !== payload.id);
        state.likes = [...state.likes].filter((item) => item !== payload.id);
      } else {
        state.heartList = [...state.heartList, payload];
        state.likes = [...state.likes, payload.id];
      }
    })
    .addCase(updateHeartList, (state, { payload }) => {
      const tempHeartList = [...state.heartList];
      const tempLikes = [...state.likes];
      state.likes = tempLikes.filter((item) => item !== payload.id);
      state.heartList = tempHeartList.filter((item) => item.id !== payload.id);
    })
    .addCase(setStarsProduct, (state, { payload }) => {
      const temp = [...state.starList];
      for (let i = 0; i < temp.length; i++) {
        const element = temp[i];
        if (element.id === payload.id) {
          state.starList.shift();
        }
      }
      state.starList = [...state.starList, payload];
    });
});
