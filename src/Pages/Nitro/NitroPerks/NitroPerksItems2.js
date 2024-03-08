const NitroPerksItems2 = ({ nitroPerks2 }) => {
  return (
    <>
      <div className=" rounded-2xl  items-center lg:w-[48%]  xl:w-[32%] w-full text-center bg-[#F6F6F6] p-10">
        <img src={nitroPerks2.img} className="block mx-auto lg:h-32" />
        <h1 className=" mt-6 font-GrintoBold text-[20px]">
          {nitroPerks2.title}
        </h1>
        <p className="text-[14px]">{nitroPerks2.text}</p>
      </div>
    </>
  );
};

export default NitroPerksItems2;
