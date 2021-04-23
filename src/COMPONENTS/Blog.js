// Router & React
import { useLocation } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
// Firebase
import firebase from "firebase/app";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import "firebase/firestore";
// Components
const Navbar = lazy(() => import("./Section Elements/Navbar"));
const Filters = lazy(() => import("./Sections/Filters.js"));
const HomepagePosts = lazy(() => import("./Sections/HomepagePosts"));
const MainSection = lazy(() => import("./Sections/MainSection.js"));

const Blog = ({ user, rememberAccoutDetails }) => {
  const firestore = firebase.firestore();
  const allBlogsRef = firestore.collection("all-blogs");
  const query = allBlogsRef.orderBy("date");
  let [allBlogs] = useCollectionDataOnce(query, { idField: "id" });

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
    let localStorageUserData;
    if (rememberAccoutDetails) {
      localStorageUserData = localStorage.getItem("user");
      if (!localStorageUserData)
        localStorage.setItem("user", JSON.stringify(user));
    }
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
      <Suspense fallback="Loading Content...">
        <Filters
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
        />
        <div className="container mx-auto flex items-center">
          {filteredBlogs ? (
            <HomepagePosts filteredBlogs={filteredBlogs} />
          ) : (
            <h2 className="w-full text-4xl font-medium text-yellow-500">
              Loading...
            </h2>
          )}
          {filteredBlogs && (
            <div className="w-1/5 text-center h-full hidden lg:block bg-yellow-50">
              Sidebar
            </div>
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default Blog;
