import { FormikProvider, useFormik } from "formik";
import { validationSchema } from "./validation_schema";
import { useState } from "react";
import { api } from "../../axiosConfig";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLoggedStore } from "../../zustand/useLogged";

type loginType = "idle" | "pending" | "success" | "error";
const BACKEND = import.meta.env.VITE_BACKEND_URL;

const LogIn: React.FC = () => {
  const [loginStatus, setLoginStatus] = useState<loginType>();
  const { setLogged } = useLoggedStore();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoginStatus("pending");

      try {
        const user = await api.post(`${BACKEND}/login`, {
          email: values.email,
          password: values.password,
        });
        setLoginStatus("success");
        localStorage.setItem("user", JSON.stringify(user.data));
        setLogged(true);
        formik.resetForm();
        setTimeout(() => {
          navigate("/all_categories");
        }, 1500);
      } catch (error) {
        setLoginStatus("error");
        console.error(error);
      }
    },
  });

  const isButtonDisabled =
    !formik.dirty || !formik.isValid || formik.isSubmitting;

  return (
    <FormikProvider value={formik}>
      <div className="container">
        <form className="max-w-80" onSubmit={formik.handleSubmit}>
          <h2>Log in</h2>

          {loginStatus === "success" && (
            <p className="text-green-300">You have successfully logged in!</p>
          )}

          {loginStatus === "error" && (
            <p className="text-red-300">
              Something went wrong. Please try again.
            </p>
          )}

          <div className="container max-w-65 flex flex-col">
            <label className="mb-2 flex justify-between">
              Email:
              <input
                className="border-1 p-1 border-amber-400 rounded-lg ml-1"
                type="email"
                name="email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
                aria-disabled={formik.isSubmitting}
              />
            </label>

            <label className="mb-2 flex justify-between">
              Password:
              <input
                className="border-1 border-amber-400 rounded-lg ml-1 p-1"
                type="password"
                name="password"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
                aria-disabled={formik.isSubmitting}
              />
            </label>
          </div>

          <Button
            type="submit"
            sx={{ borderRadius: "100%", width: "100%" }}
            variant="contained"
            size="large"
            disabled={isButtonDisabled}
            aria-disabled={isButtonDisabled}
            tabIndex={isButtonDisabled ? -1 : 0}
            title={
              isButtonDisabled
                ? "Fill out all required fields first."
                : undefined
            }
          >
            Log in
          </Button>
        </form>
      </div>
    </FormikProvider>
  );
};

export default LogIn;
