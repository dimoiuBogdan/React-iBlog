// Router & React
import { useLocation } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";

// Components
const Navbar = lazy(() => import("./HOMEPAGE/Section Elements/Navbar"));
const Filters = lazy(() => import("./HOMEPAGE/Sections/Filters.js"));
const HomepagePosts = lazy(() => import("./HOMEPAGE/Sections/HomepagePosts"));
const MainSection = lazy(() => import("./HOMEPAGE/Sections/MainSection.js"));

const Blog = ({ user, allBlogs }) => {
  const [currentFilter, setCurrentFilter] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const applyFilters = () => {
    if (allBlogs)
      currentFilter === "All"
        ? setFilteredBlogs(allBlogs)
        : setFilteredBlogs(
            allBlogs.filter((blog) => blog.tags.includes(currentFilter))
          );
  };

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const urlQuery = useQuery();

  const getQueryFilter = () => {
    // Get URL query filter value
    const queryFilter = urlQuery.get("filter");
    // Set it as currentFilter
    queryFilter ? setCurrentFilter(queryFilter) : setCurrentFilter("All");
  };

  useEffect(() => {
    // Get user from storage if logged in once
    const localStorageUserData = localStorage.getItem("user");
    if (!localStorageUserData)
      localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    applyFilters();
    getQueryFilter();
  }, [currentFilter, allBlogs]);

  return (
    <div
      id="background"
      className="w-full min-h-screen bg-blue-50 bg-opacity-75"
    >
      <Navbar />
      <MainSection />
      <Filters
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
      <Suspense fallback="Loading Content...">
        <div className="container mx-auto flex items-center">
          {filteredBlogs && <HomepagePosts filteredBlogs={filteredBlogs} />}
          {filteredBlogs && (
            <div className="w-1/5 text-center h-full hidden lg:block bg-purple-50">
              Sidebar
            </div>
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default Blog;
