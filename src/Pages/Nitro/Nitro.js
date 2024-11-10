import Header from "./Header/Header";
import NitroPackages from "./NitroPackages/NitroPackages";
import NitroPerks from "./NitroPerks/NitroPerks";
import Plans from "./Plans/Plans";
import PreFooter from "./PreFooter/PreFooter";
import Questions from "./Questions/Questions";
import Footer from "../../Components/Footer/Footer"
const Nitro = () => {
  return (
    <>
      <Header />
      <NitroPackages />
      <NitroPerks />
      <Plans />
      <Questions/>
      <PreFooter/>
      <Footer/>
    </>
  );
};

export default Nitro;
