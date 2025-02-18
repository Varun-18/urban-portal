import { useNavigate } from "react-router-dom";
import svg from "../assets/vite.svg";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-yellow-300">
      <div className="flex justify-between items-center py-2 mx-auto max-w-[1300px]">
        <div className="">
          <img src={svg} alt="Main logo" />
        </div>
        <div>
          <ul className="flex list-none gap-4">
            <li onClick={() => navigate("/")}>home</li>
            <li onClick={() => navigate("/login")}>login</li>
            <li onClick={() => navigate("/signup")}>signup</li>
          </ul>
        </div>
      </div>
    </header>
  );
};
