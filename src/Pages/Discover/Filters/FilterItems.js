import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import "./Filters.css"
const FilterItems = ({ data }) => {
  return (
    <>
      <div className="discover-item flex flex-col lg:flex-row mb-5 rounded-xl border items-center gap-5 cursor-pointer !p-5 hover:bg-[#f3f3f3]">
        <div className="w-[200px]">
          <img src={data.image} className="w-[200px] h-fit object-cover" />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <h6 className="font-GgSemiBold">&#9679; {data.category}</h6>
          <h3 className="font-GgBold text-[20px]">{data.title}</h3>
          <p className="font-GgRegular text-[18px]">{data.description}</p>
          <h5 className="line-through text-slate-500 font-GgMedium text-[18px]">
            500$
          </h5>
          <h3 className="font-GgBold text-[24px]">{data.price + "$"}</h3>
          <div className="flex items-center justify-between lg:justify-start w-full lg:w-[80%] gap-3">
            <Rating name="read-only" value={data.rating.rate} readOnly />
            <Link
              to={`/Discover/${data.id}`}
              className="bg-blue-600 text-white rounded-xl px-5 py-2 lg:px-3 lg:py-1 hover:bg-blue-800 transition-all duration-200"
            >
              BUY
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterItems;
