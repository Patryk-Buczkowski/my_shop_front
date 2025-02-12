import React from "react";
import { AllCategoriesList } from "../allCategoriesList";

export const AllCategories: React.FC = () => {
  return (
    <div className="p-1">
      <h2 className="mb-3 sm:text-2xl">All Categories</h2>

      <nav className="w-[95%]">
        <AllCategoriesList />
      </nav>
    </div>
  );
};
