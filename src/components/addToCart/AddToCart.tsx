import { Plus } from "lucide-react";
import { ProductType } from "../../types/productType";
import { useCartStore } from "../../zustand/useCartStore";

type Props = {
  item: ProductType;
};

export const AddToCart: React.FC<Props> = ({ item }) => {
  const { addToCart } = useCartStore();

  return (
    <div
      className={`relative mt-3 box-border flex h-10 w-[80%] justify-center gap-1 rounded-full bg-[var(--color-primary)] p-3`}
      onClick={() => addToCart(item)}
    >
      <div className="z-10 flex h-fit w-full justify-center gap-1 pl-1 pr-1 text-sm">
        <div className="absolute left-3 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-black">
          <Plus size={15} color="var(--color-primary)" />
        </div>

        <p className="select-none font-bold leading-4 tracking-wide text-[var(--buttonTextColor)]">
          Add to Cart
        </p>
      </div>

      <div className="absolute bottom-0 h-[40px] w-[calc(100%-15px)] -translate-y-[14px] transform bg-inherit [clip-path:ellipse(50%_40%_at_50%_50%)]" />
    </div>
  );
};
