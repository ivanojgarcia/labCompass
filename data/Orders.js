
import { Shopify } from "./shopify";
import { Woocommerce } from "./woocomerce";

const Orders = [
    ...Shopify,
    ...Woocommerce
]

export { Orders };
