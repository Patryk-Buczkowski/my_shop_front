import { useState } from "react";
import { countryObj, CountryType } from "../../types/countryType";
import Button from "@mui/material/Button/Button";

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
  ];
  const [formData, setFormData] = useState({
    imgLink: null as File | null,
    name: "",
    age: "",
    email: "",
    password: "",
    country: "PL" as CountryType,
  });

  const handleRegister = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Pobieramy pierwszy wybrany plik
    if (file) {
      setFormData((prev) => ({ ...prev, imgLink: file }));
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

      <div className="flex mb-2 flex-col">
        {inputs.map((input) => {
          if (input.type === "select") {
            return (
              <select
                key={input.name}
                name={input.name}
                value={formData.country || "PL"}
                onChange={handleRegister}
                className="mb-1 mr-1 p-1 rounded-md text-sm border-2 border-[var(--color-primary-light)] max-w-[200px]"
              >
                {input.options &&
                  input.options.map((option) => (
                    <option
                      className="bg-[var(--color-primary-light)] text-[var(--color-secondary)]"
                      key={option}
                      value={option}
                    >
                      {option}
                    </option>
                  ))}
              </select>
            );
          } else {
            return (
              <input
                key={input.name}
                placeholder={input.name}
                onChange={
                  input.type === "file" ? handleFileChange : handleRegister
                }
                value={
                  input.type === "file"
                    ? undefined
                    : (formData[input.name as keyof typeof formData] as
                        | string
                        | number
                        | readonly string[]
                        | undefined)
                }
                type={input.type}
                min={input.type === "number" ? 18 : undefined}
                max={input.type === "number" ? 120 : undefined}
                name={input.name}
                accept={input.type === "file" ? "image/*" : undefined}
                className="mb-1 p-1 rounded-md text-sm border-2 border-[var(--color-primary-light)] max-w-[200px]"
              />
            );
          }
        })}
      </div>

      <Button
          sx={{ borderRadius: "100%", width: "100%" }}
          variant="contained"
          size="large"
        >
          Create
        </Button>
    </div>
  );
};

export default Register;
