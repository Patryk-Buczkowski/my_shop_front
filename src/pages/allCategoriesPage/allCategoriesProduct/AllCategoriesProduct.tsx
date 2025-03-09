import React from "react";
import { ProductType } from "../../../types/productType";
import { useNavigate } from "react-router-dom";

type Props = {
  product: ProductType;
};

export const AllCategoriesProduct: React.FC<Props> = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/details", { state: product });
      }}
      className="w-28 sm:w-35 border-2 border-[var(--color-primary-light)] rounded-lg mb-2 active:border-[var(--color-primary)]"
    >
      <img
        className="w-18 sm:w-25  m-auto"
        src={product.pictureUrl}
        alt="product picture"
      />
      <div className="m-auto text-center max-h-20 sm:max-h-30 overflow-auto text-sm w-25 mb-1 sm:text-lg">
        {product.title}
      </div>
      <p className="text-center text-[var(--color-secondary)]">{`${product.price} $`}</p>
      <p>
        comments list length
        {product.commentsList.length ? product.commentsList.length : 0}
      </p>
    </div>
  );
};
