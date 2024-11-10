import "./Blog3Items.css";
const Blog3Items = ({ data }) => {
  return (
    <>
      <section className="w-[90%] flex-col md:flex-row text-[#23272A] mx-auto flex justify-between rounded-lg bg-[#F6F6F6] mb-10 lg:p-12 p-6">
        <div className="md:w-[30%] w-full mb-5">
          <h4 className="font-GrintoBold text-[20px]">COLLECTION</h4>
          <h2 className="font-GrintoBlack leading-[40px] overflow-hidden my-3 text-[#5865F2] text-[30px] lg:text-[40px]">
            {data.txt0}
          </h2>
          <img src={data.ax1} className="w-full" />
          <p className="font-GgMedium text-[22px] my-7">{data.txt1}</p>
          <button className="blog-btn w-full md:w-fit">
            <span>View Collection</span>
          </button>
        </div>
        <div className="md:w-[65%] w-full">
          <img src={data.ax2} className="w-full rounded-lg" />
          <h2 className="font-GrintoBold text-[22px] mt-3">{data.txt2}</h2>
          <div className="flex flex-wrap md:flex-nowrap mt-10 justify-between">
            <div className="md:w-[32%] w-full mb-10">
              <img
                src={data.ax3}
                className="w-full rounded-lg h-40 object-cover"
              />
              <h3 className="font-GrintoBold text-[18px] lg:text-[20px] md:mt-5 mt-3 leading-[27px]">
                {data.txt3}
              </h3>
            </div>
            <div className="md:w-[32%] w-full mb-10">
              <img
                src={data.ax4}
                className="w-full rounded-lg h-40 object-cover"
              />
              <h3 className="font-GrintoBold text-[18px] lg:text-[20px] md:mt-5 mt-3 leading-[27px]">
                {data.txt4}
              </h3>
            </div>
            <div className="md:w-[32%] w-full">
              <img
                src={data.ax5}
                className="w-full rounded-lg h-40 object-cover"
              />
              <h3 className="font-GrintoBold text-[18px] lg:text-[20px] md:mt-5 mt-3 leading-[27px]">
                {data.txt5}
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog3Items;
