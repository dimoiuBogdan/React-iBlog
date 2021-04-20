import { useState, useEffect } from "react";
import { AnimateSharedLayout } from "framer-motion";

import Filter from "../Section Elements/Filter";

const Filters = ({
  setCurrentFilter,
  currentFilter /* currentFilter is already set */,
}) => {
  // All are false because the active one is already set from query param "filter"
  const [filters, setFilters] = useState([
    {
      title: "All",
      active: false,
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
      title: "Stocks",
      active: false,
    },
    {
      title: "Tech",
      active: false,
    },
    {
      title: "Resources",
      active: false,
    },
  ]);

  useEffect(() => {
    if (currentFilter) {
      setFilters(
        // Activate the current filter from the filters array
        filters.map((filter) => {
          filter.title === currentFilter
            ? (filter.active = true)
            : (filter.active = false);
          return filter;
        })
      );
    }
  }, [currentFilter]);

  // Everytime a filter changes, find it (activeFilter) and set it as the currentFilter
  // This useEffect is needed because at first, no filter is active and so, we must activate one first using the use effect at line ~38
  useEffect(() => {
    let activeFilter = filters.filter((filter) => filter.active === true);
    if (activeFilter[0]) setCurrentFilter(activeFilter[0].title);
  }, [filters, setCurrentFilter]);

  // Upon clicking a filter, deactivates every other one
  const toggleFilter = (id) => {
    setFilters(
      filters.map((filter, index) => {
        index === id ? (filter.active = true) : (filter.active = false);
        return filter;
      })
    );
  };

  return (
    <AnimateSharedLayout>
      <div className="flex items-center flex-wrap container justify-evenly sm:my-10 my-5 mx-auto sm:px-10vw px-0">
        {filters.map((filter, index) => (
          <Filter
            title={filter.title}
            active={filter.active}
            toggleFilter={() => toggleFilter(index)}
            key={index}
          />
        ))}
      </div>
    </AnimateSharedLayout>
  );
};

export default Filters;
