import HomepagePost from "../Section Elements/HomepagePost";

const HomepagePosts = ({ filteredBlogs }) => {
  return (
    <div className="flex items-center flex-wrap w-full">
      {filteredBlogs &&
        filteredBlogs.map((post, index) => (
          <div
            key={index}
            className="lg:w-2/6 md:w-1/2 w-full md:px-5 sm:px-2 px-5 h-36rem md:h-auto"
          >
            <HomepagePost post={post} />
          </div>
        ))}
    </div>
  );
};

export default HomepagePosts;
