import { create } from "zustand";
import { ProductType } from "../types/productType";

type CartStore = {
  cart: ProductType[];
  totalSum: number;
  addToCart: (item: ProductType) => void;
  removeFromCart: (id: string) => void;
  increaseAmount: (id: string) => void;
  decreaseAmount: (id: string) => void;
};

const calculateTotalSum = (cart: ProductType[]) => {
    return cart.reduce(
      (acc, product) => acc + product.price * (product.amount || 1),
      0
    );
  };

export const useCartStore = create<CartStore>((set) => ({
  cart: JSON.parse(localStorage.getItem("cart") || "[]"),
  totalSum: calculateTotalSum(JSON.parse(localStorage.getItem("cart") || "[]")),

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((product) => product.id === item.id);

      let updatedCart;
      if (existingItem) {
        updatedCart = state.cart.map((product) =>
          product.id === item.id
            ? { ...product, amount: product.amount + 1 }
            : product
        );
      } else {
        updatedCart = [...state.cart, { ...item, amount: 1 }];
      }
      
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart, totalSum: calculateTotalSum(JSON.parse(localStorage.getItem("cart") || "[]")) };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter((product) => product.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart, totalSum: calculateTotalSum(JSON.parse(localStorage.getItem("cart") || "[]")) };
    }),

  increaseAmount: (id) =>
    set((state) => {
      const updatedCart = state.cart.map((product) =>
        product.id === id ? { ...product, amount: product.amount + 1 } : product
      );

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart, totalSum: calculateTotalSum(JSON.parse(localStorage.getItem("cart") || "[]")) };
    }),

  decreaseAmount: (id) =>
    set((state) => {
      const updatedCart = state.cart
        .map((product) =>
          product.id === id
            ? { ...product, amount: product.amount - 1 }
            : product
        )
        .filter((product) => product.amount > 0);

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart, totalSum: calculateTotalSum(JSON.parse(localStorage.getItem("cart") || "[]")) };
    }),
}));
