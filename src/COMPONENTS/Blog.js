import MainSection from "./Sections/MainSection.js";
import Navbar from "./Section Elements/Navbar";
import Filters from "./Sections/Filters.js";
import HomepagePosts from "./Sections/HomepagePosts";

import firebase from "firebase/app";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import "firebase/firestore";

import { useState, useEffect } from "react";

const Blog = () => {
  const firestore = firebase.firestore();
  const allBlogsRef = firestore.collection("all-blogs");
  const query = allBlogsRef.orderBy("date");

  const [currentFilter, setCurrentFilter] = useState("All");

  let [allBlogs] = useCollectionDataOnce(query, { idField: "id" });
  const [onLoadBlogs, setOnLoadBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const applyFilters = () => {
    if (onLoadBlogs)
      currentFilter === "All"
        ? setFilteredBlogs(onLoadBlogs)
        : setFilteredBlogs(
            onLoadBlogs.filter((blog) => blog.tags.includes(currentFilter))
          );
  };

  useEffect(() => {
    setOnLoadBlogs(allBlogs);
  }, [allBlogs]);

  useEffect(() => {
    applyFilters();
  }, [currentFilter, onLoadBlogs]);

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
      <div className="container mx-auto flex items-center">
        {onLoadBlogs ? (
          <HomepagePosts filteredBlogs={filteredBlogs} />
        ) : (
          <h2 className="w-full text-4xl font-medium text-yellow-500">
            Loading...
          </h2>
        )}
        {onLoadBlogs && (
          <div className="w-1/5 text-center h-full hidden lg:block bg-yellow-50">
            Sidebar
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
