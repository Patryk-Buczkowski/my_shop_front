import { useSearchParams } from "react-router-dom";
import { categories, ProductType } from "../../types/productType";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loading } from "../../components/loading";
import Pagination from "@mui/material/Pagination";
import { AllCategoriesProduct } from "../allCategoriesProduct";
import { AllCategoriesListItem } from "../allCategoriesListItem";

export const AllCategoriesList = () => {
  const [selectedCategoryProducts, setSelectedCategoryProducts] = useState<
    ProductType[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [screenWith, setScreenWith] = useState(window.innerWidth);
  const [perPage, setPerPage] = useState("4");
  const [searchParams] = useSearchParams();
  const selectValues = ["4", "8", "16", "32"];
  const [pageNr, setPageNr] = useState(0);

  // get Products
  useEffect(() => {
    const Products = async () => {
      try {
        setIsLoading(true);
        const category = searchParams.get("category");
        const response = await axios.get(
          `https://my-shop-backend-h9rp.onrender.com/my_shop_api/filterProduct?category=${category}`
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

  // handler resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWith(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-[310px] flex flex-col p-1 sm:w-[680px]">
      <ul className="flex gap-2 mb-4 overflow-auto">
        {categories.map((category) => (
          <AllCategoriesListItem category={category} key={category} />
        ))}
      </ul>

      <select onChange={(e) => setPerPage(e.target.value)} className="w-10 mb-3 border-1 rounded-sm">
        {selectValues.map((value) => (
          <option key={value} className="text-black" value={`${value}`}>{value}</option>
        ))}
      </select>

      <Pagination
        size={screenWith > 640 ? "medium" : "small"}
        count={41}
        defaultPage={16}
        siblingCount={screenWith > 640 ? 3 : 2}
        boundaryCount={screenWith > 640 ? 3 : 0}
        variant="outlined"
        color="primary"
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
        onChange={(_event, page) => console.log("Wybrana strona:", page)}
      />

      {isLoading && <Loading size={150} />}

      {!isLoading && (
        <div className="flex gap-2 max-w-[425px] sm:max-w-[600px] flex-wrap">
          {selectedCategoryProducts.map((product, index) => (
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
