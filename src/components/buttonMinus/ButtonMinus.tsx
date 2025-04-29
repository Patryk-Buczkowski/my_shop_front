import { Minus } from "lucide-react";
import { ProductType } from "../../types/productType";
type Props = {
  subtract: (id: string) => void;
  product: ProductType;
};

export const ButtonMinus: React.FC<Props> = ({ product, subtract }) => {
  return (
    <>
      <div
        onClick={() => subtract(product._id)}
        className="flex h-5 w-5 justify-center justify-items-center rounded-full border-2 border-[var(--color-primary)] align-baseline"
      >
        <Minus color="var(--color-primary)" size={15} />
      </div>
    </>
  );
};
