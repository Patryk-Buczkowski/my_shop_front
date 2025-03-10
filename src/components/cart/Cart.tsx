import { useCartStore } from "../../zustand/useCartStore";
import { Pencil, Trash2 } from "lucide-react";
import { KeyboardEvent, useState } from "react";
import { DeliveryAdress } from "../../types/deliveryAdress";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { ButtonMinus } from "../buttonMinus";
import { ButtonPlus } from "../buttonPlus";

const Cart: React.FC = () => {
  const { cart, totalSum, addToCart, decreaseAmount, removeFromCart } =
    useCartStore();
  const [deliveryAdress, setDeliveryAdress] = useState<DeliveryAdress | null>(
    localStorage.getItem("deliveryAddress")
      ? JSON.parse(localStorage.getItem("deliveryAddress") || "{}")
      : null
  );
  const [isEdited, setIsEdited] = useState(false);
  const formInputs: (keyof DeliveryAdress)[] = [
    "city",
    "country",
    "street_number",
    "voivodeship",
    "zip_code",
  ];

  console.log("cart", cart);

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

  const handlerSetAddress = (values: DeliveryAdress) => {
    console.log(values);
    localStorage.setItem("deliveryAddress", JSON.stringify(values));
  };

  return (
    <div className="flex flex-col w-full p-1 gap-0.5">
      <h3 className="font-bold select-none tracking-wider">Cart</h3>

      {!isEdited && (
        <div className="flex flex-col mb-3 items-center border border-gray-300 rounded-xl p-4 shadow-md bg-[var(--color-secondary)] max-w-[350px] mx-auto">
          <div className="flex justify-between w-full items-end gap-2">
            <div className="text-gray-700">
              {deliveryAdress === null ? (
                <p className="select-none text-sm text-gray-500">
                  Add delivery address :
                </p>
              ) : (
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Delivery address
                  </h4>
                  <p className="text-sm">
                    Country:{" "}
                    <span className="font-medium">
                      {deliveryAdress.country}
                    </span>
                  </p>
                  <p className="text-sm">
                    City:{" "}
                    <span className="font-medium">{deliveryAdress.city}</span>
                  </p>
                  <p className="text-sm">
                    Street & number:{" "}
                    <span className="font-medium">
                      {deliveryAdress.street_number}
                    </span>
                  </p>
                  <p className="text-sm">
                    Zip code:{" "}
                    <span className="font-medium">
                      {deliveryAdress.zip_code}
                    </span>
                  </p>
                </div>
              )}
            </div>

            <button
              className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-lg hover:bg-gray-200 transition text-[var(--color-secondary)]"
              onClick={() => setIsEdited(true)}
            >
              <Pencil size={16} className="text-gray-600" />
              <span className="font-bold tracking-wide text-sm">Edit</span>
            </button>
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
                onClick={() => handlerSetAddress(values)}
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

      {!!cart.length && (
        <div>
          {cart.map((product) => (
            <div
              key={product._id}
              className="flex m-auto max-w-[500px] justify-between mb-3"
            >
              <div className="relative h-fit">
                <img
                  className="relative w-[85px] h-[85px]"
                  src={product.pictureUrl}
                  alt="product image"
                />
                <div
                  onClick={() => removeFromCart(product._id)}
                  className="absolute w-5.5 h-5.5 rounded-full bottom-2 left-1 bg-white flex justify-center items-center"
                >
                  <Trash2 size={13} color="red" />
                </div>
              </div>

              <div className="w-[70%] min-w-[200px] flex flex-col gap-2 p-3 rounded-lg border border-[var(--color-secondary)] shadow-md text-sm font-light bg-[var(--bgColor)]">
                <span className="flex justify-between items-center border-b border-[var(--color-secondary)] pb-1">
                  <p className="text-[var(--color-secondary)] font-semibold">
                    Title:
                  </p>
                  <p className="text-[var(--color-primary-light)]">
                    {product.title}
                  </p>
                </span>

                <span className="flex justify-between items-center border-b border-[var(--color-secondary)] pb-1">
                  <p className="text-[var(--color-secondary)] font-semibold">
                    Description:
                  </p>
                  <p className="text-[var(--color-primary-light)]">
                    {product.description}
                  </p>
                </span>

                <span className="flex justify-between items-center border-b border-[var(--color-secondary)] pb-1">
                  <p className="text-[var(--color-secondary)] font-semibold">
                    avg Rate:
                  </p>
                  <p className="text-[var(--color-primary-light)]">
                    {product.averageRate.toFixed(2) ?? "N/A"}
                  </p>
                </span>

                <span className="flex justify-between items-center mt-2">
                  <p className="text-lg font-bold text-[var(--color-primary)]">{`$${(product.price * product.amount).toFixed(2) ?? "N/A"}`}</p>

                  <span className="flex justify-between items-center gap-2 min-w-[35%] max-w-[40%]">
                    <ButtonPlus product={product} add={addToCart} />
                    <p className="rounded-lg text-[var(--color-secondary)] font-semibold w-6 text-center bg-[var(--color-primary-light)] shadow-sm">
                      {`${product.amount}`}
                    </p>
                    <ButtonMinus product={product} subtract={decreaseAmount} />
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length !== 0 ? (
        <p>{`Total sum $${totalSum.toFixed(2)}`}</p>
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
