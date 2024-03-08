import blog1 from "../../../Assets/images/blog-page/blog2/1.png";
import blog2 from "../../../Assets/images/blog-page/blog2/2.png";
import blog3 from "../../../Assets/images/blog-page/blog2/3.png";
import blog4 from "../../../Assets/images/blog-page/blog2/4.png";
import blog5 from "../../../Assets/images/blog-page/blog2/5.png";
import blog6 from "../../../Assets/images/blog-page/blog2/6.png";
import Blog2Items from "./Blog2Items";
const Blog2 = () => {
  const blog2Items = [
    {
      id: 1,
      title: "ENGINEERING & DEVELOPERS",
      text: "Discord Developers, Here’s to 2023 and What’s to Come!",
      img: blog1,
    },
    {
      id: 2,
      title: "HOW TO DISCORD",
      text: "5 Holiday Gift Ideas for your Discord Friends",
      img: blog2,
    },
    {
      id: 3,
      title: "PRODUCT & FEATURES",
      text: "Improving Our Mobile Experience",
      img: blog3,
    },
    {
      id: 4,
      title: "ENGINEERING & DEVELOPERS",
      text: "The DDevs Server Celebrates 250k Members!",
      img: blog4,
    },
    {
      id: 5,
      title: "HOW TO DISCORD",
      text: "Complete Your Look in the Shop, Now Open to All",
      img: blog5,
    },
    {
      id: 6,
      title: "HOW TO DISCORD",
      text: "Apps on Discord to Uplevel Your Competitive Gaming Skills",
      img: blog6,
    },
  ];
  return (
    <>
    <section className="flex flex-wrap w-[90%] mx-auto justify-between mt-20 ">
        {
            blog2Items && blog2Items.map((elem)=>(
                <Blog2Items data={elem} key={elem.id} />
            ))
        }
    </section>
    </>
  );
};

export default Blog2;
