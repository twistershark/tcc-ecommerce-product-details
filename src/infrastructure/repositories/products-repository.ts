import { Category } from "../../domain/entities/product";
import { ProductsRepositoryInterface } from "../../domain/repositories/products-repository-interface";
import { ProductsAdapterInterface } from "../adapters/products-adapter-interface";

export class ProductsRepository implements ProductsRepositoryInterface {
  private productAdapter: ProductsAdapterInterface;

  constructor(productAdapter: ProductsAdapterInterface) {
    this.productAdapter = productAdapter;
  }

  async getProductDetails(productId: string) {
    const product = await this.productAdapter.getProductById(productId);
    return product;
  }

  async getProductsRecomendation(productCategory: Category) {
    const products = await this.productAdapter.getProductsByCategory(
      productCategory
    );
    return products;
  }
}
