import { PRODUCTS } from "../../../../constants/products";
import { Category, Product } from "../../../../domain/entities/product";
import { ProductsRepositoryInterface } from "../../../../domain/repositories/products-repository-interface";
import {
  createRandomProduct,
  createRandomProducts,
} from "../entities/mock-product";

export class MockProductsRepository implements ProductsRepositoryInterface {
  async getProductDetails(productId: string): Promise<Product> {
    const product = PRODUCTS.find((product) => product.productId === productId);

    return Promise.resolve(product!);
  }
  async getProductsRecomendation(
    productCategory: Category
  ): Promise<Product[]> {
    const products = createRandomProducts(10);

    const parsedProducts = products.map((product) => ({
      ...product,
      category: productCategory,
    }));

    return Promise.resolve(parsedProducts);
  }
}
