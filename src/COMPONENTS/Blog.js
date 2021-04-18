import MainSection from "./Sections/MainSection.js";
import Navbar from "./Section Elements/Navbar";
import Filters from "./Sections/Filters.js";
import HomepagePosts from "./Sections/HomepagePosts";

import firebase from "firebase/app";
import { useCollectionData } from "react-firebase-hooks/firestore";
import "firebase/firestore";

import { useSpring, animated } from "react-spring";
import { useState, useEffect } from "react";

const Blog = () => {
  const firestore = firebase.firestore();
  const allBlogsRef = firestore.collection("all-blogs");
  const query = allBlogsRef.orderBy("date");
  const [allBlogs] = useCollectionData(query, { idField: "id" });

  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("All");

  useEffect(() => {
    currentFilter === "All"
      ? setFilteredBlogs(allBlogs)
      : setFilteredBlogs(
          allBlogs.filter((blog) => blog.tags.includes(currentFilter))
        );
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
      <div className="container mx-auto flex items-center">
        <HomepagePosts filteredBlogs={filteredBlogs} />
        <div className="w-1/5 text-center h-full hidden lg:block bg-yellow-50">
          Sidebar
        </div>
      </div>
    </div>
  );
};

export default Blog;
