import React from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

export interface PageDialogProps {
  title: string;
}

export const PageDialog: React.FC<PageDialogProps> = ({ title, children }) => {
  const history = useHistory();
  return (
    <div className="z-10 absolute w-full top-0  h-full bg-brand-green flex justify-center">
      <motion.div
        className="z-12 shadow  bg-gray-50 max-h-xl max-w-xl w-96 rounded my-auto px-6"
        initial={{
          y: "-100vh",
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 0.25,
          type: "spring",
          stiffness: 100,
          damping: 8,
        }}
      >
        <div className="px-2 py-6 font-bold">{title}</div>
        {children}
      </motion.div>
    </div>
  );
};
