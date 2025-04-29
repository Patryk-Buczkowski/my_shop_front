import React from "react";
import { Link } from "react-router-dom";
import { categoriesWithImg } from "../../../data/categoriesWithImg";
import { CategoryType } from "../../../types/productType";

type Props = {
  category: CategoryType;
};

export const AllCategoriesListItem: React.FC<Props> = ({ category }) => {
  return (
    <li className="sm:min-w-30 w-full min-w-20" key={category}>
      <Link
        to={{
          pathname: "/all_categories",
          search: `category=${category}`,
        }}
        className="flex flex-col items-center"
      >
        <img
          className="sm:h-25 sm:w-25 h-11 w-11 rounded-full border-2 active:border-[var(--color-primary)]"
          src={categoriesWithImg[category]}
          alt={`${category} image`}
        />
        <p className="whitespace-break-spaces text-center sm:text-2xl">
          {category}
        </p>
      </Link>
    </li>
  );
};
