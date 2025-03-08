import "./App.css";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/index.ts";
import React, { Suspense } from "react";
import { Details } from "./pages/detailsPage/Details.tsx";

const LogIn = React.lazy(() => import("./pages/loginPage/Login.tsx"))
const Home = React.lazy(() => import("./pages/homePage/Home/Home.tsx"));
const Cart = React.lazy(() => import("./components/cart/Cart.tsx"));
const AllCategories = React.lazy(
  () => import("./pages/allCategoriesPage/allCategories/AllCategories.tsx")
);
const Register = React.lazy(
  () => import("./pages/registerPage/register/Register.tsx")
);
const RegisterResult = React.lazy(
  () => import("./pages/registerPage/registerResult/RegisterResult.tsx")
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
              <Route path="register" element={<Register />} />
              <Route path="registrationResult" element={<RegisterResult />} />
              <Route path="login" element={<LogIn />} />
              <Route path="details" element={<Details />} />            
            </Route>
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
