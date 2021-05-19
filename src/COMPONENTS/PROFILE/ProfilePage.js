import { useEffect, useState } from "react";
import Navbar from "../HOMEPAGE/Section Elements/Navbar";

import HomepagePost from "../HOMEPAGE/Section Elements/HomepagePost";

import firebase from "firebase/app";
import "firebase/firestore";

const ProfilePage = ({ user, allBlogs }) => {
  const [myPosts, setMyPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState("myPosts");

  // This is getMyPosts() function but for some reason it does not work if I use it as a function inside useEffect(). Will have to research more this "return"
  // thing in useEffect()
  useEffect(() => {
    let isMounted = true;
    const db = firebase.firestore();
    db.collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        isMounted && setMyPosts(doc.data().myPosts);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <Navbar solid />
      {allBlogs && (
        <div className="w-full min-h-screen pt-14 bg-blue-50 bg-opacity-50 flex items-center justify-center">
          <div className="overflow-hidden container flex p-2 w-full shadow-md sm:flex-row flex-col rounded-sm bg-blue-50">
            <div className="lg:w-1/4 sm:w-1/2 font-medium text-lg bg-blue-50 border-r-2 border-blue-100 text-gray-600 flex flex-col items-center justify-center">
              <img
                src={user.photoURL}
                alt="profile"
                className="object-cover rounded-full mb-3 h-26"
              />
              <h3>Name: {user.displayName}</h3>
              <a className="text-center" href={`mailto:${user.email}`}>
                Email: {user.email}
              </a>
              <a href={`tel:${user.phoneNumber}`}>
                Phone: {user.phoneNumber || "-"}
              </a>
            </div>
            <div className="sm:w-3/4 sm:pl-2 w-full">
              <div className="text-center text-2xl font-medium flex justify-center text-gray-600 my-4">
                <h3
                  onClick={() => setCurrentPage("myPosts")}
                  className={`${
                    currentPage === "myPosts" ? "text-blue-500" : ""
                  } px-3 cursor-pointer transition-all hover:text-blue-500`}
                >
                  My Posts
                </h3>
              </div>
              <div className="flex flex-wrap h-36rem overflow-y-scroll">
                {myPosts.length > 0
                  ? myPosts.map((myPost) => (
                      <HomepagePost profile post={myPost} key={myPost.id} />
                    ))
                  : "You did not post anything yet..."}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
