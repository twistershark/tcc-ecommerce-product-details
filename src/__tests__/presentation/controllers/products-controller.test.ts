import { PRODUCTS } from "../../../constants/products";
import { Category } from "../../../domain/entities/product";
import { ProductsController } from "../../../presentation/controller/products-controller";
import { ProductInCart } from "../../../presentation/dtos/add-product-to-cart-dto";
import { createRandomProduct } from "../../__mocks__/domain/entities/mock-product";
import { MockProductsService } from "../../__mocks__/domain/services/mock-products-service";

describe("ProductsController", () => {
  const productsService = new MockProductsService();
  const productsController = new ProductsController(productsService);

  it("should get product details", async () => {
    const products = await productsController.getProductDetails(
      PRODUCTS[0].productId
    );

    expect(products).toBeDefined();
  });

  it("should get recommended products", async () => {
    const products = await productsController.getProductsRecomendation(
      Category.MAN
    );

    expect(products).toBeDefined();
    expect(products).toHaveLength(4);
  });

  it("should be able to add product to cart", async () => {
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

    productsController.setProductToCart(dtoMock);

    expect(cart).toHaveLength(1);
    expect(cart[0].name).toEqual(product.name);
  });
});
