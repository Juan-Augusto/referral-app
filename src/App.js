import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleConfirm = () => {
    // Handle the confirmation logic here
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Referral Input */}
          <div>
            <label htmlFor="referralEmail" className="block text-gray-700">
              Which is the email of your referral?
            </label>
            <input
              type="email"
              id="referralEmail"
              name="referralEmail"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>

          {/* Textarea for Referral Description */}
          <div>
            <label
              htmlFor="referralDescription"
              className="block text-gray-700"
            >
              How do you know this person, for how long and why do you think
              they are a good fit?
            </label>
            <textarea
              id="referralDescription"
              name="referralDescription"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            Submit Referral
          </button>
        </form>

        {/* Popup */}
        <AnimatePresence>
          {showPopup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
            >
              <div className="bg-white p-4 rounded shadow-md text-center">
                <p className="mb-4">
                  I confirm I am not in the decision-making process in order for
                  you to be eligible.
                </p>
                <button
                  onClick={handleConfirm}
                  className="bg-green-500 text-white p-2 rounded"
                >
                  Confirm
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LandingPage;
