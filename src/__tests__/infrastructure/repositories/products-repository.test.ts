import { Category, Product } from "../../../domain/entities/product";
import { ProductsRepository } from "../../../infrastructure/repositories/products-repository";
import { mockCategory } from "../../__mocks__/domain/entities/mock-product";

import { MockProductsAdapter } from "../../__mocks__/infrastructure/adapters/mock-product-adapter";

describe("ProductsRepository", () => {
  const productsRepository = new ProductsRepository(new MockProductsAdapter());

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should be able to call the loadProducts method", async () => {
    const spy = jest.spyOn(productsRepository, "getProductDetails");
    const products = await productsRepository.getProductDetails("");

    expect(spy).toHaveBeenCalled();
    expect(products).toBeInstanceOf(Array<Product>);
  });

  it("should be able to call the searchByName method", async () => {
    const spy = jest.spyOn(productsRepository, "getProductsRecomendation");
    const products = await productsRepository.getProductsRecomendation(
      Category.MAN
    );

    expect(spy).toHaveBeenCalled();
    expect(products).toBeInstanceOf(Array<Product>);
  });
});
