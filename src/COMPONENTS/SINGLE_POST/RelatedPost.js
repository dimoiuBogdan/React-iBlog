const RelatedPost = ({ blog }) => {
  return (
    <div className="shadow-lg mr-8 rounded-md mb-6 overflow-hidden w-96 cursor-pointer">
      <div
        className="h-52 w-full bg-cover bg-center border-b-2 border-yellow-500"
        style={{ backgroundImage: `url(${blog.image})` }}
      ></div>
      <div className="px-3">
        <h2 className="text-xl my-3 font-medium text-center overflow-hidden">
          {blog.title}
        </h2>
        <p className="text-lg h-36 overflow-hidden text-gray-500">
          {blog.content}
        </p>
        <span className="text-yellow-500 font-medium transition-all hover:text-yellow-600 text-lg">
          ... Read More
        </span>
        <div className="flex items-center border-t-2 border-gray-100 mt-1">
          {blog.tags.map((tag, index) => (
            <p className="text-gray-400 text-lg pr-2 py-1" key={index}>
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedPost;
// 76
