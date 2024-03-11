import Navbar from "../../../Components/Menu/Menu";
import img1 from "../../../Assets/images/header/1.svg";
import img2 from "../../../Assets/images/header/2.png";
import animate from "../../../Assets/animations/home-animate.json";
import cloud from "../../../Assets/images/header/cloud.svg";
import Btn from "../../../Components/Btn/Btn";
import Lottie from "react-lottie";
const Header = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animate, 
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <header className="w-full relative h-fit   bg-[#404EED] ">
        <Navbar/>
        <section className="text-white  xl:pt-[90px] lg:pt-[50px] pb-[50px]">
          <h1 className="font-GrintoBlack text-[4rem] px-5 text-center ">
            IMAGINE A PLACE...
          </h1>
          <p className="lg:w-[50%] w-[80%] text-[20px] text-center mx-auto mt-6">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
          <img src={cloud} className="absolute bottom-0 hidden lg:block" />
          <img
            src={img2}
            className="absolute bottom-0 left-[-150px] hidden lg:block"
          />
          <div className="lg:hidden max-w-[370px] mx-auto">
            <Lottie options={defaultOptions} />
          </div>
          <img
            src={img1}
            className="absolute bottom-0 right-[-200px] hidden lg:block"
          />
          <div className="w-fit justify-center mx-auto gap-2 mt-5 flex flex-col px-5 sm:px-0">
            <Btn text="Download For Windows" />
            <Btn text="Open Discord In Your Browser" />
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
