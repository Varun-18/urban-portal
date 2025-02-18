import { ReactNode, useEffect } from "react";
import { API } from "../utils";
import { useNavigate } from "react-router-dom";
import { userStore } from "../store";

type ChildrenProps = {
  children?: ReactNode;
};

export const AuthWrapper: React.FC<ChildrenProps> = ({ children }) => {
  console.log("inside AuthWrapper");
  const { setUserDetails, isLoggedIn } = userStore((state) => state);

  const navigate = useNavigate();

  const authenticateUser = async () => {
    try {
      const { user } = await API.get({ url: "/user" });
      console.log("🚀 ~ authenticateUser ~ user:", user);
      setUserDetails({ ...user, isLoggedIn: true });
    } catch (error) {
      console.log("🚀 ~ authenticateUser ~ error:", error);
      console.log("before navigate");
      navigate("/login");
      console.log("after navigate");
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      authenticateUser();
    } else {
      navigate("/dashboard");
    }
  }, []);

  if (isLoggedIn) {
    return <>{children}</>;
  }

  return <>loading..!</>;
};
