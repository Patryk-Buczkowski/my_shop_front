import { useEffect, useState } from "react";
import "./App.css";
// import { BottomMenu } from "./components/bottomMenu/BottomMenu.tsx";
// import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { ProductType } from "./types/productType";
// import { Cart } from "./components/cart/Cart";
// import { useCart } from "./costomHooks/useCart.ts";
// import { AddToCart } from "./components/addToCart/AddToCart.tsx";
import { AllCategories } from "./pages/allCategories/AllCategories.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [product, setProduct] = useState<ProductType | null>(null);

  // get one test prouct
  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${backendUrl}/product/6793afe48e74d1a4bbb01c06`
  //       );
  //       if (response) {
  //         setProduct(response.data);
  //         console.log("Product data:", response.data);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   getProduct();
  // }, []);

  console.log("product", product);

  return (
    <div className="m-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/all_categories" element={<AllCategories />} />
          <Route path="/category" element={<div>Lista produktów</div>} />
        </Routes>
      </BrowserRouter>
      <div className="flex flex-col items-center justify-center m-auto w-full max-w-[375px]">
        {/* {product ? <AddToCart item={product} /> : <p>...Loading</p>} */}
        {/* <BottomMenu /> */}
        {/* <Cart /> */}
        {/* <AllCategories /> */}
      </div>
    </div>
  );
}

export default App;
