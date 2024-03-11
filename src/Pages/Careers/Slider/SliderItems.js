const SliderItems = ({ data }) => {
  return (
    <div className="bg-white w-[93%] lg:p-10 p-5 py-10 mx-auto h-full !rounded-2xl !cursor-auto ">
      <div className="mx-auto flex flex-col lg:flex-row gap-10 items-start lg:items-center w-[90%] h-full">
        <div className="">
          <img src={data.img} className="w-52 mt-5" />
        </div>
        <div className="flex-1">
          <h4 className="font-GgBold select-none text-[22px] mb-5">
            {data.title}
          </h4>
          <p className="text-justify select-none ">{data.txt}</p>
        </div>
      </div>
    </div>
  );
};

export default SliderItems;
