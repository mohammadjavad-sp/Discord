import img1 from "../../../Assets/images/nitro-page/pre-footer.svg";
import img2 from "../../../Assets/images/nitro-page/pre-footer2.svg";
import "./PreFooter.css";
import preFooterAnimate from "../../../Assets/animations/preFooter.json";
import Lottie from "react-lottie";
const PreFooter = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: preFooterAnimate,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="w-full h-fit flex justify-between items-center mt-24 bg-gradient-to-r from-[#8547C6] to-[#B152A3] py-10 lg:py-5">
      <img src={img1} className="hidden lg:block" />
      <div className="text-center text-white w-[90%] mx-auto lg:w-auto">
        <h2 className="font-GrintoBold text-[44px]">
          Unleash the fun with Nitro
        </h2>
        <button
          className="button-preFooter overflow-hidden"
          data-text="Awesome"
        >
          <span className="actual-text">&nbsp;discord&nbsp;</span>
          <span aria-hidden="true" className="front-text">
            &nbsp;discord&nbsp;
          </span>
        </button>
        <div className="lg:hidden w-[300px] mx-auto mt-5">
          <Lottie options={defaultOptions} />
        </div>
      </div>
      <img src={img2} className="w-[280px] hidden lg:block" />
    </section>
  );
};

export default PreFooter;
