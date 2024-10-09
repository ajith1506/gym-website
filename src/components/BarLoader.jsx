import { motion } from "framer-motion";
import "./BarLoader.css"; // Import external CSS

const Color = () => {
  return (
    <div className="full-screen" id="bar-loader">
      <BarLoader />
    </div>
  );
};

const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
};

const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="bar-loader-container"
    >
      <motion.div variants={variants} className="bar" />
      <motion.div variants={variants} className="bar" />
      <motion.div variants={variants} className="bar" />
      <motion.div variants={variants} className="bar" />
      <motion.div variants={variants} className="bar" />
    </motion.div>
  );
};

export default Color;
