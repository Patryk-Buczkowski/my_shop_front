// import { useEffect, useState } from "react";
import "./App.css";
// import { BottomMenu } from "./components/bottomMenu/BottomMenu.tsx";
// import { Route, Routes } from "react-router-dom";
// import axios from "axios";
// import { ProductType } from "./types/productType";
// import { Cart } from "./components/cart/Cart";
// import { useCart } from "./costomHooks/useCart.ts";
// import { AddToCart } from "./components/addToCart/AddToCart.tsx";
import { AllCategories } from "./pages/allCategoriesPage/allCategories/AllCategories.tsx";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/homePage/Home/Home.tsx";
import { Layout } from "./components/layout/Layout.tsx";

function App() {
  // const backendUrl = import.meta.env.VITE_BACKEND_URL;
  // const [product, setProduct] = useState<ProductType | null>(null);

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

  // console.log("product", product);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="all_categories" element={<AllCategories />} />
          <Route path="category" element={<div>Lista produktów</div>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
