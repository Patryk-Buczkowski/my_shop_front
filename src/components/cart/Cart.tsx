import { useCartStore } from "../../zustand/useCartStore";
import { Pencil, Trash2 } from "lucide-react";
import { KeyboardEvent, useState } from "react";
import { DeliveryAdress } from "../../types/deliveryAdress";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { ButtonMinus } from "../buttonMinus";
import { ButtonPlus } from "../buttonPlus";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const { cart, totalSum, addToCart, decreaseAmount, removeFromCart } =
    useCartStore();
  const navigate = useNavigate();
  const [deliveryAdress, setDeliveryAdress] = useState<DeliveryAdress | null>(
    localStorage.getItem("deliveryAddress")
      ? JSON.parse(localStorage.getItem("deliveryAddress") || "{}")
      : null,
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
    resetForm: () => void,
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
    <div className="flex w-full flex-col gap-0.5 p-1">
      <h3 className="select-none font-bold tracking-wider">Cart</h3>

      {!isEdited && (
        <div className="mx-auto mb-3 flex max-w-[350px] flex-col items-center rounded-xl border border-gray-300 bg-[var(--color-secondary)] p-4 shadow-md">
          <div className="flex w-full items-end justify-between gap-2">
            <div className="text-gray-800">
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

                  <p className="text-sm">
                    Voivodeship:{" "}
                    <span className="font-medium">
                      {deliveryAdress.voivodeship}
                    </span>
                  </p>
                </div>
              )}
            </div>

            <button
              className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-1 text-[var(--color-secondary)] transition hover:bg-gray-200"
              onClick={() => setIsEdited(true)}
            >
              <Pencil size={16} className="text-gray-600" />
              <span className="text-sm font-bold tracking-wide">Edit</span>
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
                    className="mb-1 max-w-[200px] rounded-md border-2 border-[var(--color-primary-light)] text-sm"
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
                    <div className="text-xs text-red-500">{errors[input]}</div>
                  )}
                </div>
              ))}

              <button
                className="border-1 ml-3 select-none rounded-md bg-[var(--color-secondary)] p-1 active:text-[var(--color-primary-light)]"
                type="submit"
                onClick={() => handlerSetAddress(values)}
              >
                Save Address ✅
              </button>

              <button
                type="button"
                onClick={() => setIsEdited(false)}
                className="border-1 ml-3 select-none rounded-md bg-[var(--color-secondary)] p-1 active:border-red-600"
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
              className="m-auto mb-3 flex max-w-[500px] justify-between"
            >
              <div
                onClick={() => {
                  navigate("/details", { state: product });
                }}
                className="relative h-fit"
              >
                <img
                  className="relative h-[85px] w-[85px]"
                  src={product.pictureUrl}
                  alt="product image"
                />
                <div
                  onClick={() => removeFromCart(product._id)}
                  className="w-5.5 h-5.5 absolute bottom-2 left-1 flex items-center justify-center rounded-full bg-white"
                >
                  <Trash2 size={13} color="red" />
                </div>
              </div>

              <div className="flex w-[70%] min-w-[200px] flex-col gap-2 rounded-lg border border-[var(--color-secondary)] bg-[var(--bgColor)] p-3 text-sm font-light shadow-md">
                <span className="flex items-center justify-between border-b border-[var(--color-secondary)] pb-1">
                  <p className="font-semibold text-[var(--color-secondary)]">
                    Title:
                  </p>
                  <p className="text-[var(--color-primary-light)]">
                    {product.title}
                  </p>
                </span>

                <span className="flex items-center justify-between border-b border-[var(--color-secondary)] pb-1">
                  <p className="font-semibold text-[var(--color-secondary)]">
                    Description:
                  </p>
                  <p className="text-[var(--color-primary-light)]">
                    {product.description}
                  </p>
                </span>

                <span className="flex items-center justify-between border-b border-[var(--color-secondary)] pb-1">
                  <p className="font-semibold text-[var(--color-secondary)]">
                    avg Rate:
                  </p>
                  <p className="text-[var(--color-primary-light)]">
                    {product.averageRate.toFixed(2) ?? "N/A"}
                  </p>
                </span>

                <span className="mt-2 flex items-center justify-between">
                  <p className="text-lg font-bold text-[var(--color-primary)]">{`$${(product.price * product.amount).toFixed(2) ?? "N/A"}`}</p>

                  <span className="flex min-w-[35%] max-w-[40%] items-center justify-between gap-2">
                    <ButtonPlus product={product} add={addToCart} />
                    <p className="w-6 rounded-lg bg-[var(--color-primary-light)] text-center font-semibold text-[var(--color-secondary)] shadow-sm">
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
        <p className="m-auto rounded-2xl bg-[var(--color-primary-light)] p-2 text-center font-semibold text-[var(--color-secondary)] shadow-sm">{`Total sum $${totalSum.toFixed(2)}`}</p>
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
