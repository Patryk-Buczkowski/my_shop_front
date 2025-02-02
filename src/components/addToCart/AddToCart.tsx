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
      className={`flex box-border justify-center w-[80%] mt-3 gap-1 h-10 bg-[var(--color-primary)] p-3 relative  rounded-full`}
      onClick={() => addToCart(item)}
    >
      <div className="w-full z-10 flex h-fit justify-center pr-1 pl-1 gap-1 text-sm">
        <div className="bg-black flex justify-center items-center left-3 top-1 w-8 h-8 rounded-full absolute ">
          <Plus size={15} color="var(--color-primary)" />
        </div>

        <p className="leading-4 select-none text-[var(--buttonTextColor)] tracking-wide font-bold">Add to Cart</p>
      </div>

      <div className="w-[calc(100%-15px)] h-[40px] [clip-path:ellipse(50%_40%_at_50%_50%)] bg-inherit absolute bottom-0 transform -translate-y-[14px]" />
    </div>
  );
};
