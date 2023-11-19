import { Category, Product } from "../entities/product";

export interface ProductsRepositoryInterface {
  getProductDetails(productId: string): Promise<Product>;
  getProductsRecomendation(productCategory: Category): Promise<Product[]>;
}
