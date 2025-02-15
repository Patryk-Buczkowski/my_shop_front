import { categories } from "../../../types/productType";
import { AllCategoriesListItem } from "../allCategoriesListItem";
export const AllCategoriesList = () => {
  return (
    <div className="flex justify-center w-[310px] sm:w-[630px] md:w-[730px] lg:w-[1014px] xl:w-[1270px] 2xl:w-[1526px] ">
      <ul className="flex gap-2 overflow-auto">
        {categories.map((category) => (
          <AllCategoriesListItem category={category} key={category} />
        ))}
      </ul>
    </div>
  );
};
