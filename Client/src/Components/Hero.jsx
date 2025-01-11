const Hero = () => {
    return (
      <section className="bg-white py-20">
        {/* Main Content */}
        <div className="container mx-auto flex flex-col items-center text-center">
          <h1 className="text-6xl  md:text-8xl font-bold leading-tight">
            Welcome to <span className="text-green-600">CSIT</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mt-4">
            Your One-Stop Counselling Portal
          </p>
          <button
            type="button"
            className="mt-6 px-6 py-3 text-white bg-green-600 hover:bg-green-700 rounded-md shadow-lg transition-all duration-300"
          >
            Explore
          </button>
        </div>
  
        {/* Image Gallery */}
        <div className="mt-12">
          <ul className="flex flex-wrap justify-center gap-6">
            <li className="w-30 h-20 md:w-34 md:h-24  overflow-hidden ">
              <img
                src="https://i.pinimg.com/736x/75/88/ff/7588ffa7cab771cf9b3c4da80dfdfcc8.jpg"
                alt="Gallery Image 1"
                className="w-full h-full object-cover"
              />
            </li>
            <li className="w-30 h-20 md:w-34 md:h-24  overflow-hidden ">
              <img
                src="https://i.pinimg.com/736x/57/72/be/5772be2f532f8ca283b8bec643110d08.jpg"
                alt="Gallery Image 2"
                className="w-full h-full object-cover"
              />
            </li>
            <li className="w-30 h-20 md:w-34 md:h-24  overflow-hidden ">
              <img
                src="https://i.pinimg.com/736x/7e/9c/27/7e9c27a8b03ce69183e437b3bf981098.jpg"
                alt="Gallery Image 3"
                className="w-full h-full object-cover"
              />
            </li>
            <li className="w-30 h-20 md:w-34 md:h-24  overflow-hidden ">
              <img
                src="https://i.pinimg.com/736x/33/5d/c5/335dc529dbb06aa72b878e998ce8fddf.jpg"
                alt="Gallery Image 4"
                className="w-full h-full object-cover"
              />
            </li>
          </ul>
        </div>
      </section>
    );
  };
  
  export default Hero;
  