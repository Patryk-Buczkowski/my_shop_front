import { countryObj, CountryType } from "../types/countryType";

export const regsterFormInputs = [
    { name: "imgLink", type: "file" },
    {
      name: "country",
      type: "select",
      options: Object.keys(countryObj) as CountryType[],
    },
    { name: "name", type: "text" },
    { name: "age", type: "number" },
    { name: "email", type: "text" },
    { name: "password", type: "password" },
    { name: "re-password", type: "password" },
  ];