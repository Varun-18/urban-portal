import { useNavigate } from "react-router-dom";
import logo from "../assets/vite.svg";
import userImage from "../assets/user.svg";
import { userStore } from "../store";

export const Header = () => {
  const username = userStore((state) => state.name);
  const navigate = useNavigate();

  return (
    <header className="bg-[#FFFFFF] shadow-sm mx-auto px-8 fixed z-50 w-full">
      <div className="flex justify-between items-center py-4">
        <div
          onClick={() => navigate("/")}
          className="flex justify-center items-center gap-3"
        >
          <img src={logo} alt="Main logo" />
          <span className="ml-3 text-xl font-medium">
            Urban Essentials Admin Panel
          </span>
        </div>
        <div>
          <div className="flex list-none gap-4 capitalize">
            <img src={userImage} alt="Admin user placeholder image" />
            {username}
          </div>
        </div>
      </div>
    </header>
  );
};
