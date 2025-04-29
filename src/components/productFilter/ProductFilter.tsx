import { useEffect, useState } from "react";
import { SortBy } from "../../types/filterProductType";
import { SelectElementsPerPage } from "../selectElementsPerPage";
import { useSearchParams } from "react-router-dom";
import styles from "./ProductFilter.module.scss";

type Props = {
  setPerPage: React.Dispatch<React.SetStateAction<number>>;
  setPageNr: React.Dispatch<React.SetStateAction<number>>;
};

export const ProductFilter: React.FC<Props> = ({ setPageNr, setPerPage }) => {
  const [searchParams, setSearchPrams] = useSearchParams();
  const [visibleCheckbox, setVisibleCheckbox] = useState(false);
  const [openCheckbox, setOpenCheckbox] = useState(false);
  const [titleQuery, setTitleQuery] = useState("");
  const sortByArray: SortBy[] = [
    "title_asc",
    "title_desc",
    "price_asc",
    "price_desc",
    "rating_asc",
    "rating_desc",
  ];
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);
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

  const handlerSelect = (num: number) => {
    setPerPage(num);
    setPageNr(1);
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

  return (
    <div className="flex flex-wrap justify-center gap-2">
      <SelectElementsPerPage handlerSelect={handlerSelect} />

      <input
        className="w-18 border-1 h-7 rounded-sm"
        type="text"
        name="title"
        value={titleQuery}
        placeholder="type title"
        onChange={(e) => setTitleQuery(e.target.value)}
      />

      <input
        className="w-18 border-1 h-7 rounded-sm p-1 text-sm"
        min={0}
        value={minPrice === 0 ? "" : minPrice}
        name="minPrice"
        placeholder="min price"
        onChange={(e) => setMinPrice(+e.target.value)}
        type="number"
      />

      <input
        className="w-18 border-1 h-7 rounded-sm p-1 text-sm"
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
            className={`invisible absolute left-0 z-10 translate-y-8 transform flex-col gap-1 rounded-lg bg-[var(--color-secondary)] p-1 ${!openCheckbox ? styles.anime__close : styles.anime__open}`}
          >
            {sortByArray.map((item) => (
              <label
                key={item}
                className="w-27 border-1 flex justify-between rounded-sm border-[var(--primary-light)] pl-0.5"
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
          className="w-18 border-1 rounded-sm p-1 text-sm active:border-[var(--color-primary)] active:text-[var(--color-primary)]"
          type="button"
          onClick={handlerCheckbox}
        >
          Sort by
        </button>
      </div>
    </div>
  );
};
