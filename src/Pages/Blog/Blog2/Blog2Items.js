const Blog2Items = ({ data }) => {
  return (
    <div className="md:w-[32%] mb-12 cursor-pointer w-full">
      <img
        src={data.img}
        className="rounded-lg object-cover w-full h-[200px]"
      />
      <h3 className="text-[18px]  font-GrintoBlack text-[#404EED] mt-5">
        {data.title}
      </h3>
      <p className="lg:text-[24px] text-[20px] font-GrintoBold text-[#23272A]">
        {data.text}
      </p>
    </div>
  );
};

export default Blog2Items;
