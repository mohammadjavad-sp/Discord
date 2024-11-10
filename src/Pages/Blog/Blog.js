import Blog1 from "./Blog1/Blog1";
import Blog2 from "./Blog2/Blog2";
import Blog3 from "./Blog3/Blog3";
import Header from "./Header/Header";
import Footer from "../../Components/Footer/Footer";

const Blog = () => {
  return (
    <>
      <Header />
      <Blog1 />
      <Blog2 />
      <Blog3 />
      <Footer />
    </>
  );
};

export default Blog;
