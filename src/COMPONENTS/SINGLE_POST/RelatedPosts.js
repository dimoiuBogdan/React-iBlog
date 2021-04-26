import { useEffect, useState } from "react";
import RelatedPost from "./RelatedPost";

const RelatedPosts = ({ allBlogs, postTags }) => {
  const [relatedBlogsByTags, setRelatedBlogsByTags] = useState([]);

  const filterBlogsByTags = async () => {
    if (allBlogs) {
      const filteredBlogs = await allBlogs.filter((blog) =>
        blog.tags.includes(...postTags)
      );
      setRelatedBlogsByTags(filteredBlogs);
    }
  };

  useEffect(() => {
    filterBlogsByTags();
  }, []);

  return (
    <div>
      <h2 className="text-2xl mb-3">Related posts</h2>
      <div className="flex overflow-x-hidden">
        {relatedBlogsByTags.map((blog, index) => (
          <RelatedPost key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
