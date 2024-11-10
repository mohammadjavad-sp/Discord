import Lottie from "react-lottie";
import stars from "../../../Assets/animations/stars.json";
import stars2 from "../../../Assets/animations/stars2.json";
import clip from "../../../Assets/video/safety.mp4"
const Clip = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: stars,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: stars2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <section className="w-full lg:mt-24 mt-10  text-[#23272A] relative">
        <h1 className="font-GrintoBold text-[32px] lg:text-[48px] text-center">
          Building Safer Spaces
        </h1>
        <div className="hidden lg:block absolute lg:left-0 xl:left-10 top-36">
          <Lottie options={defaultOptions} speed={0.5} width={150} />
        </div>
        <div className="w-full">
          <video controls className="mx-auto rounded-lg mt-6 lg:w-[800px] md:w-[70%] w-[90%]">
            <source src={clip}  />
          </video>
          <div className="hidden lg:block absolute lg:right-0 xl:right-10 top-64 ">
            <Lottie options={defaultOptions2} speed={0.5} width={150} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Clip;
/* className="" */
/* width="800"
            height="380" */