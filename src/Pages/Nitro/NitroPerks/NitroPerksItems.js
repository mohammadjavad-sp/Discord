const NitroPerksItems = ({ nitroPerks1 }) => {
  return (
    <>
      <div className=" rounded-2xl px-20 lg:w-[48%] xl:w-[49%] w-full text-center bg-[#F6F6F6] p-10">
        <p className=" mt-6 font-GrintoBold text-[24px] mb-8">
          {nitroPerks1.txt}
        </p>
        <img src={nitroPerks1.img} className="block mx-auto" />
      </div>
    </>
  );
};

export default NitroPerksItems;
