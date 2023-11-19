import { Product } from "../../domain/entities/product";

interface ProductInCart extends Product {
  quantity: number;
}

export interface SetProductToCartDTO {
  product: Product;
  cart: ProductInCart[];
  setCart: (cart: ProductInCart[]) => void;
}
