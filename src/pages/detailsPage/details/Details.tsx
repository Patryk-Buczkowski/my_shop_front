import React from "react";
import { useLocation } from "react-router-dom";
import { ProductType } from "../../../types/productType";
import { Button } from "@mui/material";
import { useStore } from "zustand";
import { useCartStore } from "../../../zustand/useCartStore";
import { CommentsList } from "../commentsList/CommentsList";

export const Details: React.FC = () => {
  const location = useLocation();
  const { addToCart } = useStore(useCartStore);
  const product = location.state as ProductType;

  return (
    <div className="flex min-h-[88vh] flex-col justify-between">
      <div>
        <img
          className="w-25 mb-2"
          src={product.pictureUrl}
          alt="product image"
        />
        <span className="flex gap-1">
          <p>Price:</p>
          <p>{product.price}</p>
        </span>

        <span className="flex gap-1">
          {product.comments.length !== 0 && <CommentsList comments={product.commentsList} />}
        </span>
      </div>

      <Button
        sx={{ borderRadius: "100%", width: "100%" }}
        variant="contained"
        size="large"
        onClick={() => addToCart(product)}
      >
        Add to cart
      </Button>
    </div>
  );
};
