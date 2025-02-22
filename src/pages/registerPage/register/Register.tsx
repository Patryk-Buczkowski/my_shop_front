import { useState } from "react";
import { countryObj, CountryType } from "../../../types/countryType";
import Button from "@mui/material/Button/Button";
import { RegisterInputs } from "../registerInputs";
import axios from "axios";

const Register: React.FC = () => {
  const inputs = [
    { name: "imgLink", type: "file" },
    {
      name: "country",
      type: "select",
      options: Object.keys(countryObj) as CountryType[],
    },
    { name: "name", type: "text" },
    { name: "age", type: "number" },
    { name: "email", type: "text" },
    { name: "password", type: "text" },
    { name: "re-password", type: "text" },
  ];
  const [formData, setFormData] = useState({
    imgLink: null as File | null,
    name: "",
    age: "",
    email: "",
    password: "",
    're-password': undefined,
    country: "PL" as CountryType,
  });
  const [errorPassword, setErrorPassword] = useState(false);

  const handleRegister = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, imgLink: file }));
    }
  };

  const handleSubmit = async () => {
    if (formData.password !== formData["re-password"]) {
      setErrorPassword(true);
      return;
    }
    const formDataToSend = new FormData();
    const backend = import.meta.env.VITE_BACKEND_URL;

    formDataToSend.append("name", formData.name);
    formDataToSend.append("age", formData.age);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("country", formData.country);

    if (formData.imgLink) {
      formDataToSend.append("imgLink", formData.imgLink);
    }

    try {
      const response = await axios.post(`${backend}/addUser`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error("Błąd przy wysyłaniu formularza:", error);
    }
  };

  return (
    <div className="p-3">
      <h1 className="text-4xl mb-2 w-35 whitespace-pre-wrap">Create Account</h1>

      <img
        className="rounded-full mb-5 w-25"
        src={
          formData.imgLink === null
            ? "./Upload_Photo.svg"
            : URL.createObjectURL(formData.imgLink)
        }
        alt="add Photo"
      />

      <RegisterInputs
        errorPassword={errorPassword}
        formData={formData}
        inputs={inputs}
        handleFileChange={handleFileChange}
        handleRegister={handleRegister}
      />

      <Button
        onClick={handleSubmit}
        sx={{ borderRadius: "100%", width: "100%" }}
        variant="contained"
        size="large"
      >
        Create Profile
      </Button>
    </div>
  );
};

export default Register;
