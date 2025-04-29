import React from "react";
import { ProductType } from "../../../types/productType";
import { useNavigate } from "react-router-dom";
import { useLoggedStore } from "../../../zustand/useLogged";

type Props = {
  product: ProductType;
};

export const AllCategoriesProduct: React.FC<Props> = ({ product }) => {
  const navigate = useNavigate();
  const { loggedUser: logged } = useLoggedStore();
  console.log("logged", logged);
  return (
    <div
      onClick={() => {
        navigate("/details", { state: product });
      }}
      className="sm:w-35 mb-2 w-28 rounded-lg border-2 border-[var(--color-primary-light)] active:border-[var(--color-primary)]"
    >
      <img
        className="w-18 sm:w-25 m-auto"
        src={product.pictureUrl}
        alt="product picture"
      />
      <div className="sm:max-h-30 w-25 m-auto mb-1 max-h-20 overflow-auto text-center text-sm sm:text-lg">
        {product.title}
      </div>
      <p className="text-center text-[var(--color-secondary)]">{`${product.price} $`}</p>

      {["moderator", "admin"].includes(logged.role) && (
        <p className="text-center text-[var(--edit-mode-color)]">editable</p>
      )}
    </div>
  );
};
