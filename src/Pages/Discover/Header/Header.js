import Navbar from "../../../Components/Navbar/Navbar";
import ax1 from "../../../Assets/images/discover-page/svgexport-1.svg";
import ax2 from "../../../Assets/images/discover-page/svgexport-2.svg";
import "./Header.css";
import discover from "../../../Assets/animations/discover.json";
import Lottie from "react-lottie";
const Header = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: discover,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <header className="header-discover relative lg:h-[444px]">
      <div className="absolute w-full z-50">
        <Navbar />
      </div>
      <div className="lg:absolute mt-32 lg:mt-0 mx-auto lg:left-[30%] lg:top-[130px] text-white lg:w-[40%] w-[87%]">
        <h1 className="font-GrintoBlack text-[50px] leading-[50px] overflow-hidden text-center">
          FIND YOUR COMMUNITY ON DISCORD
        </h1>
        <p className="font-GgBold text-[18px] mt-5 text-center">
          From gaming, to music, to learning, there's a place for you.
        </p>
      </div>
      <div className="lg:flex justify-between absolute hidden top-0 w-full z-[1]">
        <img src={ax1} className="w-[450px]" />
        <img src={ax2} className="w-[450px]" />
      </div>
      <div className="lg:hidden w-[60%] mx-[20%] mb-5">
        <Lottie options={defaultOptions} />
      </div>
    </header>
  );
};

export default Header;
