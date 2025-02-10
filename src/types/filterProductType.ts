export const sortByOptions = [
  "price_asc",
  "price_desc",
  "title_asc",
  "title_desc",
  "rating_asc",
  "rating_desc",
] as const;

export type SortBy = (typeof sortByOptions)[number];

export type FilterProductType = {
  category?: string;
  minPrice?: string;
  maxPrice?: string;
  sortBy?: SortBy | Array<SortBy>;
};
