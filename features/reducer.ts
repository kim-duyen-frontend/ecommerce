import { createReducer } from "@reduxjs/toolkit";
import {
  getListProduct,
  getListSearchProduct,
  getListSortProduct,
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
  type_sort: "",
  text_search: "",
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
    .addCase(getListSortProduct, (state, { payload }) => {
      state.pending = false;
      state.type_sort = payload;
    })
    .addCase(getListSearchProduct, (state, { payload }) => {
      state.pending = false;
      state.text_search = payload;
    });
});
