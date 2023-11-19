import { Product } from "../../domain/entities/product";

export interface ProductInCart extends Product {
  quantity: number;
}

export interface SetProductToCartDTO {
  product: Product;
  cart: ProductInCart[];
  setCart: (cart: ProductInCart[]) => void;
}
