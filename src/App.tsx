import "./App.css";
import { AllCategories } from "./pages/allCategoriesPage/allCategories/AllCategories.tsx";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/homePage/Home";
import { Cart } from "./components/Cart";
import { Layout } from "./components/Layout";

function App() {
    return (
    <div className="w-full h-full flex flex-col">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<Home />} />
            <Route path="all_categories" element={<AllCategories />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
