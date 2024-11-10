import nitroBasic from "../../../Assets/images/nitro-page/table/nitro.svg";
import nitro from "../../../Assets/images/nitro-page/table/nitro2.svg";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import TableItems from "./TableItems";
import "./plans.css"
const Plans = () => {
  const tableItems = [
    {
      id: 1,
      title: "Unlimited Super Reactions",
      firstItem: <FaCheck className="mx-auto text-black" size={26} />,
      secondItem: <FaCheck className="mx-auto text-black" size={26} />,
    },
    {
      id: 2,
      title: "Custom emoji anywhere and make them animated",
      firstItem: <FaCheck className="mx-auto text-black" size={26} />,
      secondItem: <FaCheck className="mx-auto text-black" size={26} />,
    },
    {
      id: 3,
      title: "Custom stickers anywhere",
      firstItem: <FaCheck className="mx-auto text-black" size={26} />,
      secondItem: <FaCheck className="mx-auto text-black" size={26} />,
    },
    {
      id: 4,
      title: "Custom App Icons",
      firstItem: <FaCheck className="mx-auto text-black" size={26} />,
      secondItem: <FaCheck className="mx-auto text-black" size={26} />,
    },
    {
      id: 5,
      title: "Bigger file sharing",
      firstItem: "50MB",
      secondItem: "500MB",
    },
    {
      id: 6,
      title: "HD streaming",
      firstItem: <IoClose className="mx-auto text-[#C7CCD1]" size={35} />,
      secondItem: "Up to 4K and 60fps",
    },
    {
      id: 7,
      title: "2 Free Boosts + 30% off extra Boosts",
      firstItem: <IoClose className="mx-auto text-[#C7CCD1]" size={35} />,
      secondItem: <FaCheck className="mx-auto text-black" size={26} />,
    },
    {
      id: 8,
      title: "Animated avatar, banner, and profile theme",
      firstItem: <IoClose className="mx-auto text-[#C7CCD1]" size={35} />,
      secondItem: <FaCheck className="mx-auto text-black" size={26} />,
    },
    {
      id: 9,
      title: "Early access to Clips",
      firstItem: <IoClose className="mx-auto text-[#C7CCD1]" size={35} />,
      secondItem: <FaCheck className="mx-auto text-black" size={26} />,
    },
    {
      id: 10,
      title: "Custom server profiles",
      firstItem: <IoClose className="mx-auto text-[#C7CCD1]" size={35} />,
      secondItem: <FaCheck className="mx-auto text-black" size={26} />,
    },
    {
      id: 11,
      title: "Nitro badge on your profile",
      firstItem: <FaCheck className="mx-auto text-black" size={26} />,
      secondItem: <FaCheck className="mx-auto text-black" size={26} />,
    },
    {
      id: 12,
      title: "Custom video backgrounds",
      firstItem: <FaCheck className="mx-auto text-black" size={26} />,
      secondItem: <FaCheck className="mx-auto text-black" size={26} />,
    },
    {
      id: 13,
      title: "Join up to 200 servers",
      firstItem: <IoClose className="mx-auto text-[#C7CCD1]" size={35} />,
      secondItem: <FaCheck className="mx-auto text-black" size={26} />,
    },
    {
      id: 14,
      title: "Longer messages up to 4,000 characters",
      firstItem: <IoClose className="mx-auto text-[#C7CCD1]" size={35} />,
      secondItem: <FaCheck className="mx-auto text-black" size={26} />,
    },
    {
      id: 15,
      title: "Colors for your Discord Theme",
      firstItem: <IoClose className="mx-auto text-[#C7CCD1]" size={35} />,
      secondItem: <FaCheck className="mx-auto text-black" size={26} />,
    },
    {
      id: 16,
      title: "Custom sounds anywhere",
      firstItem: <IoClose className="mx-auto text-[#C7CCD1]" size={35} />,
      secondItem: <FaCheck className="mx-auto text-black" size={26} />,
    },
    {
      id: 17,
      title: "Personalized entrance sounds",
      firstItem: <IoClose className="mx-auto text-[#C7CCD1]" size={35} />,
      secondItem: <FaCheck className="mx-auto text-black" size={26} />,
    },
    {
      id: 18,
      title: "Shop member pricing and exclusive items",
      firstItem: <IoClose className="mx-auto text-[#C7CCD1]" size={35} />,
      secondItem: <FaCheck className="mx-auto text-black" size={26} />,
    },
    /* {
      id: 19,
      firstItem: <BtnTable text="Subscribe Basic"/>,
      secondItem: <BtnTable text="Subscribe Nitro"/>,
    }, */
  ];
  return (
    <>
      <section className="plans relative bg-[#F6F6F6] mt-[60px] md:mt-[100px] rounded-xl lg:p-24 sm:p-8 p-4 w-[87%] mx-auto">
        <h1 className="font-GrintoBold sm:w-[60%] w-[80%] mx-auto text-[#23272A] text-[32px] md:text-[48px] text-center">
          Pick the plan that works best for you
        </h1>

        <div className="tableHandler relative  mt-14">
          <table className="w-[100%]  text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase border-b   ">
              <tr>
                <th scope="col" className=" py-3 font-GrintoBold text-[16px] sm:text-[20px]">
                  Features
                </th>
                <th scope="col" className=" py-3 font-GrintoBold text-[20px]">
                  <img src={nitroBasic} className=" block mx-auto w-16 sm:w-auto" />
                </th>
                <th scope="col" className=" py-3 font-GrintoBold text-[20px] ">
                  <img src={nitro} className=" block mx-auto w-14 sm:w-auto " />
                </th>
              </tr>
            </thead>
            <tbody>
              {tableItems &&
                tableItems.map((elem) => (
                  <TableItems tableItems={elem} key={elem.id} />
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Plans;
