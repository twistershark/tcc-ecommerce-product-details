import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productsController from "../../controller/products-controller";

import useCart from "cart/useCart";

import "tailwindcss/tailwind.css";
import { Button } from "../../components/button";
import { Product } from "../../../domain/entities/product";
import { ProductItem } from "../../components/product";
import { SetProductToCartDTO } from "../../dtos/add-product-to-cart-dto";

export default function ProductDetails() {
  const { id } = useParams();
  const [cart, setCart] = useCart();
  const [product, setProduct] = useState<Product>();
  const [productsRecommendation, setProductsRecommendation] = useState<
    Product[]
  >([]);
  const isProductInCart = product
    ? cart.findIndex((p: Product) => p.id === product.id) !== -1
    : false;

  const handleAddProductToCart = () => {
    if (!product) return;

    const addProductToCartDTO: SetProductToCartDTO = {
      product,
      cart,
      setCart,
    };

    productsController.setProductToCart(addProductToCartDTO);
  };

  async function loadProduct() {
    if (!id) return;

    const product = await productsController.getProductDetails(id);

    setProduct(product);
  }

  async function loadProductsRecommendation() {
    if (!product) return;

    const products = await productsController.getProductsRecomendation(
      product.category
    );

    setProductsRecommendation(products.filter((prod) => prod.productId !== id));
  }

  useEffect(() => {
    loadProduct();
  }, [id]);

  useEffect(() => {
    loadProductsRecommendation();
  }, [product]);

  return (
    <main className="pd-mx-auto pd-max-w-2xl sm:pd-px-6 sm:pd-py-24 lg:pd-max-w-7xl lg:pd-px- lg:pd-py-8 pd-flex pd-flex-col pd-items-center pd-gap-8">
      <div className="pd-flex pd-flex-col pds-w-full pd-gap-24">
        <div className="pd-flex pd-items-start pd-gap-8">
          <img
            src={product?.image}
            alt={product?.name}
            className="pd-max-w-[568px] pd-max-h-[676px]"
          />
          <div className="pd-flex pd-flex-col pd-gap-5">
            <p className="pd-text-[#555] pd-text-2xl pd-font-medium pd-leading-none pd-font-sans">
              {product?.category}
            </p>
            <h2 className="pd-text-black pd-text-5xl pd-leading-none pd-font-sans">
              {product?.name}
            </h2>
            <span className="pd-text-black pd-text-sm pd-leading-none pd-font-sans">
              <strong>Cor: </strong> {product?.color}
            </span>

            <p className="pd-text-black pd-text-sm pd-font-sans">
              {product?.description}
            </p>

            <div className="pd-flex pd-items-end pd-text-black pd-gap-2 pd-my-[28px]">
              <span className="pd-text-base">R$</span>
              <strong className="pd-text-[40px] pd-leading-none">
                {product?.price}
              </strong>
            </div>

            {isProductInCart ? (
              <Link to="/carrinho" className="pd-w-full">
                <Button variant="outline">Ir para o carrinho</Button>
              </Link>
            ) : (
              <Button onClick={handleAddProductToCart}>
                Adicionar ao carrinho
              </Button>
            )}
          </div>
        </div>

        {productsRecommendation.length ? (
          <div>
            <h3 className="pd-text-[#555] pd-text-2xl pd-font-normal pd-font-serif">
              Talvez você goste
            </h3>
            <div className="pd-mt-6 pd-grid pd-grid-cols-1 pd-gap-x-6 pd-gap-y-10 sm:pd-grid-cols-2 lg:pd-grid-cols-4 xl:pd-gap-x-8">
              {productsRecommendation.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}
