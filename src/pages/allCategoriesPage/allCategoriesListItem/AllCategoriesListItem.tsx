import React from "react";
import { Link } from "react-router-dom";
import { categoriesWithImg } from "../../../data/categoriesWithImg";
import { CategoryType } from "../../../types/productType";

type Props = {
  category: CategoryType;
};

export const AllCategoriesListItem: React.FC<Props> = ({ category }) => {
  return (
    <li className="w-full min-w-20 sm:min-w-30" key={category}>
      <Link
        to={{
          pathname: "/all_categories",
          search: `category=${category}`,
        }}
        className="flex flex-col items-center"
      >
        <img
          className="rounded-full border-2 h-11 sm:h-25 w-11 sm:w-25 active:border-[var(--color-primary)]"
          src={categoriesWithImg[category]}
          alt={`${category} image`}
        />
        <p className="whitespace-break-spaces text-center sm:text-2xl">{category}</p>
      </Link>
    </li>
  );
};
