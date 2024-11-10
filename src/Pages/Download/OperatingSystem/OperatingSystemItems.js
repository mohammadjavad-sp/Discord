import "./OperatingSystemItems.css";

const OperatingSystemItems = ({ data }) => {
  return (
    <>
      <div className="rounded-2xl operatingItems lg:w-[48%] xl:w-[49%] w-full h-fit text-center bg-[#F6F6F6] p-10">
        <h1 className="font-GrintoBold text-[32px]">{data.name}</h1>
        <p className="text-[18px] mt-6 font-GgMedium">{data.text}</p>
        <button className="codepen-button font-GgMedium text-[20px] mb-10 mt-5">
          <span>{data.btn || "Download"}</span>
        </button>
        <img src={data.pic} className="block mx-auto" />
      </div>
    </>
  );
};

export default OperatingSystemItems;
