import "./nitroPackages.css";
import logo1 from "../../../Assets/images/nitro-page/svgexport-3.svg";
import logo2 from "../../../Assets/images/nitro-page/svgexport-8.svg";
import icon1 from "../../../Assets/images/nitro-page/svgexport-4.svg";
import icon2 from "../../../Assets/images/nitro-page/svgexport-5.svg";
import icon3 from "../../../Assets/images/nitro-page/svgexport-6.svg";
import icon4 from "../../../Assets/images/nitro-page/svgexport-7.svg";
import icon5 from "../../../Assets/images/nitro-page/svgexport-9.svg";
import icon6 from "../../../Assets/images/nitro-page/svgexport-10.svg";
import icon7 from "../../../Assets/images/nitro-page/svgexport-11.svg";
const NitroPackages = () => {
  return (
    <section className="flex md:w-[88%] h-fit overflow-hidden mt-4 sm:mt-8 lg:mt-0 w-full justify-between flex-col md:flex-row mx-auto lg:absolute lg:translate-x-[-50%] lg:left-[50%] xl:top-[680px] lg:top-[550px] ">
      <div className="e-card md:w-[48%] w-[80%] mx-auto playing transition-all duration-500 hover:shadow-xl  ">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>

        <div className="infotop p-7 flex justify-between flex-col h-full   ">
          <div className="">
            <img src={logo1} className="mb-5" />
            <div className="flex gap-2 mb-3">
              <img src={icon1} />
              <p className="font-GgRegular text-[20px] font-thin">
                50MB uploads
              </p>
            </div>
            <div className="flex gap-2 mb-3">
              <img src={icon2} />
              <p className="font-GgRegular text-[20px] font-thin">
                Custom emoji anywhere
              </p>
            </div>
            <div className="flex gap-2 mb-3">
              <img src={icon3} />
              <p className="font-GgRegular text-[20px] font-thin">
                Unlimited Super Reactions
              </p>
            </div>
            <div className="flex gap-2 mb-3 text-start">
              <img src={icon4} />
              <p className="font-GgRegular text-[20px] font-thin">
                Special Nitro badge on your profile
              </p>
            </div>
          </div>
          <button className="btn-nitro-package block w-full ">Subscribe</button>
        </div>
      </div>
      <div className="e-card md:w-[48%] w-[80%] mx-auto mt-10 md:mt-0 playing transition-all duration-500 hover:shadow-xl  ">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>

        <div className="infotop p-7 ">
          <img src={logo2} className="mb-5" />
          <div className="flex gap-2 mb-3">
            <img src={icon1} />
            <p className="font-GgRegular text-[20px] font-thin">50MB uploads</p>
          </div>
          <div className="flex gap-2 mb-3">
            <img src={icon2} />
            <p className="font-GgRegular text-[20px] font-thin">
              Custom emoji anywhere
            </p>
          </div>
          <div className="flex gap-2 mb-3">
            <img src={icon3} />
            <p className="font-GgRegular text-[20px] font-thin">
              Unlimited Super Reactions
            </p>
          </div>
          <div className="flex gap-2 mb-3">
            <img src={icon5} />
            <p className="font-GgRegular text-[20px] font-thin">
              HD video streaming
            </p>
          </div>
          <div className="flex gap-2 mb-3">
            <img src={icon6} />
            <p className="font-GgRegular text-[20px] font-thin">
              2 Server Boosts
            </p>
          </div>
          <div className="flex gap-2 mb-3">
            <img src={icon7} />
            <p className="font-GgRegular text-[20px] font-thin">
              Custom profiles and more!
            </p>
          </div>
          <button className="btn-nitro-package block w-full mt-[45px] ">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NitroPackages;
