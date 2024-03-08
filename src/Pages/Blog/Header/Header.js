import Navbar from "../../../Components/Navbar/Navbar";
import pic from "../../../Assets/images/blog-page/header-pic.png";
const Header = () => {
  return (
    <>
      <section className="bg-[#404EED] lg:h-[420px] md:h-[300px] h-[200px]">
        <Navbar />
      </section>
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
