import { Category } from "../domain/entities/product";
import { ProductsRepositoryInterface } from "../domain/repositories/products-repository-interface";
import { ProductsServiceInterface } from "../domain/services/products-service-interface";
import { SetProductToCartDTO } from "../presentation/dtos/add-product-to-cart-dto";

export class ProductsService implements ProductsServiceInterface {
  private productsRepository: ProductsRepositoryInterface;

  constructor(productsRepository: ProductsRepositoryInterface) {
    this.productsRepository = productsRepository;
  }

  async getProductDetails(productId: string) {
    const product = await this.productsRepository.getProductDetails(productId);
    return product;
  }

  async getProductsRecomendation(productCategory: Category) {
    const products = await this.productsRepository.getProductsRecomendation(
      productCategory
    );
    return products.slice(0, 4);
  }

  setProductToCart(params: SetProductToCartDTO) {
    const { product, cart, setCart } = params;

    setCart([...cart, { ...product, quantity: 1 }]);
  }
}
