import React from "react";
import { Link, useParams } from "react-router-dom";

import { Product } from "./types";
import PRODUCTS from "./constants";

import useCart from "cart/useCart";

import "tailwindcss/tailwind.css";

export default function ProductDetails() {
  const { id } = useParams();
  const [cart, setCart] = useCart();

  const product: Product =
    PRODUCTS.find((product: Product) => product.id === id) ?? PRODUCTS[0];

  const isProductInCart =
    cart.findIndex((p: Product) => p.id === product.id) !== -1;

  const handleAddProductToCart = () => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  return (
    <div className="pd-flex pd-w-full pd-transform pd-text-left pd-text-base pd-transition md:pd-my-8 md:pd-max-w-2xl md:pd-px-4 lg:pd-max-w-4xl pd-mx-auto">
      <div className="pd-flex pd-w-full pd-items-center pd-overflow-hidden pd-bg-white pd-px-4 pd-pb-8 pd-pt-14 sm:pd-px-6 sm:pd-pt-8 md:pd-p-6 lg:pd-p-8">
        <div className="pd-grid pd-w-full pd-grid-cols-1 pd-items-start pd-gap-x-6 pd-gap-y-8 sm:pd-grid-cols-12 lg:pd-gap-x-8">
          <div className="pd-aspect-h-3 pd-aspect-w-2 pd-overflow-hidden pd-rounded-lg pd-bg-gray-100 sm:pd-col-span-4 lg:pd-col-span-5">
            <img
              src={product.image}
              alt={product.name}
              className="pd-object-cover pd-object-center"
            />
          </div>
          <div className="sm:pd-col-span-8 lg:pd-col-span-7">
            <h2 className="pd-text-2xl pd-font-bold pd-text-gray-900 sm:pd-pr-12">
              {product.name}
            </h2>

            <section aria-labelledby="information-heading" className="mt-2">
              <p className="pd-text-2xl pd-text-gray-900">R$ {product.price}</p>

              <div className="pd-mt-6">
                <div className="pd-flex pd-items-center">
                  <div className="pd-flex pd-items-center">
                    <svg
                      className="pd-text-gray-900 pd-h-5 pd-w-5 pd-flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="pd-text-gray-900 pd-h-5 pd-w-5 pd-flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="pd-text-gray-900 pd-h-5 pd-w-5 pd-flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="pd-text-gray-900 pd-h-5 pd-w-5 pd-flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="pd-text-gray-200 pd-h-5 pd-w-5 pd-flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="pd-ml-3 pd-text-sm pd-font-medium pd-text-indigo-600 hover:pd-text-indigo-500 pd-cursor-not-allowed">
                    127 avaliações
                  </span>
                </div>
              </div>
            </section>

            <section aria-labelledby="options-heading" className="pd-mt-10">
              <form>
                <div>
                  <h4 className="pd-text-sm pd-font-medium pd-text-gray-900">
                    Cor
                  </h4>

                  <fieldset className="pd-mt-4">
                    <span className="pd-flex pd-items-center pd-space-x-3">
                      <label className="pd-relative -pd-m-0.5 pd-flex pd-cursor-not-allowed pd-items-center pd-justify-center pd-rounded-full pd-p-0.5 focus:pd-outline-none pd-ring-gray-400">
                        <input
                          type="radio"
                          name="color-choice"
                          value="White"
                          className="pd-sr-only"
                          aria-labelledby="color-choice-0-label"
                        />
                        <span id="color-choice-0-label" className="pd-sr-only">
                          Branco
                        </span>
                        <span
                          aria-hidden="true"
                          className="pd-h-8 pd-w-8 pd-bg-white pd-rounded-full pd-border pd-border-black pd-border-opacity-10"
                        ></span>
                      </label>
                      <label className="pd-relative -pd-m-0.5 pd-flex pd-cursor-not-allowed pd-items-center pd-justify-center pd-rounded-full pd-p-0.5 focus:pd-outline-none pd-ring-gray-400">
                        <input
                          type="radio"
                          name="color-choice"
                          value="Gray"
                          className="pd-sr-only"
                          aria-labelledby="color-choice-1-label"
                        />
                        <span id="color-choice-1-label" className="pd-sr-only">
                          Cinza
                        </span>
                        <span
                          aria-hidden="true"
                          className="pd-h-8 pd-w-8 pd-bg-gray-200 pd-rounded-full pd-border pd-border-black pd-border-opacity-10"
                        ></span>
                      </label>
                      <label className="pd-relative -pd-m-0.5 pd-flex pd-cursor-not-allowed pd-items-center pd-justify-center pd-rounded-full pd-p-0.5 focus:pd-outline-none pd-ring-gray-900">
                        <input
                          type="radio"
                          name="color-choice"
                          value="Black"
                          className="pd-sr-only"
                          aria-labelledby="color-choice-2-label"
                        />
                        <span id="color-choice-2-label" className="pd-sr-only">
                          Preto
                        </span>
                        <span
                          aria-hidden="true"
                          className="pd-h-8 pd-w-8 pd-bg-gray-900 pd-rounded-full pd-border pd-border-black pd-border-opacity-10"
                        ></span>
                      </label>
                    </span>
                  </fieldset>
                </div>
                <div className="pd-mt-10">
                  <div className="pd-flex pd-items-center pd-justify-between">
                    <h4 className="pd-text-sm pd-font-medium pd-text-gray-900">
                      Tamanho
                    </h4>
                  </div>

                  <fieldset className="pd-mt-4">
                    <div className="pd-grid pd-grid-cols-4 pd-gap-4">
                      <label className="pd-group pd-relative pd-flex pd-items-center pd-justify-center pd-rounded-md pd-border pd-py-3 pd-px-4 pd-text-sm pd-font-medium pd-uppercase hover:pd-bg-gray-50 focus:pd-outline-none sm:pd-flex-1 pd-cursor-not-allowed pd-bg-white pd-text-gray-900 pd-shadow-sm">
                        <input
                          type="radio"
                          name="size-choice"
                          value="XXS"
                          className="pd-sr-only"
                          aria-labelledby="size-choice-0-label"
                        />
                        <span id="size-choice-0-label">PP</span>
                        <span
                          className="pd-pointer-events-none pd-absolute -pd-inset-px pd-rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>
                      <label className="pd-group pd-relative pd-flex pd-items-center pd-justify-center pd-rounded-md pd-border pd-py-3 pd-px-4 pd-text-sm pd-font-medium pd-uppercase hover:pd-bg-gray-50 focus:pd-outline-none sm:pd-flex-1 pd-cursor-not-allowed pd-bg-white pd-text-gray-900 pd-shadow-sm">
                        <input
                          type="radio"
                          name="size-choice"
                          value="XS"
                          className="pd-sr-only"
                          aria-labelledby="size-choice-1-label"
                        />
                        <span id="size-choice-1-label">P</span>
                        <span
                          className="pd-pointer-events-none pd-absolute -pd-inset-px pd-rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>
                      <label className="pd-group pd-relative pd-flex pd-items-center pd-justify-center pd-rounded-md pd-border pd-py-3 pd-px-4 pd-text-sm pd-font-medium pd-uppercase hover:pd-bg-gray-50 focus:pd-outline-none sm:pd-flex-1 pd-cursor-not-allowed pd-bg-white pd-text-gray-900 pd-shadow-sm">
                        <input
                          type="radio"
                          name="size-choice"
                          value="S"
                          className="pd-sr-only"
                          aria-labelledby="size-choice-2-label"
                        />
                        <span id="size-choice-2-label">M</span>
                        <span
                          className="pd-pointer-events-none pd-absolute -pd-inset-px pd-rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>
                      <label className="pd-group pd-relative pd-flex pd-items-center pd-justify-center pd-rounded-md pd-border pd-py-3 pd-px-4 pd-text-sm pd-font-medium pd-uppercase hover:pd-bg-gray-50 focus:pd-outline-none sm:pd-flex-1 pd-cursor-not-allowed pd-bg-white pd-text-gray-900 pd-shadow-sm">
                        <input
                          type="radio"
                          name="size-choice"
                          value="M"
                          className="pd-sr-only"
                          aria-labelledby="size-choice-3-label"
                        />
                        <span id="size-choice-3-label">G</span>
                        <span
                          className="pd-pointer-events-none pd-absolute -pd-inset-px pd-rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>
                      <label className="pd-group pd-relative pd-flex pd-items-center pd-justify-center pd-rounded-md pd-border pd-py-3 pd-px-4 pd-text-sm pd-font-medium pd-uppercase hover:pd-bg-gray-50 focus:pd-outline-none sm:pd-flex-1 pd-cursor-not-allowed pd-bg-white pd-text-gray-900 pd-shadow-sm">
                        <input
                          type="radio"
                          name="size-choice"
                          value="L"
                          className="pd-sr-only"
                          aria-labelledby="size-choice-4-label"
                        />
                        <span id="size-choice-4-label">GG</span>
                        <span
                          className="pd-pointer-events-none pd-absolute -pd-inset-px pd-rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>
                      <label className="pd-group pd-relative pd-flex pd-items-center pd-justify-center pd-rounded-md pd-border pd-py-3 pd-px-4 pd-text-sm pd-font-medium pd-uppercase hover:pd-bg-gray-50 focus:pd-outline-none sm:pd-flex-1 pd-cursor-not-allowed pd-bg-white pd-text-gray-900 pd-shadow-sm">
                        <input
                          type="radio"
                          name="size-choice"
                          value="XL"
                          className="pd-sr-only"
                          aria-labelledby="size-choice-5-label"
                        />
                        <span id="size-choice-5-label">XG</span>
                        <span
                          className="pd-pointer-events-none pd-absolute -pd-inset-px pd-rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>
                      <label className="pd-group pd-relative pd-flex pd-items-center pd-justify-center pd-rounded-md pd-border pd-py-3 pd-px-4 pd-text-sm pd-font-medium pd-uppercase hover:pd-bg-gray-50 focus:pd-outline-none sm:pd-flex-1 pd-cursor-not-allowed pd-bg-white pd-text-gray-900 pd-shadow-sm">
                        <input
                          type="radio"
                          name="size-choice"
                          value="XXL"
                          className="pd-sr-only"
                          aria-labelledby="size-choice-6-label"
                        />
                        <span id="size-choice-6-label">XGG</span>
                        <span
                          className="pd-pointer-events-none pd-absolute -pd-inset-px pd-rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>
                      <label className="pd-group pd-relative pd-flex pd-items-center pd-justify-center pd-rounded-md pd-border pd-py-3 pd-px-4 pd-text-sm pd-font-medium pd-uppercase hover:pd-bg-gray-50 focus:pd-outline-none sm:pd-flex-1 pd-cursor-not-allowed pd-bg-gray-50 pd-text-gray-200">
                        <input
                          type="radio"
                          name="size-choice"
                          value="XXXL"
                          disabled
                          className="pd-sr-only"
                          aria-labelledby="size-choice-7-label"
                        />
                        <span id="size-choice-7-label">XXGG</span>
                        <span
                          aria-hidden="true"
                          className="pd-pointer-events-none pd-absolute -pd-inset-px pd-rounded-md pd-border-2 pd-border-gray-200"
                        >
                          <svg
                            className="pd-absolute pd-inset-0 pd-h-full pd-w-full pd-stroke-2 pd-text-gray-200"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            stroke="currentColor"
                          >
                            <line
                              x1="0"
                              y1="100"
                              x2="100"
                              y2="0"
                              vectorEffect="non-scaling-stroke"
                            />
                          </svg>
                        </span>
                      </label>
                    </div>
                  </fieldset>
                </div>

                {isProductInCart ? (
                  <Link
                    to="/carrinho"
                    className="pd-mt-6 pd-flex pd-w-full pd-items-center pd-justify-center pd-rounded-md pd-border pd-border-transparent !pd-bg-gray-600 pd-px-8 pd-py-3 pd-text-base pd-font-medium pd-text-white !hover:pd-bg-gray-700 focus:pd-outline-none focus:pd-ring-2 focus:pd-ring-gray-500 focus:pd-ring-offset-2"
                  >
                    Ir para o carrinho
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={handleAddProductToCart}
                    className="pd-mt-6 pd-flex pd-w-full pd-items-center pd-justify-center pd-rounded-md pd-border pd-border-transparent !pd-bg-indigo-600 pd-px-8 pd-py-3 pd-text-base pd-font-medium pd-text-white !hover:pd-bg-indigo-700 focus:pd-outline-none focus:pd-ring-2 focus:pd-ring-indigo-500 focus:pd-ring-offset-2"
                  >
                    Adicionar ao carrinho
                  </button>
                )}
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
