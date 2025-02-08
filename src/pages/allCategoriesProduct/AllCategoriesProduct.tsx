import React from "react";
import { ProductType } from "../../types/productType";

type Props = {
  product: ProductType;
};

export const AllCategoriesProduct: React.FC<Props> = ({ product }) => {
  return (
    <div
      onClick={() => {
        console.log("to dupa");
      }}
      className="w-28 border-2 border-[var(--color-primary-light)] rounded-lg mb-2 active:border-[var(--color-primary)]"
    >
      <img
        className="w-18 m-auto"
        src={product.pictureUrl}
        alt="product picture"
      />
      <div className="text-center max-h-[80px] overflow-auto text-sm w-25 mb-1">
        {product.title}
      </div>
      <p className="text-center text-[var(--color-secondary)]">{`${product.price} $`}</p>
    </div>
  );
};
