import { create } from "zustand";

type UserData = {
  username?: string | null;
  email?: string | null;
  isLoggedIn: boolean;
  setUserDetails: (data: {
    username: string;
    email: string;
    isLoggedIn: boolean;
  }) => void;
};

export const userStore = create<UserData>((set) => ({
  username: null,
  email: null,
  isLoggedIn: false,
  setUserDetails: ({ username, email, isLoggedIn }) =>
    set({ username, email, isLoggedIn }),
}));
