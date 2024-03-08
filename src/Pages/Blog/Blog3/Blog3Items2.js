import "./Blog3Items.css";
const Blog3Items2 = ({ data }) => {
  return (
    <>
      <section className="w-[90%] md:flex-row flex-col text-[#23272A] mx-auto flex justify-between rounded-lg bg-[#F6F6F6] mb-10 lg:p-12 p-6">
        <div className="md:w-[30%] w-full">
          <h4 className="font-GrintoBold text-[20px]">COLLECTION</h4>
          <h2 className="font-GrintoBlack leading-[40px] overflow-hidden my-3 text-[#5865F2] text-[27px] lg:text-[40px]">
            {data.txt0}
          </h2>
          <img src={data.ax1} className="w-full" />
          <p className="font-GgMedium text-[22px] my-7">{data.txt1}</p>
          <button className="blog-btn mb-10 md:mb-0 w-full md:w-fit">
            <span>View Collection</span>
          </button>
        </div>
        <div className="md:w-[65%] w-full flex flex-wrap justify-between">
          <div className="md:w-[49%] w-full mb-10">
            <img
              src={data.ax2}
              className="w-full rounded-lg h-40 object-cover"
            />
            <h3 className="font-GrintoBold text-[18px] md:text-[20px] mt-5 leading-[27px]">
              {data.txt2}
            </h3>
          </div>
          <div className="md:w-[49%] w-full mb-10">
            <img
              src={data.ax3}
              className="w-full rounded-lg h-40 object-cover"
            />
            <h3 className="font-GrintoBold text-[18px] md:text-[20px] mt-5 leading-[27px]">
              {data.txt3}
            </h3>
          </div>
          <div className="md:w-[49%] w-full mb-10">
            <img
              src={data.ax4}
              className="w-full rounded-lg h-40 object-cover"
            />
            <h3 className="font-GrintoBold text-[18px] md:text-[20px] mt-5 leading-[27px]">
              {data.txt4}
            </h3>
          </div>
          <div className="md:w-[49%] w-full ">
            <img
              src={data.ax5}
              className="w-full rounded-lg h-40 object-cover"
            />
            <h3 className="font-GrintoBold text-[18px] md:text-[20px] mt-5 leading-[27px]">
              {data.txt5}
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog3Items2;
