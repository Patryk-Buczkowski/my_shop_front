import { create } from "zustand";

type loggedType = {
  logged: boolean;
  setLogged: (value: boolean) => void;
};

export const useLoggedStore = create<loggedType>((set) => ({
  logged: JSON.parse(localStorage.getItem("logged") || "false"),
  setLogged: (value) => {
    localStorage.setItem("logged", JSON.stringify(value));
    set({ logged: value });
  },
}));
