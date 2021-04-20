import { useState, useEffect } from "react";
import { AnimateSharedLayout } from "framer-motion";

import Filter from "../Section Elements/Filter";

const Filters = ({ setCurrentFilter, currentFilter }) => {
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
      let activeFilterOnLoad = filters.filter(
        (filter) => filter.title === currentFilter
      );
      setFilters(
        filters.map((filter) => {
          filter.title === activeFilterOnLoad[0].title
            ? (filter.active = true)
            : (filter.active = false);
          return filter;
        })
      );
    }
  }, [currentFilter]);

  useEffect(() => {
    let activeFilter = filters.filter((filter) => filter.active === true);
    setCurrentFilter(activeFilter[0].title);
  }, [filters, setCurrentFilter]);

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
