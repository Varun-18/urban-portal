import { useEffect, useState } from "react";
import { API } from "../utils";
import { UserLogin } from "../types";
import { useNavigate } from "react-router-dom";
import { userStore } from "../store";

export const Login = () => {
  const navigate = useNavigate();
  const setUserDetails = userStore((state) => state.setUserDetails);
  const [formData, setFormData] = useState<UserLogin>({
    email: "",
    password: "",
  });

  const isAlreadyLoggedIn = async () => {
    try {
      const { user } = await API.get({ url: "/user" });
      setUserDetails({
        username: user.name,
        email: user.email,
        isLoggedIn: true,
      });
      console.log("🚀 ~ isAlreadyLoggedIn ~ user:", user);
      navigate("/dashboard");
    } catch (error) {
      console.log("🚀 ~ isAlreadyLoggedIn ~ error:", error);
    }
  };

  useEffect(() => {
    isAlreadyLoggedIn();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await API.post({ url: "/user/login ", body: formData });
      const { user } = await API.get({ url: "user" });
      setUserDetails({
        username: user.name,
        email: user.email,
        isLoggedIn: true,
      });
      navigate("/dashboard");
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} type="submit">
          Login
        </button>
      </form>
    </>
  );
};
