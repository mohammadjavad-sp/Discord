import imgHeader from "../../../Assets/images/download-page/img-header.svg";
import "./header.css";
import Menu from "../../../Components/Menu/Menu";
const Header = () => {
  return (
    <header className="bg-[#23272A]">
      <Menu />
      <div className="flex lg:px-[90px] px-10 flex-col lg:flex-row lg:py-36 py-10  items-center container">
        <div className="text-white flex flex-1 flex-col overflow-hidden text-center lg:text-start">
          <h1 className="font-GrintoBlack text-[60px] leading-[70px] overflow-hidden">
            GET DISCORD FOR ANY DEVICE
          </h1>
          <p className="font-GgRegular text-[20px] mb-8 mt-5">
            An adventure awaits. Hang out with your friends on our desktop app
            and keep the conversation going on mobile.
          </p>

          <div className="header-btns h-[130px] lg:h-fit ">
            <button className="btn-download-header w-fit block mx-auto lg:mx-0 mb-5 font-GgSemiBold lg:text-[20px] text-[16px] ">
              Download for Windows
            </button>
            <button
              className="test-btn translate-y-1 w-fit translate-x-2"
              data-text="Awesome"
            >
              <span className="actual-text ">&nbsp;DISCORD&nbsp;</span>
              <span aria-hidden="true" className="hover-text">
                &nbsp;DISCORD&nbsp;
              </span>
            </button>
          </div>
        </div>
        <div className="lg:w-6/12  mt-10 lg:mt-0">
          <img src={imgHeader} className="float-end" />
        </div>
      </div>
    </header>
  );
};

export default Header;
