import { useRouteMatch } from "react-router-dom";
import { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

import useDateTime from "../../HOOKS/useToDateTime";
import Navbar from "../HOMEPAGE/Section Elements/Navbar";
import RelatedPosts from "./RelatedPosts";

const SinglePost = ({ allBlogs }) => {
  const db = firebase.firestore();
  const postID = useRouteMatch("/post/:id").params.id;
  const [postDetails, setPostDetails] = useState({});
  const [displayContent, setDisplayContent] = useState(false);
  const [readingTime, setReadingTime] = useState(5);
  const { year, month, day } = useDateTime(postDetails.date);
  const averageWordsPerMinute = 250;

  // use postID as a param so that everytime we click on a post, it will use that ID
  // ( figured it out after working on related posts where blog.id was the actual post and postID was the post we clicked on )
  const getPostData = (postID) => {
    db.collection("all-blogs")
      .doc(postID)
      .get()
      .then((snapshot) => {
        // setPostDetails is async so I used this syntax
        setPostDetails(() => {
          setReadingTime(
            Math.ceil(
              snapshot.data().content.split(" ").length / averageWordsPerMinute
            )
          );
          return snapshot.data();
        });
        setDisplayContent(true);
      });
  };

  useEffect(() => {
    getPostData(postID);
  }, [postID]);

  return (
    <div>
      {displayContent ? (
        <div>
          <Navbar />
          <div
            className="w-full bg-center bg-cover relative h-60vh flex flex-col items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${postDetails.image})`,
            }}
          >
            <h2 className="sm:text-5xl sm:font-semibold text-3xl text-center font-medium text-white mb-4">
              {postDetails.title}
            </h2>
            <div className="flex items-center justify-evenly">
              {postDetails.tags.map((tag, index) => (
                <p
                  key={index}
                  className="text-yellow-500 text-2xl font-medium mx-2"
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <div className="container mx-auto my-4 md:my-8 lg:my-12 text-gray-500 text-xl leading-10 text-justify flex items-center justify-evenly">
            <div className="w-4/5 lg:px-10vw">
              <div className="w-full justify-evenly flex-col md:flex-row lg:text-xl flex mx-0 text-lg text-gray-900 mb-8">
                <h2>
                  Posted By :{" "}
                  <span className="text-yellow-500">{postDetails.author}</span>
                </h2>
                <h2>
                  Reading Time :{" "}
                  <span className="text-yellow-500">{readingTime}</span> minutes
                </h2>
                <h2>
                  Date :{" "}
                  <span className="text-yellow-500">
                    {day}/{month}/{year}
                  </span>
                </h2>
              </div>
              <h2 className="text-center text-3xl font-medium text-gray-700 mb-3">
                {postDetails.subtitle || "Subtitle"}
              </h2>
              <p className="mb-14">{postDetails.content}</p>
              <RelatedPosts
                getPostData={getPostData}
                allBlogs={allBlogs}
                postTags={postDetails.tags}
                postID={postID}
              />
            </div>
            <div className="w-1/5 text-center h-full hidden lg:block bg-yellow-500">
              Sidebar
            </div>
          </div>
        </div>
      ) : (
        "Loading Post..."
      )}
    </div>
  );
};

export default SinglePost;
