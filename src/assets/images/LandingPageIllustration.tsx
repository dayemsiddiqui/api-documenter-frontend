import "./illustration.css";
import EightImage from "./../images/hero/eight.png";
import JackImage from "./../images/hero/jack.png";
import ThreeImage from "./../images/hero/three.png";
import { motion } from "framer-motion";

const eightImageVariants = {
  initial: {
    rotate: 0,
    y: 20,
    x: -100,
    zIndex: 0,
  },
  animate: {
    rotate: 20,
    y: 20,
    x: -100,
    zIndex: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const threeImageVariants = {
  initial: {
    rotate: 0,
    y: 20,
    x: 100,
  },
  animate: {
    rotate: -20,
    y: 20,
    x: 100,
    transition: {
      duration: 0.5,
    },
  },
};

export const LandingPageIllustration = () => (
  <div className="flex">
    <motion.div
      className="w-auto h-auto p-2 bg-gray-50 rounded shadow "
      variants={threeImageVariants}
      initial="initial"
      animate="animate"
    >
      <img src={ThreeImage} />
    </motion.div>
    <motion.div className="w-auto h-auto p-2 bg-gray-50 rounded shadow z-2">
      <img src={JackImage} />
    </motion.div>

    <motion.div
      className="w-auto h-auto p-2 bg-gray-50 rounded shadow"
      variants={eightImageVariants}
      initial="initial"
      animate="animate"
    >
      <img src={EightImage} />
    </motion.div>
  </div>
);
