import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 8px rgb(34, 34, 34)",
    transition: {
      duration: 0.3,
      yoyo: Infinity, // yoyo makes the animation repeat
    },
  },
  tap: {
    scale: 0.9,
  },
};
export const Button = ({ children, onClick, styleDetails = "", type }) => {
  return (
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      className={"flex justify-center items-center rounded " + styleDetails}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
