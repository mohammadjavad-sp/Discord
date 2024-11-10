import Lottie from "react-lottie";
import Menu from "../../../Components/Menu/Menu";
import supAnimat1 from "../../../Assets/animations/supHeader1.json";
import supAnimat2 from "../../../Assets/animations/supHeader2.json";
const Header = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: supAnimat1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: supAnimat2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <header className=" bg-[#40679E]">
      <Menu />
      <div className="support-header mx-auto overflow-hidden lg:h-[300px] relative flex items-center w-[95%] justify-between flex-col lg:flex-row mt-6 pb-3">
        <div className="xl:w-[400px] w-[300px] hidden lg:block">
          <Lottie options={defaultOptions2} />
        </div>
        <div className="mx-auto text-center lg:absolute xl:left-[36%] lg:left-[30%] z-50">
          <h1 className="font-GgBold text-white mb-3 text-[48px]">Help Center</h1>
          <input
            type="text"
            placeholder="Search"
            className="sm:w-[400px] rounded-lg w-[300px] "
          />
        </div>
        <div className="xl:w-[500px] lg:w-[400px] lg:translate-x-14">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </header>
  );
};

export default Header;
