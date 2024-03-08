import blogPic1 from "../../../Assets/images/blog-page/blog1/1.png"
import blogPic2 from "../../../Assets/images/blog-page/blog1/2.png"
const Blog1 = () => {
    return ( 
        <section className="flex flex-col md:flex-row w-[90%] gap-5 mx-auto mt-[50px]">
            <div className="md:w-[49%] cursor-pointer mb-5 md:mb-0">
                <img src={blogPic1} className="rounded-lg" />
                <h3 className="text-[18px]  font-GrintoBlack text-[#404EED] mt-5">ENGINEERING & DEVELOPERS</h3>
                <p className="text-[24px] font-GrintoBold text-[#23272A]">How Discord Moved Engineering to Cloud Development Environments</p>
            </div>
            <div className="md:w-[49%] cursor-pointer">
                <img src={blogPic2} className="rounded-lg " />
                <h3 className="text-[18px] font-GrintoBlack text-[#404EED] mt-5" >POLICY & SAFETY</h3>
                <p className="text-[24px] font-GrintoBold text-[#23272A]">How We're Evolving Our Safety Architecture For The Digital Services Act</p>
            </div>
        </section>
     );
}
 
export default Blog1;