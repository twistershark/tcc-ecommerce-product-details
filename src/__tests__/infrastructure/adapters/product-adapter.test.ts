import { Category, Product } from "../../../domain/entities/product";
import { MockHttpClient } from "../../__mocks__/infrastructure/clients/mock-http-client";
import { ProductsAdapter } from "../../../infrastructure/adapters/products-adapter";

describe("ProductAdapter", () => {
  const productAdapter = new ProductsAdapter(new MockHttpClient<Product[]>());

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should be able to call the getProductById method", async () => {
    const spy = jest.spyOn(productAdapter, "getProductById");
    const products = await productAdapter.getProductById("id");

    expect(spy).toHaveBeenCalled();
    expect(products).toBeInstanceOf(Array<Product>);
  });

  it("should be able to call the getProductsByCategory method", async () => {
    const spy = jest.spyOn(productAdapter, "getProductsByCategory");
    const products = await productAdapter.getProductsByCategory(Category.MAN);

    expect(spy).toHaveBeenCalled();
    expect(products).toBeInstanceOf(Array<Product>);
  });
});
