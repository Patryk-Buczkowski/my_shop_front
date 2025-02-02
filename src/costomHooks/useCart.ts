// import { useState, useEffect } from "react";
// import { ProductType } from "../types/productType";

// export const useCart = () => {
//   const [cart, setCart] = useState<ProductType[]>(() => {
//     try {
//       const storedCart = localStorage.getItem("cart");
//       return storedCart ? JSON.parse(storedCart) : [];
//     } catch {
//       return [];
//     }
//   });

//   const addToCart = (item: ProductType) => {
//     setCart((prev) => {
//       const existingItem = prev.find((product) => product.id === item.id);

//       if (existingItem) {
//         return prev.map((product) =>
//           product.id === item.id
//             ? { ...product, amount: product.amount + 1 }
//             : product
//         );
//       }
//       return [...prev, { ...item, amount: 1 }];
//     });
//   };

//   const removeFromCart = (id: string) => {
//     setCart((prev) => prev.filter((product) => product.id !== id));
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   const decreaseAmount = (item: ProductType) => {
//     setCart((prev) => {
//       const existingItem = prev.find((product) => product.id === item.id);

//       if (existingItem?.amount === 1) {
//         removeFromCart(existingItem.id);
//       } else if (existingItem) {
//         return prev.map((product) =>
//           product.id === item.id
//             ? { ...product, amount: product.amount - 1 }
//             : product
//         );
//       }
//       return [...prev, { ...item, amount: 0 }];
//     });
//   };

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   return { cart, addToCart, removeFromCart, clearCart, decreaseAmount };
// };
