import waveSvg from "../IMAGES/svg.png";

const MainSection = () => {
  return (
    <div
      id="main-section"
      className="w-full relative h-60vh flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl text-center font-semibold text-white mb-4">
        <span className="text-yellow-500">Amazing</span> Tech Articles Written
        By <span className="text-yellow-500">Amazing</span> People
      </h2>
      <h3 className="text-white text-opacity-75 text-2xl">
        Programming - A.I. - Apps - News
      </h3>
      <img
        className="absolute -bottom-10 left-0 w-full h-40"
        src={waveSvg}
        alt=""
      />
    </div>
  );
};

export default MainSection;
