import { motion } from "framer-motion";

const Filter = ({ title, active, toggleFilter }) => {
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
  };

  return (
    <div
      onClick={toggleFilter}
      className={`${
        active ? "active-badge" : ""
      } w-28 cursor-pointer transition-all relative hover:text-yellow-500 py-1 border-2 border-gray-200 hover:border-yellow-500 text-center rounded-full
      text-gray-400 mb-3 mx-1 font-medium sm:text-xl`}
    >
      {active && (
        <motion.div
          layoutId="outline"
          initial={false}
          className="outline"
          transition={spring}
        />
      )}
      {title}
    </div>
  );
};

export default Filter;
