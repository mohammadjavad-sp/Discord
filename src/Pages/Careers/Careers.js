import CareersItem from "./CareersItems/CareersItem";
import Experience from "./Experience/Experience";
import FilterCareers from "./FilterCareers/FilterCareers";
import Header from "./Header/Header";
import PreFooter from "./PreFooter/PreFooter";
import Slider from "./Slider/Slider";
import Footer from "../../Components/Footer/Footer"
const Careers = () => {
    return ( 
        <>
        <Header/>
        <CareersItem/>
        <FilterCareers/>
        <Slider/>
        <Experience/>
        <PreFooter/>
        <Footer/>
        </>
     );
}
 
export default Careers;