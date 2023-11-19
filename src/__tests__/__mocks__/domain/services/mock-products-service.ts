import { Category, Product } from "../../../../domain/entities/product";
import { ProductsServiceInterface } from "../../../../domain/services/products-service-interface";
import { SetProductToCartDTO } from "../../../../presentation/dtos/add-product-to-cart-dto";
import { MockProductsRepository } from "../repositories/mock-product-repository";

export class MockProductsService implements ProductsServiceInterface {
  productRepository = new MockProductsRepository();

  async getProductDetails(productId: string): Promise<Product> {
    return this.productRepository.getProductDetails(productId);
  }

  async getProductsRecomendation(
    productCategory: Category
  ): Promise<Product[]> {
    const products = await this.productRepository.getProductsRecomendation(
      productCategory
    );
    return products.slice(0, 4);
  }

  setProductToCart(params: SetProductToCartDTO) {
    const { product, cart, setCart } = params;

    return setCart([...cart, { ...product, quantity: 1 }]);
  }
}
