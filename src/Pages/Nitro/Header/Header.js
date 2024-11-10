import video from "../../../Assets/video/ff96c6cc388e99cdcdd33e996ba9f893 (2).mp4";
import bird from "../../../Assets/images/nitro-page/bird.png";
import "./header.css";
import Menu from "../../../Components/Menu/Menu";
const Header = () => {
  document.body.style.overflow = "hidden";
  return (
    <>
      <header className="relative overflow-hidden">
        <div className="w-full lg:h-[750px] mx-auto">
          <video
            src={video}
            loop
            autoPlay
            muted
            width="150%"
            height={100}
            className="absolute object-cover hidden lg:block"
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="header-nitro lg:hidden overflow-hidden  w-full ">
            <Menu />
            <div className="text-white md:w-6/12 sm:w-8/12 w-10/12 mx-auto mt-10">
              <h1 className=" font-GrintoBlack leading-tight text-center text-[50px] overflow-hidden">
                Unleash <br /> more fun <br /> with Nitro
              </h1>
              <p className="font-GgRegular text-[20px] text-center  mt-5">
                Subscribe to Nitro to upgrade your emoji, personalize your
                profile, share bigger files, and so much more.
              </p>
              <img src={bird} className="" />
            </div>
          </div>
        </div>
        <div className="z-[999] absolute w-full top-0 lg:block hidden">
          <Menu />
        </div>
        <div className="text-white absolute xl:top-48 lg:top-32 xl:w-4/12 w-6/12 p-10 xl:left-[120px] lg:left-[80px] hidden lg:block">
          <h1 className=" font-GrintoBlack lg:text-[60px] lg:leading-[60px] overflow-hidden">
            Unleash <br /> more fun <br /> with Nitro
          </h1>
          <p className="font-GgRegular lg:text-[20px]  mt-5">
            Subscribe to Nitro to upgrade your emoji, personalize your profile,
            share bigger files, and so much more.
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
