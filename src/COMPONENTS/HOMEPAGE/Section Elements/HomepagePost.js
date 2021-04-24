import { useState } from "react";
import useToDateTime from "../../../HOOKS/useToDateTime";
import { NavLink } from "react-router-dom";

const HomepagePost = ({ post }) => {
  const { title, image, content, tags, date, author, id } = post;
  const [showTitlePopup, setShowTitlePopup] = useState(false);
  const { year, month, day } = useToDateTime(date);

  return (
    <NavLink to={`/post/${id}`}>
      <div className="overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer transition duration-300 hover:shadow-xl w-full h-full">
        <div
          className="h-52 w-full bg-center bg-cover border-b-4 border-yellow-500"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="md:px-10 px-5 py-4">
          <p className="text-gray-400">
            {day}/{month}/{year} - {author}
          </p>

          <div id="blog-title-wrap" className="relative">
            <div
              onMouseEnter={() => setShowTitlePopup(true)}
              onMouseLeave={() => setShowTitlePopup(false)}
              className="font-medium text-2xl mb-3 h-8 overflow-hidden w-max max-w-full text-gray-600"
            >
              {title}
            </div>
            <div
              id="blog-popup"
              className={`${
                showTitlePopup ? "opacity-full" : "opacity-0"
              } absolute transition-all z-2 rounded-md shadow-lg px-2 top-full text-lg font-medium border-2 border-gray-100 bg-white`}
            >
              {title}
            </div>
          </div>
          <p className="text-gray-600 overflow-hidden h-48">{content}</p>
          <span className="pl-2 text-yellow-500 font-medium transition-all hover:text-yellow-600">
            ... Read More
          </span>
          <div className="bg-gray-100 h-0.5 my-3"></div>
          <div className="flex items-center">
            {tags.map((tag, index) => (
              <h3 key={index} className="text-gray-400 pr-2">
                {tag}
              </h3>
            ))}
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default HomepagePost;
