import { Minus } from "lucide-react";
import { ProductType } from "../../types/productType";
type Props = {
  subtract: (id: string) => void;
  product: ProductType;
};

export const ButtonMinus: React.FC<Props> = ({product, subtract}) => {
  return (
    <>
      <div
        onClick={() => subtract(product.id)}
        className="w-5 h-5 flex justify-items-center justify-center align-baseline rounded-full border-2 border-[var(--color-primary)]"
      >
        <Minus color="var(--color-primary)" size={15} />
      </div>
    </>
  );
};
