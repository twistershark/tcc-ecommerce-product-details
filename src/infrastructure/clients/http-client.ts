import { PRODUCTS } from "../../constants/products";
import { HttpClientInterface } from "./http-client-interface";

export class HttpClient<T> implements HttpClientInterface<T> {
  private baseURL = "http://localhost:3000";

  async get(pathname: string): Promise<any> {
    const url = new URL(pathname, this.baseURL);

    const productId = url.searchParams.get("productId");
    const category = url.searchParams.get("category");

    if (category) {
      return Promise.resolve(
        PRODUCTS.filter((product) => product.category === category)
      );
    }

    return Promise.resolve(
      PRODUCTS.find((product) => product.productId === productId)
    );
  }
}
