import { Plus } from "lucide-react";
import { ProductType } from "../../types/productType";
// import { useCart } from "../../costomHooks/useCart";

type Props = {
  product: ProductType;
  add: (item: ProductType) => void;
};

export const ButtonPlus: React.FC<Props> = ({ product, add }) => {
  return (
    <>
      <div
        onClick={() => add(product)}
        className="flex h-5 w-5 justify-center justify-items-center rounded-full border-2 border-[var(--color-primary)] align-baseline"
      >
        <Plus color="var(--color-primary)" size={15} />
      </div>
    </>
  );
};
