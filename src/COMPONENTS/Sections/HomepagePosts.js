import { useState, useEffect } from "react";

import HomepagePost from "../Section Elements/HomepagePost";

const HomepagePosts = ({ filteredBlogs }) => {
  const [homepagePosts, setHomepagePosts] = useState([]);

  useEffect(() => {
    setHomepagePosts(filteredBlogs);
  }, [filteredBlogs]);

  return (
    <div className="flex items-center flex-wrap lg:w-4/5 w-full justfy-evenly">
      {homepagePosts
        ? homepagePosts.map((post, index) => (
            <div
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="sm:w-1/2 w-full md:px-5 sm:px-2 px-5 mb-10 h-36rem md:h-auto"
            >
              <HomepagePost post={post} />
            </div>
          ))
        : "Loading..."}
    </div>
  );
};

export default HomepagePosts;
