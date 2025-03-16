import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductType } from "../../../types/productType";
import styles from "./Details.module.scss";
import { Button, Pagination } from "@mui/material";
import { useStore } from "zustand";
import { useCartStore } from "../../../zustand/useCartStore";
import { CommentsList } from "../commentsList/CommentsList";
import {
  useBreakpointListener,
  useBreakpointStore,
} from "../../../zustand/useBreakPoint";

export const Details: React.FC = () => {
  const location = useLocation();
  const product = location.state as ProductType;
  const navigate = useNavigate();

  const PER_PAGE = 5;
  const { addToCart, cart } = useStore(useCartStore);
  const [pageNr, setPageNr] = useState(1);
  const [inCart, setInCart] = useState(false);
  const startFrom = PER_PAGE * pageNr - PER_PAGE;
  const endOn = Math.min(PER_PAGE * pageNr, product.commentsList.length);
  const [visibleComments, setVisibleComments] = useState(
    product.commentsList.slice(startFrom, endOn)
  );
  const { isTablet, isDesktop, isWideScreen } = useBreakpointStore();
  const detailsElements: Array<[keyof ProductType, string]> = [
    ["title", product.title],
    ["averageRate", product.averageRate.toFixed(2).toString()],
    ["category", product.category || "N/A"],
    ["description", product.description],
    ["price", product.price.toString()],
    ["quantityAvailable", product.quantityAvailable?.toString() || "N/A"],
  ];
  useBreakpointListener();

  //set inCart
  useEffect(() => {
    for (const item of cart) {
      if (item._id.includes(product._id)) {
        setInCart(true);
      }
    }
  }, [cart, product._id]);

  // set visible comments
  useEffect(() => {
    setVisibleComments(product.commentsList.slice(startFrom, endOn));
  }, [endOn, product.commentsList, startFrom]);

  return (
    <>
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
      <div className="flex min-h-[88vh] flex-col items-center">
        <img
          className="w-35 mb-2 m-auto rounded-lg"
          src={product.pictureUrl}
          alt="product image"
        />

        <div className="mb-5">
          {detailsElements.map(([key, value]) => (
            <span
              key={key}
              className="flex mb-1 m-auto justify-between max-w-80 gap-2 p-2 rounded-md border border-[var(--color-secondary)] bg-[var(--bgColor)]"
            >
              <p className="font-bold text-[var(--color-primary)]">{`${key}:`}</p>
              <p className="text-right text-[var(--color-primary-light)]">
                {value}
              </p>
            </span>
          ))}
        </div>

        <Button
          sx={{
            borderRadius: "100%",
            width: "100%",
            maxWidth: "400px",
            marginBottom: "1.25rem",
          }}
          variant="contained"
          size="large"
          onClick={
            inCart
              ? () => {
                  navigate("/cart");
                }
              : () => addToCart(product)
          }
        >
          {inCart ? "Go to cart" : "Add to cart"}
        </Button>

        {product.comments.length !== 0 && (
          <>
            <div className="m-auto w-full flex justify-center mb-5">
              <Pagination
                size={
                  (isDesktop && "large") || (isTablet && "medium") || "small"
                }
                key={pageNr}
                count={Math.ceil(product.commentsList.length / PER_PAGE)}
                defaultPage={pageNr}
                page={pageNr}
                siblingCount={
                  (isWideScreen && 4) ||
                  (isDesktop && 3) ||
                  (isTablet && 2) ||
                  1
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
            <div className="w-full max-w-100 m-auto">
              <CommentsList comments={visibleComments} />
            </div>
          </>
        )}
      </div>
    </>
  );
};
