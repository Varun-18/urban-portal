import { useEffect, useState } from "react";
import { API } from "../utils";
import { UserLogin } from "../types";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<UserLogin>({
    email: "",
    password: "",
  });

  const isAlreadyLoggedIn = async () => {
    try {
      const data = await API.get({ url: "/user" });
      console.log("🚀 ~ isAlreadyLoggedIn ~ data:", data);
      navigate("/dashboard");
    } catch (error) {
      console.log("🚀 ~ isAlreadyLoggedIn ~ error:", error);
    }
  };

  useEffect(() => {
    isAlreadyLoggedIn();
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await API.post({ url: "/user/login ", body: formData });
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
