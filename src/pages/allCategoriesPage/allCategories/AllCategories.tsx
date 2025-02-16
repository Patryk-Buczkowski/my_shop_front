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
import { Loading } from "../../../components/loading";
import { ProductFilter } from "../../../components/productFilter/ProductFilter";

const AllCategories: React.FC = () => {
  const [selectedCategoryProducts, setSelectedCategoryProducts] = useState<
    ProductType[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [perPage, setPerPage] = useState(4);
  const [searchParams] = useSearchParams();
  const [pageNr, setPageNr] = useState(1);
  const startFrom = perPage * pageNr - perPage;
  const endOn = Math.min(perPage * pageNr, selectedCategoryProducts.length);
  const [visibleProducts, setVisibleProducts] = useState(
    selectedCategoryProducts.slice(startFrom, endOn)
  );
  const { isTablet, isDesktop, isWideScreen } = useBreakpointStore();

  useBreakpointListener();

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

      <ProductFilter setPageNr={setPageNr} setPerPage={setPerPage} />

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
        <div className="flex justify-center gap-2 flex-wrap">
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

export default AllCategories;
