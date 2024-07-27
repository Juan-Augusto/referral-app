// src/components/NavBar.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toggleDarkModeAction } from "../../store/actions/darkMode.actions";
import { useSelector } from "react-redux";

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
          <Link to="/" className="dark:text-white text-slate-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="/auth" className="dark:text-white text-slate-600">
            Auth
          </Link>
        </li>
      </ul>
      <DarkModeToggle
        isDarkMode={isDarkMode}
        toggleDarkMode={() => {
          toggleDarkModeAction(!isDarkMode);
        }}
      />
    </nav>
  );
};

export default NavBar;

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
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
  );
};
