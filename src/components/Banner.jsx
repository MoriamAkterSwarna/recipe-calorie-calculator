import img1 from "../assets/Rectangle 1.png";
import img2 from "../assets/flat-lay-vegetables-pan-with-vegetable-soup-with-fusilli-wooden-frame.jpg";
import img3 from "../assets/top-view-fresh-vegetables-with-greens-seasonings-dark-space.jpg";

const Banner = () => {
  return (
    <div className="carousel h-[85vh] w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        <div className=" absolute top-[20%] left-[16%] lg:left-[30%] text-white w-2/3 mx-auto">
          <h1 className=" text-xl lg:text-5xl font-bold mb-4">
            Discover an exceptional cooking <br /> class tailored for you!
          </h1>
          <p>
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding <br /> problems to become an
            exceptionally well world-class Programmer.
          </p>
          <div className=" mt-6 flex flex-col lg:flex-row">
            <button className=" btn rounded-full bg-green-500 mr-8 border-none mb-6">
              Explore Now
            </button>
            <button className=" btn rounded-full btn-outline outline-white text-white ">
              Our Feedback
            </button>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full object-cover" />
        <div className=" absolute top-[20%] left-[16%] lg:left-[30%] text-white w-2/3 mx-auto">
          <h1 className=" text-xl lg:text-5xl font-bold mb-4">
            Discover an exceptional cooking <br /> class tailored for you!
          </h1>
          <p>
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding <br /> problems to become an
            exceptionally well world-class Programmer.
          </p>
          <div className=" mt-6 flex flex-col lg:flex-row">
            <button className=" btn rounded-full bg-green-500 mr-8 border-none mb-6">
              Explore Now
            </button>
            <button className=" btn rounded-full btn-outline outline-white text-white ">
              Our Feedback
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full object-cover" />
        <div className=" absolute top-[20%] left-[16%] lg:left-[30%] text-white w-2/3 mx-auto">
          <h1 className=" text-xl lg:text-5xl font-bold mb-4">
            Discover an exceptional cooking <br /> class tailored for you!
          </h1>
          <p>
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding <br /> problems to become an
            exceptionally well world-class Programmer.
          </p>
          <div className=" mt-6 flex flex-col lg:flex-row">
            <button className=" btn rounded-full bg-green-500 mr-8 border-none mb-6">
              Explore Now
            </button>
            <button className=" btn rounded-full btn-outline outline-white text-white ">
              Our Feedback
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
