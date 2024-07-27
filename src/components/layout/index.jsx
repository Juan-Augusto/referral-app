import { useSelector } from "react-redux";
import NavBar from "../navbar";

export const Layout = ({ children }) => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-gray-900 " : "bg-gray-100"}`}
    >
      <NavBar />
      {children}
    </div>
  );
};
