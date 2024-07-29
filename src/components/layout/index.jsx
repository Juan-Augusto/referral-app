import { useSelector } from "react-redux";
import NavBar from "../navbar";

export const Layout = ({ children }) => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const path = window.location.pathname;

  return (
    <div
      className={`min-h-screen ${
        isDarkMode && path !== "/docs" ? "bg-gray-900 " : "bg-gray-100"
      }`}
    >
      <NavBar />
      {children}
    </div>
  );
};
