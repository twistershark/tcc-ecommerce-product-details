import { PRODUCTS } from "../../../constants/products";
import { Category } from "../../../domain/entities/product";
import { HttpClient } from "../../../infrastructure/clients/http-client";

describe("HttpClient", () => {
  it("should be able to call the get method with productId", async () => {
    const httpClient = new HttpClient();

    const productId = PRODUCTS[0].productId;

    const searchParams = new URLSearchParams();
    searchParams.set("productId", productId);

    const url = `/products?${searchParams.toString()}`;

    const response = await httpClient.get(url);

    const product = PRODUCTS.find((product) => product.productId === productId);

    expect(response).toStrictEqual(product);
  });

  it("should be able to call the get method with category", async () => {
    const httpClient = new HttpClient();

    const category = Category.MAN;

    const searchParams = new URLSearchParams();
    searchParams.set("category", category);

    const url = `/products?${searchParams.toString()}`;

    const response = await httpClient.get(url);

    const filteredProducts = PRODUCTS.filter(
      (product) => product.category === category
    );

    expect(response).toStrictEqual(filteredProducts);
  });
});
