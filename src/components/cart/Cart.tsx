import { ButtonMinus } from "../buttonMinus/ButtonMinus";
import { ButtonPlus } from "../buttonPlus/ButtonPlus";
import { useCartStore } from "../../zustand/useCartStore";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { DeliveryAdress } from "../../types/deliveryAdress";

export const Cart: React.FC = () => {
  const { cart, totalSum, addToCart, decreaseAmount, removeFromCart } =
    useCartStore();
  const [deliveryAdress, setDeliveryAdress] = useState<DeliveryAdress | null>(
    null
  );
  const [isEdited, setIsEdited] = useState(true);
  const [formFields, setFormFields] = useState<DeliveryAdress>({
    country: "",
    city: "",
    street_number: "",
    voivodeship_region: "",
    zip_code: "",
  });
  const formInputs: (keyof DeliveryAdress)[] = ["city","country","street_number", "voivodeship_region", "zip_code"];

  const handlerCloseInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "Escape") {
      setIsEdited(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof DeliveryAdress
  ) => {
    setFormFields({
      ...formFields,
      [field]: e.target.value,
    });
  };

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDeliveryAdress(formFields);
    setIsEdited(false);
  };

  return (
    <div className="flex flex-col w-full p-2 gap-0.5">
      <h3 className="font-bold tracking-wider">Cart</h3>
      {/* wyswietl adres dostawy z inputem do edycjii */}
      {!isEdited && (
        <div className="flex justify-between max-w-[300px] pb-3 items-end">
          <p className="">
            {deliveryAdress === null ? (
              "Add delivery adres"
            ) : (
              <>
                <h4>Delivery adress</h4>
                <p>Country: {deliveryAdress.country}</p>
                <p>City: {deliveryAdress.city}</p>
                <p>Street & number: {deliveryAdress.street_number}</p>
                <p>Zip code: {deliveryAdress.zip_code}</p>
              </>
            )}
          </p>

          <div className="flex items-center gap-2" onClick={() => setIsEdited(true)}>
            <Pencil size={14} />
            <span className="font-extrabold tracking-wider text-lg text-[var(--color-secondary)]">Edit</span>
          </div>
        </div>
      )}
      {isEdited && (
        <form className="pb-3" onSubmit={(e) => handlerSubmit(e)}>
          {formInputs.map(input => (
            <input
            className="mb-1 rounded-md text-sm border-2 border-[var(--color-primary-light)]"
            type="text"
            name={input}
            placeholder={`Type ${input}`}
            onChange={(e) => handleInputChange(e, `${input}`)}
            onKeyDown={(e) => handlerCloseInput(e)}
            required
          />
          ))}

          <button className="ml-3 p-1 rounded-md border-1 bg-[var(--color-secondary)]">
            Save Adress ✅
          </button>
        </form>
      )}
      <div>
        {cart.map((product) => (
          <div key={product.id} className="flex justify-between mb-1.5 ">
            <div className="relative h-fit">
              <img
                className=" relative w-[85px] h-[85px]"
                src={product.pictureUrl}
                alt="product image"
              />
              <div
                onClick={() => removeFromCart(product.id)}
                className="absolute w-5.5 h-5.5 rounded-full bottom-2 left-1 bg-white flex justify-center items-center"
              >
                <Trash2 size={13} color="red" />
              </div>
            </div>

            <div className=" max-w-[210px] flex pl-2 flex-col gap-1 text-sm font-light">
              <p>{product.title}</p>

              <p>{product.description}</p>
              <p> avg Rate: {product.averageRate.toFixed(2)}</p>
              <span className="flex justify-between">
                <p className="font-bold">{`$${(product.price * product.amount).toFixed(2)}`}</p>

                <span className="flex justify-between min-w-[35%] max-w-[40%]">
                  <ButtonPlus product={product} add={addToCart} />
                  <p className=" rounded-lg text-[var(--color-secondary)] font-semibold w-5 text-center items-center bg-[var(--color-primary-light)] pr-0.5">{`${product.amount}`}</p>
                  <ButtonMinus product={product} subtract={decreaseAmount} />
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>

      <p>{`Total sum $${totalSum}`}</p>
    </div>
  );
};

// const customImageUrl = `https://picsum.photos/${width}/${height}`;
