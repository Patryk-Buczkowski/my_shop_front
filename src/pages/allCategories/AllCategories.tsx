import React from "react";
import { AllCategoriesList } from "../allCategoriesList";

export const AllCategories: React.FC = () => {
  return (
    <div className="p-1">
      <h2 className="mb-3 sm:text-2xl">All Categories</h2>

      <nav className="w-full sm:max-w-[600px] flex flex-col overflow-auto">
        <AllCategoriesList />
      </nav>
    </div>
  );
};
