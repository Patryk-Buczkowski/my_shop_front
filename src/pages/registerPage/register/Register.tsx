import { useState } from "react";
import { CountryType } from "../../../types/countryType";
import Button from "@mui/material/Button/Button";
import { RegisterInputs } from "../registerInputs";
import { useNavigate } from "react-router-dom";
import { regsterFormInputs } from "../../../data/registerFormInputs";
import { api } from "../../../axiosConfig";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    imgLink: null as File | null,
    name: "",
    age: "",
    email: "",
    password: "",
    "re-password": "",
    country: "PL" as CountryType,
  });
  const [errorPassword, setErrorPassword] = useState(false);
  const navigate = useNavigate();

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
      const response = await api.post(`${backend}/addUser`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);

      if (response.status === 201) {
        navigate('/registrationResult?success=true')
      } 
    } catch (error) {
      console.error("Błąd przy wysyłaniu formularza:", error);
      navigate('/registrationResult?success=false')
    }
  };

  const handleBlur = () => {
    if (formData.password !== formData["re-password"]) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
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

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <RegisterInputs
          handleBlur={handleBlur}
          errorPassword={errorPassword}
          formData={formData}
          inputs={regsterFormInputs}
          handleFileChange={handleFileChange}
          handleRegister={handleRegister}
        />

        <Button
          sx={{ borderRadius: "100%", width: "100%", marginBottom: '20px' }}
          variant="contained"
          size="large"
          type="submit"
        >
          Create Profile
        </Button>
      </form>
    </div>
  );
};

export default Register;
