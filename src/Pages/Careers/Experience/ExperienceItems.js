import "./Experience.css";
const ExperienceItems = ({ data }) => {
  return (
    <div className="card-exp md:w-[49%] lg:w-[32%] cursor-pointer flex flex-col p-7 items-center justify-stretch">
      <div className="img">
        <img src={data.ax} className="w-32 object-contain" />
      </div>
      <span className="font-GrintoBold  my-4 !text-[26px]">{data.title}</span>
      <p className="info flex-1 font-GgMedium text-[18px] text-center">{data.desc}</p>
    </div>
  );
};

export default ExperienceItems;
