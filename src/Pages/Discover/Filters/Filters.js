import { FaMagnifyingGlass, FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoGameController, IoMusicalNotes } from "react-icons/io5";
import { PiTelevisionBold, PiStudentFill } from "react-icons/pi";
import { GiMaterialsScience } from "react-icons/gi";
import "./Filters.css";
import axios from "axios";
import { useEffect, useState } from "react";
import FilterItems from "./FilterItems";

const Filters = () => {
  const [category, setCategory] = useState([]);
  const [name, setName] = useState("");
  const productHandler = async () => {
    let res = await axios("https://fakestoreapi.com/products");
    setCategory(res.data);
  };
  useEffect(() => {
    productHandler();
  }, []);
  return (
    <>
      <section className="w-[80%] mx-auto mt-14">
        <div className="w-full flex justify-between gap-3">
          <div className=" flex-1 bg-[#EBEBEB] p-2 py-3 rounded-xl">
            <input
              type="text"
              placeholder="Explore communities"
              className="bg-[#D9D9D9] w-full border-0"
            />
          </div>
          <span className="p-5 cursor-pointer rounded-xl bg-[#5865F2] flex justify-center items-center">
            <FaMagnifyingGlass size={25} color="white" />
          </span>
        </div>
        <section className="w-full my-12 flex flex-col lg:flex-row gap-10 items-start">
          <div className=" w-full lg:w-[25%] font-GgRegular flex flex-wrap text-[18px]">
            <div
              className="back-filter filter-item flex w-full justify-between items-center"
              onClick={(e) => setName(e.target.innerText)}
            >
              <div className="flex items-center gap-4">
                <FaCartShopping size={21} />
                <h5>Products</h5>
              </div>
              <div>30</div>
            </div>
            <div
              className="filter-item flex w-full justify-between items-center"
              onClick={(e) => setName(e.target.innerText)}
            >
              <div className="flex items-center gap-4">
                <IoGameController size={21} />
                <h5>Gaming</h5>
              </div>
              <div>19531</div>
            </div>
            <div className="filter-item flex w-full justify-between items-center">
              <div className="flex items-center gap-4">
                <PiTelevisionBold size={21} />
                <h5>Entertainment</h5>
              </div>
              <div>11054</div>
            </div>
            <div className="filter-item flex w-full justify-between items-center">
              <div className="flex items-center gap-4">
                <PiStudentFill size={21} />
                <h5>Education</h5>
              </div>
              <div>2149</div>
            </div>
            <div className="filter-item flex w-full justify-between items-center">
              <div className="flex items-center gap-4">
                <GiMaterialsScience size={21} />
                <h5>Science & Tech</h5>
              </div>
              <div>2011</div>
            </div>
            <div className="filter-item flex w-full justify-between items-center">
              <div className="flex items-center gap-4">
                <IoMusicalNotes size={21} />
                <h5>Music</h5>
              </div>
              <div>1930</div>
            </div>
          </div>
          <section className="flex-1 w-full ">
            <h2 className="font-GrintoBold text-[20px]">
              30 Results Found in Products
            </h2>
            <div className="mt-5">
              {category &&
                category.map((elem) => (
                  <FilterItems data={elem} key={elem.id} />
                ))}
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Filters;
