import React from "react";
import { useHistory } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const CreateRoom: React.FC<{ open: boolean; close: () => void }> = ({
  open,
  close,
}) => {
  const history = useHistory();
  if (!open) {
    return <></>;
  }
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
        <div className="px-2 py-6 font-bold">New Room</div>
        <div>
          <form>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              placeholder="Room Name"
            />
            <input
              className="appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none"
              placeholder="Your Name"
            />
          </form>
        </div>
        <div className="flex space-x-3 justify-end ">
          <button
            onClick={() => history.push("/app")}
            className="py-2 my-6 px-3 w-auto right-0 text-sm text-white rounded-md bg-brand-green shadow-md block md:inline-block active:bg-brand-green-light hover:bg-brand-green-dark focus:outline-none focus:shadow-outline-green"
          >
            Create
          </button>
          <button
            onClick={close}
            className="py-2  my-6 px-3 w-auto right-0 text-sm text-white rounded-md bg-brand-red shadow-md block md:inline-block active:bg-red-400 hover:bg-red-500 focus:outline-none focus:shadow-outline-red"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
};
