import { ProductsService } from "../../application/products-service";
import { ProductsControllerInterface } from "../../domain/controllers/products-controller-interface";
import { Category } from "../../domain/entities/product";
import { ProductsServiceInterface } from "../../domain/services/products-service-interface";
import { ProductsAdapter } from "../../infrastructure/adapters/products-adapter";
import { HttpClient } from "../../infrastructure/clients/http-client";
import { ProductsRepository } from "../../infrastructure/repositories/products-repository";
import { SetProductToCartDTO } from "../dtos/add-product-to-cart-dto";

export class ProductsController implements ProductsControllerInterface {
  private productsService: ProductsServiceInterface;

  constructor(productsService: ProductsServiceInterface) {
    this.productsService = productsService;
  }

  async getProductDetails(productId: string) {
    const product = await this.productsService.getProductDetails(productId);
    return product;
  }

  async getProductsRecomendation(productCategory: Category) {
    const products = await this.productsService.getProductsRecomendation(
      productCategory
    );
    return products;
  }

  setProductToCart(params: SetProductToCartDTO) {
    this.productsService.setProductToCart(params);
  }
}

export default new ProductsController(
  new ProductsService(
    new ProductsRepository(new ProductsAdapter(new HttpClient()))
  )
);
