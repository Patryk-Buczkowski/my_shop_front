export const sortByOptions = [
  "price:asc",
  "price:desc",
  "name:asc",
  "name:desc",
  "rating:asc",
  "rating:desc",
] as const;

export type SortBy = (typeof sortByOptions)[number];

export type FilterProductType = {
  category?: string;
  minPrice?: string;
  maxPrice?: string;
  sortBy?: SortBy | Array<SortBy>;
};
