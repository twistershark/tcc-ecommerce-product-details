import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../../domain/entities/product";

interface ProductItemProps {
  product: Product;
}

export function ProductItem({ product }: Readonly<ProductItemProps>) {
  return (
    <Link to={`/produto/${product.productId}`} key={product.id}>
      <div className="pd-group pd-relative pd-shadow-lg">
        <div className="pd-aspect-h-1 pd-aspect-w-1 pd-w-full overflow-hidden pd-rounded-md pd-bg-gray-200 pd-lg:aspect-none group-hover:pd-opacity-75 lg:pd-h-80">
          <img
            src={product.image}
            alt={product.name}
            className="pd-h-full pd-w-full pd-object-cover pd-object-center lg:pd-h-full lg:pd-w-full"
          />
        </div>

        <div className="pd-mt-4 pd-flex pd-flex-col pd-items-center pd-p-4 pd-gap-4">
          <div className="pd-flex pd-flex-col pd-items-center">
            <h3 className="pd-text-sm pd-text-gray-700 pd-font-sans pd-font-semibold">
              {product.name}
            </h3>
            <p className="pd-text-sm pd-text-gray-500">{product.color}</p>
          </div>

          <p className="pd-text-lg pd-font-medium pd-text-gray-900 pd-font-serif">
            R$ {product.price}
          </p>
        </div>
      </div>
    </Link>
  );
}
