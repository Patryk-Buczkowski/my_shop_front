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
        className="w-5 h-5 flex justify-items-center justify-center align-baseline rounded-full border-2 border-[var(--color-primary)]"
      >
        <Plus color="var(--color-primary)" size={15} />
      </div>
    </>
  );
};
