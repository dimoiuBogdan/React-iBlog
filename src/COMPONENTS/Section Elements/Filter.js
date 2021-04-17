const Filter = ({ title, id, icon, active, filters, setFilters }) => {
  const toggleFilter = () => {
    setFilters(
      filters.map((filter, index) => {
        index === id
          ? (filter.active = !filter.active)
          : (filter.active = false);
        return filter;
      })
    );
  };

  return (
    <div
      onClick={toggleFilter}
      className={`${
        active ? "active-badge" : ""
      } border-2 w-24 cursor-pointer transition-all hover:bg-yellow-500 hover:text-white hover:border-yellow-500 text-center rounded-full
     border-gray-300 text-gray-400 mb-3 mx-1 font-medium sm:text-xl`}
    >
      {title}
    </div>
  );
};

export default Filter;
