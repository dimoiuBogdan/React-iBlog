const RelatedPost = ({ blog }) => {
  return (
    <div className="shadow-lg mr-8 p-2 rounded-md mb-6">
      <h2>{blog.title}</h2>
      {blog.tags.map((tag, index) => (
        <p className="text-red-400" key={index}>
          {tag}
        </p>
      ))}
    </div>
  );
};

export default RelatedPost;
