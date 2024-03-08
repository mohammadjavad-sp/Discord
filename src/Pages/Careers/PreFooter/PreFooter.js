import pic1 from "../../../Assets/images/careers-page/slider2/1.webp";
import pic2 from "../../../Assets/images/careers-page/slider2/2.webp";
import pic3 from "../../../Assets/images/careers-page/slider2/3.webp";
import pic4 from "../../../Assets/images/careers-page/slider2/4.webp";
import pic5 from "../../../Assets/images/careers-page/slider2/5.webp";
import pic6 from "../../../Assets/images/careers-page/slider2/6.webp";
import pic7 from "../../../Assets/images/careers-page/slider2/7.webp";
import pic8 from "../../../Assets/images/careers-page/slider2/8.webp";
import pic9 from "../../../Assets/images/careers-page/slider2/9.webp";
import pic10 from "../../../Assets/images/careers-page/slider2/10.webp";
import pic11 from "../../../Assets/images/careers-page/slider2/11.webp";
import pic12 from "../../../Assets/images/careers-page/slider2/12.webp";
import PreFooterItems from "./PreFooterItems";
import { Carousel } from "flowbite-react";
const PreFooter = () => {
'use client';
  const preFooterItems = [
    {
      id: 1,
      pic: pic1,
    },
    {
      id: 2,
      pic: pic2,
    },
    {
      id: 3,
      pic: pic3,
    },
    {
      id: 4,
      pic: pic4,
    },
    {
      id: 5,
      pic: pic5,
    },
    {
      id: 6,
      pic: pic6,
    },
    {
      id: 7,
      pic: pic7,
    },
    {
      id: 8,
      pic: pic8,
    },
    {
      id: 9,
      pic: pic9,
    },
    {
      id: 10,
      pic: pic10,
    },
    {
      id: 11,
      pic: pic11,
    },
    {
      id: 12,
      pic: pic12,
    },
  ];
  return (
    <section className=" py-24 bg-[#2C2F33]">
      <div className="mx-auto w-[90%] lg:w-[60%] h-[400px] ">
        <Carousel indicators={false}>
          {preFooterItems &&
            preFooterItems.map((elem) => (
              <PreFooterItems data={elem} key={elem.id} />
            ))}
        </Carousel>
      </div>
    </section>
  );
};

export default PreFooter;
