import { fakerPT_BR as faker } from "@faker-js/faker";
import { Category, Product } from "../../../domain/entities/product";
import {
  createRandomProduct,
  mockCategory,
} from "../../__mocks__/domain/entities/mock-product";
import { ProductsService } from "../../../application/products-service";
import { MockProductsRepository } from "../../__mocks__/domain/repositories/mock-product-repository";
import { ProductInCart } from "../../../presentation/dtos/add-product-to-cart-dto";
import { PRODUCTS } from "../../../constants/products";

describe("ProductsService", () => {
  const productsService = new ProductsService(new MockProductsRepository());

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should be able to get product details", async () => {
    const spy = jest.spyOn(productsService, "getProductDetails");

    const product = await productsService.getProductDetails(
      PRODUCTS[0].productId
    );

    expect(spy).toHaveBeenCalled();
    expect(product).toEqual(PRODUCTS[0]);
  });

  it("should be able to load recommended products", async () => {
    const spy = jest.spyOn(productsService, "getProductsRecomendation");
    const products = await productsService.getProductsRecomendation(
      Category.MAN
    );

    expect(spy).toHaveBeenCalled();
    expect(products).toBeInstanceOf(Array<Product>);
    expect(products).toHaveLength(4);
  });

  it("should be able to add product to cart products by name", async () => {
    const spy = jest.spyOn(productsService, "setProductToCart");
    const product = createRandomProduct();
    let cart: ProductInCart[] = [];

    function setCart(newCart: ProductInCart[]) {
      cart = newCart;
    }

    const dtoMock = {
      product,
      cart,
      setCart,
    };

    productsService.setProductToCart(dtoMock);

    expect(spy).toHaveBeenCalled();
    expect(cart).toHaveLength(1);
    expect(cart[0].name).toEqual(product.name);
  });
});
