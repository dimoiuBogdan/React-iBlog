import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Filter = ({ title, active, toggleFilter }) => {
  // Animation details
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
  };

  return (
    <Link
      to={title !== "All" ? `/homepage?filter=${title}` : "/homepage"}
      onClick={toggleFilter}
      className={`${
        active ? "active-badge" : ""
      } w-28 cursor-pointer transition-all relative hover:text-blue-400 py-1 border-2 border-gray-200 hover:border-blue-400 text-center rounded-full
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
    </Link>
  );
};

export default Filter;
