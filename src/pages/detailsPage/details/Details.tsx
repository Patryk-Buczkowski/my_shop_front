import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CommentType, ProductType } from "../../../types/productType";
import styles from "./Details.module.scss";
import { Button, Pagination } from "@mui/material";
import { useStore } from "zustand";
import { useCartStore } from "../../../zustand/useCartStore";
import { CommentsList } from "../commentsList/CommentsList";
import {
  useBreakpointListener,
  useBreakpointStore,
} from "../../../zustand/useBreakPoint";
import { useLoggedStore } from "../../../zustand/useLogged";
import { getCssVariable } from "../../../utils/getCssVariable";
import axios from "axios";

const BACKEND = import.meta.env.VITE_BACKEND_URL;

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
    product.commentsList.slice(startFrom, endOn),
  );
  const editableValues = [
    "title",
    "category",
    "description",
    "price",
    "quantityAvailable",
  ] as const;
  const { isTablet, isDesktop, isWideScreen } = useBreakpointStore();
  const {
    loggedUser: logged,
    setEditedProductId,
    isEdited,
    setIsEdited,
  } = useLoggedStore();

  const [newValues, setNewValues] = useState<
    Partial<Record<keyof ProductType, string | number | CommentType[]>>
  >({
    title: product.title,
    category: product.category,
    description: product.description,
    price: product.price,
    quantityAvailable: product.quantityAvailable,
    commentsList: product.commentsList,
    comments: product.comments,
    pictureUrl: product.pictureUrl,
    averageRate: product.averageRate,
    rateCount: product.rateCount,
    _id: product._id,
  });

  const detailsElements: Array<[keyof ProductType, string | number]> = [
    ["title", product.title],
    ["price", product.price.toString()],
    ["description", product.description],
    ["quantityAvailable", product.quantityAvailable?.toString() || "N/A"],
    ["averageRate", product.averageRate.toFixed(2)],
    ["rateCount", product.rateCount],
    ["category", product.category || "N/A"],
  ];

  useBreakpointListener();

  const updateProduct = async (
    newData: Partial<
      Record<keyof ProductType, string | number | CommentType[]>
    >,
  ) => {
    try {
      const response = await axios.put(
        `${BACKEND}/updateProduct/${product._id}`,
        newData,
        {
          withCredentials: true,
        },
      );
      console.log("product updated");
      setIsEdited(false);
      navigate("/details", { state: newValues });
      console.log("updated prod", response.data);
    } catch (error) {
      console.error("update error", error);
    }
  };

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

  //set edited product id
  useEffect(() => {
    setEditedProductId(product._id);
  }, []);

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
          className="w-35 m-auto mb-2 rounded-lg"
          src={product.pictureUrl}
          alt="product image"
        />

        <div className="mb-5">
          {detailsElements.map(([key, value]) => (
            <span
              key={key}
              className="m-auto mb-1 flex max-w-80 justify-between gap-2 rounded-md border border-[var(--color-secondary)] bg-[var(--bgColor)] p-2"
            >
              <p className="font-bold text-[var(--color-primary)]">{`${key}:`}</p>

              {isEdited &&
              editableValues.includes(
                key as (typeof editableValues)[number],
              ) ? (
                <input
                  type="text"
                  value={String(newValues[key])}
                  onChange={(e) =>
                    setNewValues((prevState) => ({
                      ...prevState,
                      [key]: e.target.value,
                    }))
                  }
                />
              ) : (
                <p
                  onClick={() =>
                    ["moderator", "admin"].includes(logged.role)
                      ? setIsEdited(true)
                      : console.log("become crew member")
                  }
                  className="text-right text-[var(--color-primary-light)]"
                >
                  {value}
                </p>
              )}
            </span>
          ))}
        </div>

        <p className="border-1 mb-3.5 rounded-full border-b-transparent border-l-amber-400 border-r-amber-400 border-t-transparent p-1.5 text-right text-[var(--color-secondary)]">
          Comments number - {product.commentsList.length}
        </p>

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

        {isEdited && (
          <div className="flex w-[400px] gap-1.5">
            <Button
              sx={{
                borderRadius: "100%",
                width: "100%",
                maxWidth: "200px",
                marginBottom: "1.25rem",
                color: getCssVariable("--edit-mode-color"),
              }}
              variant="contained"
              size="large"
              onClick={() => updateProduct(newValues)}
            >
              Update Product
            </Button>

            <Button
              sx={{
                borderRadius: "100%",
                width: "100%",
                maxWidth: "200px",
                marginBottom: "1.25rem",
                color: getCssVariable("--color-error"),
              }}
              variant="contained"
              size="large"
              onClick={() => setIsEdited(false)}
            >
              Cancel Update
            </Button>
          </div>
        )}

        {product.comments.length !== 0 && (
          <>
            <div className="m-auto mb-5 flex w-full justify-center">
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
            <div className="max-w-100 m-auto w-full">
              <CommentsList comments={visibleComments} />
            </div>
          </>
        )}
      </div>
    </>
  );
};
