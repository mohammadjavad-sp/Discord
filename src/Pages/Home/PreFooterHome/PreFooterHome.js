import pic from "../../../Assets/images/discordItems/preFooter.svg";
import "./preFooterHome.css";
import starPic from "../../../Assets/images/discordItems/preFooter2.svg";
import { IoMdDownload } from "react-icons/io";
const PreFooterHome = () => {
  return (
    <>
      <section className=" w-full text-center overflow-hidden bg-[#F6F6F6] pt-24 px-5 lg:px-0">
        <h1
          className="font-GrintoBlack text-[50px] "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          RELIABLE TECH FOR STAYING CLOSE
        </h1>
        <p
          className="font-GgRegular overflow-hidden text-[20px] mt-3 w-10/12 lg:w-8/12 mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Low-latency voice and video feels like you’re in the same room. Wave
          hello over video, watch friends stream their games, or gather up and
          have a drawing session with screen share.
        </p>
        <img
          src={pic}
          className="d-block mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
      </section>
      <section className="text-center py-24 w-full relative bg-[#F6F6F6] overflow-hidden">
        <img src={starPic} className="w-8/12 left-44 absolute" />
        <h1
          className="font-GrintoBold text-[34px]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Ready to start your journey?
        </h1>
        <button
          className="prefooter-btn mt-8 flex items-center gap-1 mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <IoMdDownload size={22} />
          Download for Windows
        </button>
      </section>
    </>
  );
};

export default PreFooterHome;
