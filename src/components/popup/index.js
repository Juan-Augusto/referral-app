import { AnimatePresence, motion } from "framer-motion";

export const Popup = ({ showPopup, setShowPopup, description }) => {
  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
        >
          <div className="bg-white p-4 rounded shadow-md text-center">
            <p className="mb-4">{description}</p>
            <Footer setShowPopup={setShowPopup} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Footer = ({ setShowPopup }) => {
  return (
    <div className="flex justify-center align-middle">
      <button
        onClick={() => setShowPopup(false)}
        className="bg-green-500 text-white p-2 rounded"
      >
        Confirm
      </button>
    </div>
  );
};
