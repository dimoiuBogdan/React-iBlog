import { useEffect, useState } from "react";
import RelatedPost from "./RelatedPost";
import { Link } from "react-router-dom";

const RelatedPosts = ({ allBlogs, postTags, postID }) => {
  const [relatedBlogsByTags, setRelatedBlogsByTags] = useState([]);

  const filterBlogsByTags = async (postID) => {
    if (allBlogs) {
      // Filter in allBlogs and returns every blog that contains at least one (...postTags) tag of the current post
      const filteredBlogs = await allBlogs.filter(
        // blog.id !== postID to remove the current post from related posts
        (blog) => blog.tags.includes(...postTags) && blog.id !== postID
      );
      setRelatedBlogsByTags(filteredBlogs);
    }
  };

  useEffect(() => {
    filterBlogsByTags(postID);
  }, [postID]);

  return (
    <div>
      <h2 className="text-2xl mb-3">Related posts</h2>
      <div className="flex overflow-x-scroll">
        {relatedBlogsByTags.map((blog, index) => (
          <Link
            key={index}
            to={blog.id}
            onClick={() => {
              window.scrollTo({ top: 0 });
            }}
          >
            <RelatedPost key={index} blog={blog} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
