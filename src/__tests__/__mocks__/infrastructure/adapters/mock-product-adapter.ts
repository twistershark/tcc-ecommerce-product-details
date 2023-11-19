import { Category, Product } from "../../../../domain/entities/product";
import { ProductsAdapterInterface } from "../../../../infrastructure/adapters/products-adapter-interface";

import { MockHttpClient } from "../clients/mock-http-client";

export class MockProductsAdapter implements ProductsAdapterInterface {
  private httpClient = new MockHttpClient<Product>();

  async getProductById(productId: string): Promise<Product> {
    const product = await this.httpClient.get(
      `/products?productId=${productId}`
    );
    return product as Product;
  }

  async getProductsByCategory(productCategory: Category): Promise<Product[]> {
    const products = await this.httpClient.get(
      `/products?category=${productCategory}`
    );
    return products as Product[];
  }
}
