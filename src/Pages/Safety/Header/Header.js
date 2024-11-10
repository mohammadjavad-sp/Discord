import Menu from "../../../Components/Menu/Menu";
import Lottie from "react-lottie";
import animationData from "../../../Assets/animations/safe.json";
import "./header.css";
const Header = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <header className="bg-[#5865F2]">
        <Menu />
        <div className="flex items-center flex-wrap lg:flex-nowrap text-white justify-between mx-auto w-[87%]">
          <div className="lg:w-6/12 text-center lg:text-start mt-10 lg:mt-0">
            <h1 className="font-GrintoBlack overflow-hidden text-[50px] leading-[50px]">
              DISCORD SAFETY CENTER
            </h1>
            <p className="font-GgBold text-[17px] my-6">
              Discord is the place to hang out with your friends and build
              community around shared interests. We’re committed to creating a
              safe, inclusive and welcoming place.
            </p>
            <p className="font-GgBold text-[17px]">
              That’s why we’re working to make Discord private and safe, by
              design. Learn how to shape the best experience for yourself and
              find the resources you need, whether you’re a teen, parent,
              educator, or long-time Discord user.
            </p>
          </div>
          <div className="lg:w-5/12">
            <Lottie options={defaultOptions} />
          </div>
        </div>
        <div className="lg:w-8/12 w-10/12 mx-auto flex flex-wrap justify-center gap-4 font-GrintoBlack text-[#171a1c] pb-14 mt-6">
          <button className="btn-safety w-[45%] lg:w-[31%] text-[16px] md:text-[20px] h-20 md:h-24 mb-1">
            {" "}
            SAFETY LIBRARY
          </button>
          <button className="btn-safety w-[45%] lg:w-[31%] text-[16px] md:text-[20px] h-20 md:h-24 mb-1">
            {" "}
            PRIVACY HUB
          </button>
          <button className="btn-safety w-[45%] lg:w-[31%] text-[16px] md:text-[20px] h-20 md:h-24 mb-1">
            {" "}
            PARENT HUB
          </button>
          <button className="btn-safety w-[45%] lg:w-[31%] text-[16px] md:text-[20px] h-20 md:h-24">
            {" "}
            TRANSPARENCY HUB
          </button>
          <button className="btn-safety w-[45%] lg:w-[31%] text-[16px] md:text-[20px] h-20 md:h-24">
            {" "}
            SAFETY NEWS HUB
          </button>
          <button className="btn-safety w-[45%] lg:w-[31%] text-[16px] md:text-[20px] h-20 md:h-24">
            {" "}
            POLICY HUB
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
