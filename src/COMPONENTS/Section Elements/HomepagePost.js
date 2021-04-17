const HomepagePost = ({ post }) => {
  const { title, image, content, tags, date, author } = post;
  return (
    <div className="sm:w-1/2 w-full md:px-5 sm:px-2 px-5 mb-10 h-33rem md:h-auto">
      <div className="overflow-hidden rounded-lg shadow-lg cursor-pointer transition duration-300 transform hover:scale-105 hover:shadow-xl w-full h-full">
        <div
          className="h-52 w-full bg-center bg-cover "
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="md:px-10 px-5 py-4">
          <p className="text-gray-400">
            {date} - {author}
          </p>
          <h2 className="font-medium text-2xl mb-3 text-gray-600">{title}</h2>
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
    </div>
  );
};

export default HomepagePost;
