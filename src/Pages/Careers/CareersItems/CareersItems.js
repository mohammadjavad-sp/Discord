import "./CareersItems.css";
const CareersItems = ({ data }) => {
  return (
    <div className="careerItem w-full mx-auto flex-col gap-5 md:flex-row flex justify-between items-center mb-20">
      <div className={`md:w-[47%] w-full lg:${data.order}`}>
        <h2 className="font-GrintoBold text-[32px]">{data.title}</h2>
        <p className="font-GgRegular text-[22px] mt-5">{data.desc}</p>
      </div>
      <div className="md:w-[47%] w-full">
        <img src={data.pic} className="rounded-xl w-full " />
      </div>
    </div>
  );
};

export default CareersItems;
