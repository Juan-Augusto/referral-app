// src/components/Alert.js

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const Alert = ({ type, message, onClose }) => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  const alertStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-black",
    info: "bg-blue-500 text-white",
  };

  const darkModeStyles = {
    success: "bg-green-700 text-gray-100",
    error: "bg-red-700 text-gray-100",
    warning: "bg-yellow-700 text-gray-900",
    info: "bg-blue-700 text-gray-100",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`fixed top-10 left-0 right-0 p-4 max-w-sm mx-auto
           rounded flex justify-between items-center ${
             isDarkMode ? darkModeStyles[type] : alertStyles[type]
           }`}
        >
          <span>{message}</span>
          {onClose && (
            <button
              onClick={onClose}
              className={`ml-4 font-bold ${
                isDarkMode ? "text-gray-200" : "text-gray-900"
              }`}
            >
              &times;
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(["success", "error", "warning", "info"]).isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Alert;
