import Menu from "../../../Components/Menu/Menu";
import img1 from "../../../Assets/images/careers-page/1.webp";
import img2 from "../../../Assets/images/careers-page/2.webp";
import img3 from "../../../Assets/images/careers-page/3.webp";
import img4 from "../../../Assets/images/careers-page/4.webp";
import img5 from "../../../Assets/images/careers-page/5.webp";
const Header = () => {
  return (
    <header className="bg-[#5865F2]">
      <Menu />
      <div className="text-center text-white mx-auto lg:w-[50%] w-[90%] my-5 lg:my-14 mb-10">
        <h1 className="font-GrintoBlack text-[60px]">WORK AT DISCORD</h1>
        <p className="font-GgBold text-[24px]">
          Discord is home to (com) passionate people who believe in our mission
          of creating space for everyone to find belonging.
        </p>
      </div>
      <div className="container relative w-[90%] xl:h-[770px] mx-auto mb-14">
        <div className="lg:flex hidden justify-between flex-wrap gap-8 ">
          <img
            src={img1}
            className="xl:absolute xl:w-[280px] lg:w-[48%] h-[300px] object-cover xl:h-fit top-4 rounded-2xl left-[0]"
          />
          <img
            src={img2}
            className="xl:absolute xl:w-[320px] lg:w-[48%] h-[300px] object-cover xl:h-[200px] z-[900] rounded-2xl right-0"
          />
          <img
            src={img3}
            className="xl:absolute  xl:w-[200px] lg:w-[48%] h-[300px] object-cover xl:h-fit rounded-2xl bottom-[100px] left-[120px]"
          />
          <img
            src={img4}
            className="xl:absolute bottom-0 xl:w-[350px] lg:w-[48%] h-[300px] object-cover xl:h-[250px] z-[900] rounded-2xl right-0"
          />
        </div>
        <img
          src={img5}
          className="xl:absolute mx-auto lg:mt-8 block w-[100%] xl:w-[700px] left-[270px] top-14 rounded-2xl"
        />
      </div>
    </header>
  );
};

export default Header;
