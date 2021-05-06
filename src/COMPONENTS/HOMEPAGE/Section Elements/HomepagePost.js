import useToDateTime from "../../../HOOKS/useToDateTime";
import { Link } from "react-router-dom";

const HomepagePost = ({ post }) => {
  const { title, image, content, tags, date, author, id } = post;
  const { year, month, day } = useToDateTime(date);

  return (
    <Link to={`/post/${id}`}>
      <div className="overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer transition duration-300 hover:shadow-xl w-full h-full">
        <div
          className="h-52 w-full bg-center bg-cover border-b-4 border-blue-400"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="md:px-10 px-5 py-4">
          <p className="text-gray-400">
            {day}/{month}/{year} - {author}
          </p>

          <div className="font-medium text-xl h-8 overflow-hidden w-max max-w-full text-gray-600">
            {title}
          </div>
          <p className="text-gray-600 overflow-hidden text-justify h-48">
            {content}
          </p>
          <span className="pl-2 text-blue-400 font-medium transition-all hover:text-blue-400">
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
    </Link>
  );
};

export default HomepagePost;
