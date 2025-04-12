import { create } from "zustand";
import axios from "axios";
import { LoggedUserType } from "../types/loggedUser";

type loggedType = {
  logged: LoggedUserType;
  setLogged: (value: LoggedUserType) => void;
  fetchUserData: () => Promise<void>;
};

const BACKEND = import.meta.env.VITE_BACKEND_URL;

export const useLoggedStore = create<loggedType>((set) => ({
  logged: { _id: "", email: "", imgLink: "", name: "", role: "" },
  setLogged: (value) => set({ logged: value }),

  
  fetchUserData: async () => {
    const userId = sessionStorage.getItem("userId");
    if (!userId) {
      console.log("User ID is missing from storage.");
      return;
    }
    
    try {
      const response = await axios.get(`${BACKEND}/user/${userId}`);
      set({ logged: response.data });
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  },
}));

useLoggedStore.getState().fetchUserData();
