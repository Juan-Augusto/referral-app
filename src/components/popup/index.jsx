import React from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

export const Popup = ({ showPopup, setShowPopup, description }) => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
        >
          <div
            className={`p-4 rounded shadow-md text-center ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
          >
            <p className="mb-4">{description}</p>
            <Footer setShowPopup={setShowPopup} isDarkMode={isDarkMode} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Footer = ({ setShowPopup, isDarkMode }) => {
  return (
    <div className="flex justify-center align-middle">
      <button
        onClick={() => setShowPopup(false)}
        className={`p-2 rounded text-white ${
          isDarkMode ? "bg-green-700 " : "bg-green-500"
        }`}
      >
        Confirm
      </button>
    </div>
  );
};
