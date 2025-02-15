import React from "react";
import { AllCategoriesList } from "../allCategoriesList";
import styles from "./AllCategories.module.scss";
import { useSearchParams } from "react-router-dom";
import { ProductType } from "../../../types/productType";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import { AllCategoriesProduct } from "../allCategoriesProduct";
import {
  useBreakpointListener,
  useBreakpointStore,
} from "../../../zustand/useBreakPoint";
import { SortBy } from "../../../types/filterProductType";
import { Loading } from "../../../components/loading";
import { SelectElementsPerPage } from "../../../components/selectElementsPerPage";

export const AllCategories: React.FC = () => {
  const [selectedCategoryProducts, setSelectedCategoryProducts] = useState<
    ProductType[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [perPage, setPerPage] = useState(4);
  const [searchParams, setSearchPrams] = useSearchParams();
  const [pageNr, setPageNr] = useState(1);
  const startFrom = perPage * pageNr - perPage;
  const endOn = Math.min(perPage * pageNr, selectedCategoryProducts.length);
  const sortByArray: SortBy[] = [
    "title_asc",
    "title_desc",
    "price_asc",
    "price_desc",
    "rating_asc",
    "rating_desc",
  ];
  const [titleQuery, setTitleQuery] = useState("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [visibleProducts, setVisibleProducts] = useState(
    selectedCategoryProducts.slice(startFrom, endOn)
  );
  const [openCheckbox, setOpenCheckbox] = useState(false);
  const [visibleCheckbox, setVisibleCheckbox] = useState(false);
  const { isTablet, isDesktop, isWideScreen } = useBreakpointStore();
  const [sortBy, setSortBy] = useState<SortBy[]>(() => {
    const initialSortBy: SortBy[] = [];

    for (const [key, value] of searchParams.entries()) {
      const sortOption = `${key}:${value}` as SortBy;
      if (sortByArray.includes(sortOption)) {
        initialSortBy.push(sortOption);
      }
    }

    return initialSortBy;
  });

  const handlerSelect = (num: number) => {
    setPerPage(num);
    setPageNr(1);
  };

  const handleSortChange = (item: SortBy) => {
    const newParams = new URLSearchParams(searchParams);
    const [key] = item.split("_");

    if (newParams.getAll("sortBy").includes(item)) {
      const values = newParams.getAll("sortBy").filter((val) => val !== item);
      newParams.delete("sortBy", item);
      values.forEach((val) => newParams.append("sortBy", val));
    } else {
      newParams.set("sortBy", item);
    }

    setSearchPrams(newParams);

    setSortBy((prevState) => {
      if (prevState.includes(item)) {
        return prevState.filter((i) => i !== item);
      }
      const newState = prevState.filter((i) => !i.startsWith(key));

      return [...newState, item];
    });
  };

  const handlerCheckbox = () => {
    setOpenCheckbox((prevState) => !prevState);

    if (!visibleCheckbox) {
      setVisibleCheckbox(true);
    } else {
      setTimeout(() => {
        setVisibleCheckbox((prevState) => !prevState);
      }, 1100);
    }
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

    // if (sortBy !== []) {
    //   // ustaw dla kazdego z max 3 elem search query
    // }

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
  }, [endOn, selectedCategoryProducts, startFrom]);

  return (
    <div className="p-1 min-h-[calc(100%-80px)] flex flex-col justify-center">
      <img src="./bubble_01.svg" className={`${styles.decoration__top_left}`} />
      <img
        src="./bubble_02.svg"
        className={`${styles.decoration__top_right}`}
      />
      <img
        src="./bubble_02.svg"
        className={`${styles.decoration__bottom_left}`}
      />
      <img
        src="./bubble_01.svg"
        className={`${styles.decoration__bottom_right}`}
      />

      <h2 className="mb-2 sm:text-2xl">All Categories</h2>

      <nav className="mb-2">
        <AllCategoriesList />
      </nav>

      <div className=" flex flex-wrap gap-2">
        <SelectElementsPerPage handlerSelect={handlerSelect} />

        <input
          className="w-18 h-7 border-1 rounded-sm"
          type="text"
          name="title"
          value={titleQuery}
          placeholder="type title"
          onChange={(e) => setTitleQuery(e.target.value)}
        />

        <input
          className="w-18 h-7 text-sm p-1 border-1 rounded-sm"
          min={0}
          value={minPrice === 0 ? "" : minPrice}
          name="minPrice"
          placeholder="min price"
          onChange={(e) => setMinPrice(+e.target.value)}
          type="number"
        />

        <input
          className="w-18 h-7 text-sm p-1 border-1 rounded-sm"
          min={0}
          value={maxPrice === 0 ? "" : maxPrice}
          placeholder="max price"
          onChange={(e) => setMaxPrice(+e.target.value)}
          type="number"
          name="maxPrice"
        />

        <div className="relative mb-2">
          {visibleCheckbox && (
            <div
              className={`z-10 invisible absolute p-1 transform translate-y-8
           left-0 rounded-lg flex-col gap-1 bg-[var(--color-secondary)]  ${!openCheckbox ? styles.anime__close : styles.anime__open}`}
            >
              {sortByArray.map((item) => (
                <label
                  key={item}
                  className=" flex justify-between w-27 rounded-sm border-1 pl-0.5 border-[var(--primary-light)]"
                >
                  {item}
                  <input
                    onChange={() => handleSortChange(item)}
                    type="checkbox"
                    name={item}
                    checked={sortBy.includes(item)}
                  />
                </label>
              ))}
            </div>
          )}

          <button
            className="w-18 text-sm p-1 border-1 rounded-sm active:border-[var(--color-primary)] active:text-[var(--color-primary)]"
            type="button"
            onClick={handlerCheckbox}
          >
            Sort by
          </button>
        </div>
      </div>

      {!isLoading && (
        <div className="m-auto mb-1">
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
        </div>
      )}

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
