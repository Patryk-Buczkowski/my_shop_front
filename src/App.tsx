import "./App.css";
// import { AllCategories } from "./pages/allCategoriesPage/allCategories/AllCategories.tsx";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
// import { Home } from "./pages/homePage/Home";
// import { Cart } from "./components/cart/index.ts";
import { Layout } from "./components/layout/index.ts";
import React, { Suspense } from "react";

const Home = React.lazy(() => import("./pages/homePage/Home/Home.tsx"));
const Cart = React.lazy(() => import("./components/cart/Cart.tsx"));
const AllCategories = React.lazy(
  () => import("./pages/allCategoriesPage/allCategories/AllCategories.tsx")
);

function App() {
  return (
    <div className="w-full h-full flex flex-col">
      <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/home" />} />
              <Route path="home" element={<Home />} />
              <Route path="all_categories" element={<AllCategories />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
