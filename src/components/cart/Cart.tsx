import { ButtonMinus } from "../buttonMinus/ButtonMinus";
import { ButtonPlus } from "../buttonPlus/ButtonPlus";
import { useCartStore } from "../../zustand/useCartStore";

export const Cart: React.FC = () => {
  const { cart, totalSum, addToCart, decreaseAmount } = useCartStore();
  console.log("cart", cart);
  return (
    <div className="flex flex-col w-full p-2 gap-0.5">
      <h3>Cart</h3>
      <div>
        {cart.map((product) => (
          <div key={product.id} className="flex justify-between mb-1.5">
            <img className="w-[85px] h-[85px]" src={product.pictureUrl} alt="product image" />
            <div className="flex pl-2 flex-col gap-1 text-sm font-light">
              <p className="">{product.title}</p>
              <p>{`${product.description}`}</p>
              <span className="flex justify-between">
                <p className="font-bold">{`$${product.price}`}</p>
                <p>{`Total sum $${totalSum}`}</p>
                <span className="flex justify-between min-w-[35%] max-w-[40%]">
                  <ButtonPlus product={product} add={addToCart} />
                  <p>{`${product.amount}`}</p>
                  <ButtonMinus product={product} subtract={decreaseAmount} />
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// const customImageUrl = `https://picsum.photos/${width}/${height}`;
