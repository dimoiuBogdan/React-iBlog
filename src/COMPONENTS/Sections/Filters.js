import { useState } from "react";
import Filter from "../Section Elements/Filter";

const Filters = () => {
  const [filters, setFilters] = useState([
    {
      title: "All",
      active: true,
    },
    {
      title: "Coding",
      active: false,
    },
    {
      title: "Crypto",
      active: false,
    },
    {
      title: "Design",
      active: false,
    },
    {
      title: "Stocks",
      active: false,
    },
    {
      title: "News",
      active: false,
    },
  ]);

  return (
    <div className="flex items-center flex-wrap container justify-evenly sm:my-10 my-5 mx-auto sm:px-10vw px-0">
      {filters.map((filter, index) => (
        <Filter
          title={filter.title}
          active={filter.active}
          icon={filter.icon}
          filters={filters}
          setFilters={setFilters}
          key={index}
          id={index}
        />
      ))}
    </div>
  );
};

export default Filters;
