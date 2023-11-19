import { Category, Product } from "../../domain/entities/product";
import { HttpClientInterface } from "../clients/http-client-interface";
import { ProductsAdapterInterface } from "./products-adapter-interface";

export class ProductsAdapter implements ProductsAdapterInterface {
  private httpClient: HttpClientInterface<Product>;

  constructor(httpClient: HttpClientInterface<Product>) {
    this.httpClient = httpClient;
  }

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
