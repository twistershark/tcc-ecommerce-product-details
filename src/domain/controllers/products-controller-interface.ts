import { SetProductToCartDTO } from "../../presentation/dtos/add-product-to-cart-dto";
import { Category, Product } from "../entities/product";

export interface ProductsControllerInterface {
  getProductDetails(productId: string): Promise<Product>;
  getProductsRecomendation(productCategory: Category): Promise<Product[]>;
  setProductToCart(params: SetProductToCartDTO): void;
}
