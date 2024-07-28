import React, { useState } from "react";
import { motion } from "framer-motion";

const Tooltip = ({ children, content }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative 
      inline-block group cursor-help
    "
    >
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </div>
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute right-2 px-4 py-2 bg-gray-800 text-white text-sm rounded shadow-lg z-10"
        >
          {content}
        </motion.div>
      )}
    </div>
  );
};

export default Tooltip;
