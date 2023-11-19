import { Category, Product } from "../../domain/entities/product";

export interface ProductsAdapterInterface {
  getProductById(productId: string): Promise<Product>;
  getProductsByCategory(productCategory: Category): Promise<Product[]>;
}
