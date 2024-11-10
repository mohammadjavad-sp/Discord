import "./SupItems.css";
const SupItems = ({ data }) => {
  return (
    <div className="card-support cursor-pointer flex flex-col justify-stretch items-center  p-5 gap-3 ">
      <img src={data.img} className="w-32 object-contain" />
      <h1 className="font-GgSemiBold text-[18px] flex items-center  text-[#5865F2] text-center border-b pb-2">{data.title}</h1>
      <p className="font-GgMedium text-[14px] text-center">{data.desc}</p>
    </div>
  );
};

export default SupItems;
