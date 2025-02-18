import { ReactNode, useEffect, useState } from "react";
import { API } from "../utils";
import { useNavigate } from "react-router-dom";
import { userStore } from "../store";

type ChildrenProps = {
  children?: ReactNode;
};

export const AuthWrapper: React.FC<ChildrenProps> = ({ children }) => {
  const { setUserDetails, isLoggedIn } = userStore((state) => state);

  const navigate = useNavigate();

  const authenticateUser = async () => {
    try {
      const { data } = await API.get({ url: "/user" });
      console.log("🚀 ~ authenticateUser ~ data:", data);
      setUserDetails(data.user);
      // setIsLogin(true);
    } catch (error) {
      console.log("🚀 ~ authenticateUser ~ error:", error);
      navigate("/login");
    }
  };

  if (!isLoggedIn) {
    authenticateUser();
  }
  // useEffect(() => {
  // }, []);

  if (isLoggedIn) {
    return <>{children}</>;
  }

  return <>loading..!</>;
};
