import { create } from "zustand";

type UserData = {
  name?: string | null;
  email?: string | null;
  isLoggedIn: boolean;
  setUserDetails: (data: {
    name: string;
    email: string;
    isLoggedIn: boolean;
  }) => void;
};

export const userStore = create<UserData>((set) => ({
  name: null,
  email: null,
  isLoggedIn: false,
  setUserDetails: ({ name, email, isLoggedIn }) =>
    set({ name, email, isLoggedIn }),
}));
