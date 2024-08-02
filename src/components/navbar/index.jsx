import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toggleDarkModeAction } from "../../store/actions/darkMode.actions";
import { useSelector } from "react-redux";
import { Button } from "../buttons";
import Tooltip from "../tooltip";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <nav className="bg-gray-200 dark:bg-gray-800 p-4 flex items-center justify-between">
      <ul className="flex space-x-4">
        <li>
          <Link to="/home" className="dark:text-white text-slate-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="/docs" className="dark:text-white text-slate-600">
            Docs
          </Link>
        </li>
      </ul>
      <div className="flex space-x-1">
        <SignOut />
        <DarkModeToggle
          isDarkMode={isDarkMode}
          toggleDarkMode={() => {
            toggleDarkModeAction(!isDarkMode);
          }}
        />
      </div>
    </nav>
  );
};

export default NavBar;

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <Tooltip content={isDarkMode ? "Light mode" : "Dark mode"}>
      <motion.button
        onClick={toggleDarkMode}
        className={`p-2 rounded-full ${
          isDarkMode ? "bg-yellow-400" : "bg-gray-800"
        } flex items-center justify-center`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isDarkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m8.364-8.364h-1M4.636 12H3.636M18.364 5.636l-.707-.707M6.343 18.364l-.707-.707M18.364 18.364l-.707.707M6.343 5.636l-.707.707M12 5a7 7 0 100 14 7 7 0 000-14z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m8.364-8.364h-1M4.636 12H3.636M18.364 5.636l-.707-.707M6.343 18.364l-.707-.707M18.364 18.364l-.707.707M6.343 5.636l-.707.707M12 5a7 7 0 100 14 7 7 0 000-14z"
            />
          </svg>
        )}
      </motion.button>
    </Tooltip>
  );
};

const SignOut = () => {
  const { logout } = useAuth0();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await logout({
      returnTo:
        process.env.REACT_APP_LOGOUT_REDIRECT_URI || window.location.origin,
    });
    navigate("/");
  };

  return (
    <Tooltip content="Sign out">
      <Button
        onClick={async () => await handleSignOut()}
        styleDetails="p-2 rounded-full bg-red-500 text-white dark:bg-red-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path d="M13 3h-2v10h2V3zM12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22c-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" />
        </svg>
      </Button>
    </Tooltip>
  );
};
