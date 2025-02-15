import { ButtonMinus } from "../ButtonMinus/ButtonMinus";
import { ButtonPlus } from "../ButtonPlus/ButtonPlus";
import { useCartStore } from "../../zustand/useCartStore";
import { Pencil, Trash2 } from "lucide-react";
import { KeyboardEvent, useState } from "react";
import { DeliveryAdress } from "../../types/deliveryAdress";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

export const Cart: React.FC = () => {
  const { cart, totalSum, addToCart, decreaseAmount, removeFromCart } =
    useCartStore();
  const [deliveryAdress, setDeliveryAdress] = useState<DeliveryAdress | null>(
    null
  );
  const [isEdited, setIsEdited] = useState(false);
  const formInputs: (keyof DeliveryAdress)[] = [
    "city",
    "country",
    "street_number",
    "voivodeship",
    "zip_code",
  ];

  const validationSchema = Yup.object({
    country: Yup.string().required("Country is required"),
    city: Yup.string().required("City is required"),
    street_number: Yup.string().required("Street number is required"),
    voivodeship: Yup.string().required("Region is required"),
    zip_code: Yup.string().required("Zip code is required"),
  });

  const handlerCloseInput = (
    e: React.KeyboardEvent<HTMLInputElement>,
    resetForm: () => void
  ) => {
    if (e.key === "Escape") {
      resetForm();
      setIsEdited(false);
    }
  };

  return (
    <div className="flex flex-col w-full p-1 gap-0.5">
      <h3 className="font-bold select-none tracking-wider">Cart</h3>

      {!isEdited && (
        <div className="flex justify-between max-w-[300px] pb-3 items-end">
          <span>
            {deliveryAdress === null ? (
              <p className="select-none">Add delivery address :</p>
            ) : (
              <>
                <h4>Delivery address</h4>
                <p>Country: {deliveryAdress.country}</p>
                <p>City: {deliveryAdress.city}</p>
                <p>Street & number: {deliveryAdress.street_number}</p>
                <p>Zip code: {deliveryAdress.zip_code}</p>
              </>
            )}
          </span>

          <div
            className="flex items-center gap-2"
            onClick={() => setIsEdited(true)}
          >
            <Pencil size={14} />
            <span className="font-extrabold tracking-wider text-lg text-[var(--color-secondary)]">
              Edit
            </span>
          </div>
        </div>
      )}

      {isEdited && (
        <Formik
          initialValues={{
            country: "",
            city: "",
            street_number: "",
            voivodeship: "",
            zip_code: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            setDeliveryAdress(values);
            setIsEdited(false);
          }}
        >
          {({
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
            resetForm,
          }) => (
            <Form className="pb-3">
              {formInputs.map((input) => (
                <div key={input} className="mb-2">
                  <Field
                    className="mb-1 rounded-md text-sm border-2 border-[var(--color-primary-light)] max-w-[200px]"
                    type="text"
                    name={input}
                    placeholder={`Type ${input}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[input]}
                    onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
                      handlerCloseInput(e, resetForm)
                    }
                  />
                  {errors[input] && touched[input] && (
                    <div className="text-red-500 text-xs">{errors[input]}</div>
                  )}
                </div>
              ))}

              <button
                className="ml-3 p-1 rounded-md border-1 bg-[var(--color-secondary)] select-none active:text-[var(--color-primary-light)]"
                type="submit"
                onClick={() => console.log(deliveryAdress)}
              >
                Save Address ✅
              </button>

              <button
                type="button"
                onClick={() => setIsEdited(false)}
                className="ml-3 p-1 rounded-md border-1 bg-[var(--color-secondary)] select-none  active:border-red-600"
              >
                ❌
              </button>
            </Form>
          )}
        </Formik>
      )}

      <div>
        {cart.map((product) => (
          <div key={product.id} className="flex justify-between mb-1.5">
            <div className="relative h-fit">
              <img
                className="relative w-[85px] h-[85px]"
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

            <div className="max-w-[210px] flex pl-2 flex-col gap-1 text-sm font-light">
              <p>{product.title}</p>
              <p>{product.description}</p>
              <p> avg Rate: {product.averageRate.toFixed(2)}</p>
              <span className="flex justify-between">
                <p className="font-bold">{`$${(product.price * product.amount).toFixed(2)}`}</p>

                <span className="flex justify-between min-w-[35%] max-w-[40%]">
                  <ButtonPlus product={product} add={addToCart} />
                  <p className="rounded-lg text-[var(--color-secondary)] font-semibold w-5 text-center items-center bg-[var(--color-primary-light)]">{`${product.amount}`}</p>
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
