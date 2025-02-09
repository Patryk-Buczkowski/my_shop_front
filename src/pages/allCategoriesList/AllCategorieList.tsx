import { useSearchParams } from "react-router-dom";
import { categories, ProductType } from "../../types/productType";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loading } from "../../components/loading";
import Pagination from "@mui/material/Pagination";
import { AllCategoriesProduct } from "../allCategoriesProduct";
import { AllCategoriesListItem } from "../allCategoriesListItem";
import {
  useBreakpointListener,
  useBreakpointStore,
} from "../../zustand/useBreakPoint";
import { SelectElementsPerPage } from "../../components/selectElementsPerPage";

export const AllCategoriesList = () => {
  const [selectedCategoryProducts, setSelectedCategoryProducts] = useState<
    ProductType[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [perPage, setPerPage] = useState(4);
  const [searchParams, setSearchPrams] = useSearchParams();
  const [pageNr, setPageNr] = useState(1);
  const startFrom = perPage * pageNr - perPage;
  const endOn = Math.min(perPage * pageNr, selectedCategoryProducts.length);
  const [titleQuery, setTitleQuery] = useState("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [visibleProducts, setVisibleProducts] = useState(
    selectedCategoryProducts.slice(startFrom, endOn)
  );
  const { isTablet, isDesktop, isWideScreen } = useBreakpointStore();

  console.log(searchParams.toString());

  const handlerSelect = (num: number) => {
    setPerPage(num);
    setPageNr(1);
  };

  useBreakpointListener();

  // filter & sort
  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);

    if (titleQuery !== "") {
      newParams.set("title", titleQuery);
    } else {
      newParams.delete("title");
    }

    if (minPrice) {
      newParams.set("minPrice", minPrice.toString());
    } else {
      newParams.delete("minPrice");
    }

    if (maxPrice) {
      newParams.set("maxPrice", maxPrice.toString());
    } else {
      newParams.delete("maxPrice");
    }

    setSearchPrams(newParams);
  }, [maxPrice, minPrice, searchParams, setSearchPrams, titleQuery]);

  // get Products
  useEffect(() => {
    const Products = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://my-shop-backend-h9rp.onrender.com/my_shop_api/filterProduct?${searchParams.toString()}`
        );
        if (response.data) {
          setSelectedCategoryProducts(response.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    Products();
  }, [searchParams]);

  // set visible proucts
  useEffect(() => {
    setVisibleProducts(selectedCategoryProducts.slice(startFrom, endOn));
  }, [endOn, selectedCategoryProducts, setPerPage, startFrom]);

  console.log("min", minPrice);
  console.log("max", maxPrice);

  return (
    <div className="w-[310px] flex flex-col p-1 sm:w-[680px]">
      <ul className="flex gap-2 mb-4 overflow-auto">
        {categories.map((category) => (
          <AllCategoriesListItem category={category} key={category} />
        ))}
      </ul>

      <div className="flex gap-2 w-fit mb-3">
        <SelectElementsPerPage handlerSelect={handlerSelect} />

        <input
          className="w-18 border-1 rounded-sm"
          type="text"
          name="title"
          value={titleQuery}
          onChange={(e) => setTitleQuery(e.target.value)}
          placeholder="type title"
        />

        <input
          className="w-18 text-sm p-1 border-1 rounded-sm"
          min={0}
          value={minPrice === 0 ? "" : minPrice}
          placeholder="min price"
          onChange={(e) => setMinPrice(+e.target.value)}
          type="number"
          name="minPrice"
        />

        <input
          className="w-18 text-sm p-1 border-1 rounded-sm"
          min={0}
          value={maxPrice === 0 ? "" : maxPrice}
          placeholder="max price"
          onChange={(e) => setMaxPrice(+e.target.value)}
          type="number"
          name="maxPrice"
        />

        <button
          className="w-18 text-sm p-1 border-1 rounded-sm active:border-[var(--color-primary)] active:text-[var(--color-primary)]"
          type="button"
          onClick={() => setOpenCheckbox((prevState) => !prevState)}
        >
          Sort by
        </button>
      </div>

      <Pagination
        size={(isDesktop && "large") || (isTablet && "medium") || "small"}
        key={pageNr}
        count={Math.ceil(selectedCategoryProducts.length / perPage)}
        defaultPage={pageNr}
        page={pageNr}
        siblingCount={
          (isWideScreen && 4) || (isDesktop && 3) || (isTablet && 2) || 1
        }
        boundaryCount={isTablet ? 2 : 0}
        variant="outlined"
        className="mb-3 self-center"
        sx={{
          "& .MuiPaginationItem-root": {
            color: "var(--color-secondary)",
            borderColor: "var(--buttonTextColor)",
          },
          "& .MuiPaginationItem-page.Mui-selected": {
            backgroundColor: "var(--color-primary-light)",
            color: "var(--color-secondary)",
          },
        }}
        onChange={(_event, page) => setPageNr(page)}
      />

      {isLoading && <Loading size={150} />}

      {!isLoading && (
        <div className="flex justify-center gap-2 max-w-[425px] sm:max-w-[600px] flex-wrap">
          {visibleProducts.map((product, index) => (
            <AllCategoriesProduct
              product={product}
              key={product.id ? product.id : index}
            />
          ))}
        </div>
      )}
    </div>
  );
};
