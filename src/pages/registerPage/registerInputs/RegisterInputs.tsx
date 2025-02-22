import React from "react";
import { CountryType } from "../../../types/countryType";

type Props = {
  inputs: (
    | {
        name: string;
        type: string;
        options?: undefined;
      }
    | {
        name: string;
        type: string;
        options: CountryType[];
      }
  )[];
  formData: {
    imgLink: File | null;
    name: string;
    age: string;
    email: string;
    password: string;
    country: CountryType;
  };
  errorPassword: boolean;
  handleRegister: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RegisterInputs: React.FC<Props> = ({
  inputs,
  formData,
  errorPassword,
  handleRegister,
  handleFileChange,
}) => {
  return (
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
            <React.Fragment key={input.name}>
              <input
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
                className={`mb-1 p-1 rounded-md text-sm border-2 border-[var(--color-primary-light)] max-w-[200px]
                ${(input.name === "password" || input.name === "re-password") && errorPassword && "border-red-600"}`}
              />
              {errorPassword &&
                (input.name === "password" || input.name === "re-password") && (
                  <p className="text-red">Passwords do not match</p>
                )}
            </React.Fragment>
          );
        }
      })}
    </div>
  );
};
