
const Hero = () => {
    return (
      <div className="hero min-h-screen bg-warning">
        <div className="hero-content flex flex-col lg:flex-row items-center justify-center text-center">
          <div className="lg:w-1/2">
            <img
              className="w-3/4 rounded-lg shadow-2xl"
              src="https://i.ibb.co/Qp8577G/giorgio-trovato-p0-Ol-RAAYXLY-unsplash.jpg"
              alt=""
            />
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-3xl text-gray-400 font-bold">New Arrivals</h3>
            <h1 className="text-5xl font-extrabold font-serif">
              Best Toy Cars Store & Online Shope
            </h1>
            <p className="py-6">
              The Best Online Toy Cars Shop , but the majority have suffered
              alteration in some form, by injected humour, or randomized words
              which do not look even slightly believable.{" "}
            </p>
            <button className="btn btn-[#FAA3B3] hover:bg-[#f4c1ca] font-extrabold rounded-2xl p-3 w-40 h-14">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    );
};

export default Hero;