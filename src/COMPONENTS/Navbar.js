import SignOut from "./SignOut";

const Navbar = () => {
  return (
    <div className="flex container mx-auto pt-6 items-center justify-between absolute left-0 right-0 text-white">
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <div id="hamburger" className="w-10 cursor-pointer lg:hidden">
          <div className="h-1 transition-all w-full rounded-full bg-yellow-500 my-1"></div>
          <div className="h-1 transition-all w-4/5 ml-auto rounded-full bg-yellow-500 my-1"></div>
          <div className="h-1 transition-all w-1/2 ml-auto rounded-full bg-yellow-500 my-1"></div>
        </div>
        <div className="flex justify-evenly text-2xl items-center">
          <h3 className="mx-4 cursor-pointer">Home</h3>
          <h3 className="mx-4 cursor-pointer">Profile</h3>
          <h3 className="mx-4 mr-8 cursor-pointer">Post</h3>
          <SignOut />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
