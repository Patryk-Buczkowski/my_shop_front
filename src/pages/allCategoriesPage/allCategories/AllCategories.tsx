import React from "react";
import { AllCategoriesList } from "../allCategoriesList";
import style from "./AllCategories.module.scss";

export const AllCategories: React.FC = () => {
  return (
    <div className="p-1">
      <img src="./bubble_01.svg" className={`${style.decoration__top_left}`} />
      <img src="./bubble_02.svg" className={`${style.decoration__top_right}`} />
      <img
        src="./bubble_01.svg"
        className={`${style.decoration__bottom_right}`}
      />
      <img
        src="./bubble_02.svg"
        className={`${style.decoration__bottom_left}`}
      />

      <h2 className="mb-3 sm:text-2xl">All Categories</h2>

      <nav className="w-[95%]">
        <AllCategoriesList />
      </nav>
    </div>
  );
};
