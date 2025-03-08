
export type ProductType = {
  _id: string;
  title: string;
  price: number;
  description: string;
  quantityAvailable?: number;
  rate: number[];
  comments: CommentType[];
  averageRate: number;
  rateCount: number;
  category?: CategoryType;
  commentsList: CommentType[];
  amount: number;
  pictureUrl: string;
  updateAverageRate: (newRate: number) => Promise<void>;
};

export const categories = [
  "food",
  "drinks",
  "meat",
  "dairy products",
  "household goods",
  "household chemicals",
  "cosmetics",
  "bio food",
  "snacks",
  "confectionery",
  "seafood",
  "frozen food",
  "baked goods",
  "fruits and vegetables",
  "beverages",
  "pet supplies",
  "baby products",
  "health supplements",
  "electronics",
  "personal hygiene",
  "stationery",
  "home decor",
  "other",
] as const;

export type CategoryType = typeof categories[number];


export type CommentType = {
  comment: string;
  userId: string;
  productId: string;
};
