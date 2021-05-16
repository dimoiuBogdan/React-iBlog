import { useEffect, useState } from "react";
import Navbar from "../HOMEPAGE/Section Elements/Navbar";

const ProfilePage = ({ user, allBlogs }) => {
  const [myPosts, setMyPosts] = useState([]);
  const [likedPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState("myPosts");

  const getMyPosts = () => {
    const myID = user.uid;
    setMyPosts(allBlogs.filter((blog) => blog.authorID === myID));
  };

  useEffect(() => {
    getMyPosts();
  }, []);

  return (
    <div>
      <Navbar solid />
      {allBlogs && (
        <div className="w-full min-h-screen bg-blue-50 bg-opacity-50 flex items-center justify-center">
          <div className="overflow-hidden container flex p-2 md:w-3/4 w-full shadow-md bg-blue-50 rounded-sm">
            <div className="w-1/4 bg-blue-50 border-r-2 border-blue-100 text-gray-600 flex flex-col items-center justify-center">
              <img
                src={user.photoURL}
                alt="profile"
                className="object-cover rounded-full mb-3 h-26"
              />
              <h3>Name: {user.displayName}</h3>
              <a href={`mailto:${user.email}`}>Email: {user.email}</a>
              <a href={`tel:${user.phoneNumber}`}>
                Phone: {user.phoneNumber || "-"}
              </a>
            </div>
            <div className="w-3/4 pl-2">
              <div className="text-center text-lg font-medium flex justify-center text-gray-600 mb-3">
                <h3
                  onClick={() => setCurrentPage("likedPosts")}
                  className={`${
                    currentPage === "likedPosts" ? "text-blue-500" : ""
                  } px-3 cursor-pointer transition-all hover:text-blue-500 border-r-2 border-blue-100`}
                >
                  Liked Posts
                </h3>
                <h3
                  onClick={() => setCurrentPage("myPosts")}
                  className={`${
                    currentPage === "myPosts" ? "text-blue-500" : ""
                  } px-3 cursor-pointer transition-all hover:text-blue-500`}
                >
                  My Posts
                </h3>
              </div>
              <div>
                {currentPage === "myPosts"
                  ? myPosts.map((myPost) => <myPostProfile />) ||
                    "You did not post anything yet..."
                  : likedPosts.map((likedPost) => <likedPostProfile />) ||
                    "You did not like any post yet..."}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
