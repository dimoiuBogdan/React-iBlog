import HomepagePost from "../Section Elements/HomepagePost";

const HomepagePosts = ({ filteredBlogs }) => {
  return (
    <div className="flex items-center flex-wrap lg:w-4/5 w-full justfy-evenly">
      {filteredBlogs &&
        filteredBlogs.map((post, index) => (
          <div
            key={index}
            className="sm:w-1/2 w-full md:px-5 sm:px-2 px-5 mb-10 h-36rem md:h-auto"
          >
            <HomepagePost post={post} />
          </div>
        ))}
    </div>
  );
};

export default HomepagePosts;
