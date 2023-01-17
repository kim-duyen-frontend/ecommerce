import { Product } from "@chec/commerce.js/types/product"

export type TProductsState = {
    pending: boolean
    products: Product[]
}