import { Link } from "react-router-dom";
import blog from "../../../Assets/images/blog-page/blog.svg";
import pic from "../../../Assets/images/blog-page/header-pic.png";
import { FaAngleLeft } from "react-icons/fa6";
const Header = () => {
  return (
    <>
      <section className="bg-[#404EED] py-7 px-10 lg:px-20 flex justify-between items-center ">
        <img src={blog} className="h-9 cursor-pointer" />
        <Link to="/discord">
          <FaAngleLeft
            color="white"
            className="border-[1px] lg:border-2 lg:w-8 lg:h-8 cursor-pointer p-1 w-7 h-7 rounded-lg"
          />
        </Link>
      </section>
      <div className="lg:h-[320px] md:h-[200px] h-[100px] bg-[#404EED] w-full"></div>
      <div className="w-fit mx-auto absolute top-[100px] lg:top-[140px] left-[5%] ">
        <img src={pic} className=" w-[95%] rounded-lg " />
      </div>
      <div className="xl:mt-[220px] lg:mt-[178px] sm:mt-[170px] mt-[130px] w-[90%] mx-auto cursor-pointer">
        <p className="font-GrintoBold text-[#404EED] text-[22px] mb-2">
          HOW TO DISCORD
        </p>
        <h1 className="font-GrintoBlack text-[#23272A] text-[50px] lg:text-[60px] transition-all duration-300 hover:text-[#404EED] leading-[50px] overflow-hidden">
          WAYS TO CUSTOMIZE YOUR DISCORD EXPERIENCE
        </h1>
      </div>
    </>
  );
};

export default Header;
