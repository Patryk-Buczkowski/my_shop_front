import React from "react";
import { useLocation } from "react-router-dom";
import { ProductType } from "../../types/productType";
import { Button } from "@mui/material";
import { useStore } from "zustand";
import { useCartStore } from "../../zustand/useCartStore";

export const Details: React.FC = () => {
  const location = useLocation();
  const {addToCart} = useStore(useCartStore)
  const product = location.state as ProductType;
  console.log("product", product);
  
  return (
    <>
      <img className="w-25" src={product.pictureUrl} alt="product image" />
      <p>{product.price}</p>
      <Button
        sx={{ borderRadius: "100%", width: "100%" }}
        variant="contained"
        size="large"
        onClick={() => addToCart(product)}
      >
        Add to cart
      </Button>
    </>
  );
};
