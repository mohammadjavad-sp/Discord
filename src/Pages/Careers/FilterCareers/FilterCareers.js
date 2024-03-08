import logo from "../../../Assets/images/careers-page/discord-logo.svg";
const FilterCareers = () => {
  return (
    <section className="">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1440 220">
        <path
          fill="#F6F6F6"
          fill-opacity="1"
          d="M0,160L60,176C120,192,240,224,360,218.7C480,213,600,171,720,154.7C840,139,960,149,1080,165.3C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-[#f6f6f6] w-full pt-5">
        <h2 className="font-GrintoBold text-[30px] lg:text-[48px] w-[90%] mx-auto">
          We'd love to work with someone like you.
        </h2>
        <div className="">
          <h4 className="font-GrintoBold text-[36px] w-[90%] mx-auto mt-10">
            Filters
          </h4>
          <div className="mt-3 lg:flex text-nowrap lg:flex-wrap overflow-x-auto gap-3 lg:px-16 px-5 pb-14">
            <button className="bg-white me-2 lg:me-0 hover:shadow-2xl rounded-full px-9 py-4 font-semibold text-[22px] hover:text-[#5865F2]">
              Featured
            </button>
            <button className="bg-white me-2 lg:me-0 hover:shadow-2xl rounded-full px-9 py-4 font-semibold text-[22px] hover:text-[#5865F2]">
              Activities Platform
            </button>
            <button className="bg-white me-2 lg:me-0 hover:shadow-2xl rounded-full px-9 py-4 font-semibold text-[22px] hover:text-[#5865F2]">
              Communications & PR
            </button>
            <button className="bg-white me-2 lg:me-0 hover:shadow-2xl rounded-full px-9 py-4 font-semibold text-[22px] hover:text-[#5865F2]">
              Consumer Marketing
            </button>
            <button className="bg-white me-2 lg:me-0 hover:shadow-2xl rounded-full px-9 py-4 font-semibold text-[22px] hover:text-[#5865F2]">
              Core Tech Engineering
            </button>
            <button className="bg-[#5865F2] me-2 lg:me-0 hover:shadow-2xl rounded-full px-9 py-4 font-semibold text-[22px] text-white">
              Creative & Brand
            </button>
            <button className="bg-white me-2 lg:me-0 hover:shadow-2xl rounded-full px-9 py-4 font-semibold text-[22px] hover:text-[#5865F2]">
              Data Platform Engineering
            </button>
            <button className="bg-white me-2 lg:me-0 hover:shadow-2xl rounded-full px-9 py-4 font-semibold text-[22px] hover:text-[#5865F2]">
              Legal
            </button>
            <button className="bg-white me-2 lg:me-0 hover:shadow-2xl rounded-full px-9 py-4 font-semibold text-[22px] hover:text-[#5865F2]">
              Machine Learning
            </button>
            <button className="bg-white me-2 lg:me-0 hover:shadow-2xl rounded-full px-9 py-4 font-semibold text-[22px] hover:text-[#5865F2]">
              Policy
            </button>
            <button className="bg-white me-2 lg:me-0 hover:shadow-2xl rounded-full px-9 py-4 font-semibold text-[22px] hover:text-[#5865F2]">
              Product Engineering
            </button>
            <button className="bg-white me-2 lg:me-0 hover:shadow-2xl rounded-full px-9 py-4 font-semibold text-[22px] hover:text-[#5865F2]">
              Product Management
            </button>
            <button className="bg-white me-2 lg:me-0 hover:shadow-2xl rounded-full px-9 py-4 font-semibold text-[22px] hover:text-[#5865F2]">
              Trust & Safety
            </button>
          </div>
        </div>
        <div className="mt-5">
          <h2 className="font-GrintoBlack text-[30px] lg:text-[48px] w-[90%] mx-auto">
            Creative & Brand
          </h2>
          <div className="lg:ps-16 px-5 mt-4 pb-14 flex flex-col sm:flex-row gap-5">
            <div className="hover:shadow-xl cursor-pointer w-full sm:w-[49%] lg:w-[400px] bg-white h-[200px] sm:h-[250px] rounded-xl  p-6 flex flex-col justify-between">
              <h3 className="font-GrintoBold text-[24px] leading-[40px] md:text-[36px]">Senior Copywriter</h3>
              <div className="flex justify-between gap-5 items-center">
                <p className="font-GgMedium text-[18px]">
                  San Francisco, CA or Remote (U.S.)
                </p>
                <img src={logo} className="w-10" />
              </div>
            </div>
            <div className="hover:shadow-xl cursor-pointer w-full sm:w-[49%] lg:w-[400px] bg-white h-[200px] sm:h-[250px] rounded-xl  p-6 flex flex-col justify-between">
              <h3 className="font-GrintoBold leading-[40px] text-[24px] md:text-[36px]">
                Senior Production Designer
              </h3>
              <div className="flex justify-between gap-5 items-center">
                <p className="font-GgMedium text-[18px]">
                  San Francisco, CA or Remote (U.S.)
                </p>
                <img src={logo} className="w-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterCareers;
