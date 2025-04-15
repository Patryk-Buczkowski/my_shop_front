import { create } from "zustand";
import axios from "axios";
import { LoggedUserType } from "../types/loggedUser";

type LoggedType = {
  loggedUser: LoggedUserType;
  isEdited: boolean;
  // EditedCommentId: string;
  EditedProductId: string;
  setIsEdited: (value: boolean) => void;
  setEditedProductId: (vaue: string) => void;
  // setEditedCommentId: (vaue: string) => void;
  setLoggedUser: (value: LoggedUserType) => void;
  fetchUserData: () => Promise<void>;
  fetchProductData: () => Promise<void>;
  deleteComment: (commentId: string) => Promise<true | undefined>
  
};

const BACKEND = import.meta.env.VITE_BACKEND_URL;

export const useLoggedStore = create<LoggedType>((set) => ({
  loggedUser: { _id: "", email: "", imgLink: "", name: "", role: "" },
  isEdited: false,
  // EditedCommentId: "",
  EditedProductId: "",
  setIsEdited:(value) => set({isEdited: value}),
  // setEditedCommentId: (value) => set({ EditedCommentId: value }),
  setEditedProductId: (value) => set({ EditedProductId: value }),
  setLoggedUser: (value) => set({ loggedUser: value }),

  deleteComment: async (commentId: string) => {
    try {
      const response = await axios.delete(
        `${BACKEND}/deleteComment/${commentId}`,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        return true;
      }
    } catch (error) {
      console.error("Delete Comment error", error);
    }
  },

  fetchUserData: async () => {
    const userId = sessionStorage.getItem("userId");

    if (!userId) {
      console.log("User ID is missing from storage.");
      return;
    }

    try {
      const response = await axios.get(`${BACKEND}/user/${userId}`);
      set({ loggedUser: response.data });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  },

  fetchProductData: async (): Promise<void> => {
    const { EditedProductId } = useLoggedStore.getState();
  
    if (!EditedProductId) {
      console.warn("No EditedProductId set.");
      return;
    }
  
    try {
      const response = await axios.get(`${BACKEND}/product/${EditedProductId}`, {
        withCredentials: true,
      });
      
      return response.data
      
    } catch (error) {
      console.error("Fetch product error", error);
    }
  },
  
}));

useLoggedStore.getState().fetchUserData();
