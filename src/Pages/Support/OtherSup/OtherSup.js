import otherSup1 from "../../../Assets/images/support-page/11.svg";
import otherSup2 from "../../../Assets/images/support-page/12.svg";
const OtherSup = () => {
  return (
    <>
      <section className="my-16 ">
        <div>
          <h1 className="font-GgSemiBold text-[28px] text-center">Other ways to find help.</h1>
        </div>
        <div className="flex flex-wrap w-[95%] mx-auto gap-5 justify-center mt-5">
          <div className="card-support cursor-pointer flex flex-col justify-stretch items-center  p-5 gap-3 ">
            <img src={otherSup1} className="w-32 object-contain" />
            <h1 className="font-GgSemiBold text-[18px] flex items-center  text-[#5865F2] text-center">
              Developer Support
            </h1>
            <p className="font-GgMedium text-[14px] text-center">
              Your home for support with developing bots, apps, & games using
              our API and SDK!
            </p>
          </div>
          <div className="card-support cursor-pointer flex flex-col justify-stretch items-center  p-5 gap-3 ">
            <img src={otherSup2} className="w-32 object-contain" />
            <h1 className="font-GgSemiBold text-[18px] flex items-center  text-[#5865F2] text-center">
              Twitter
            </h1>
            <p className="font-GgMedium text-[14px] text-center">
              Have a quick question? Hit us up on Twitter!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OtherSup;
