import { Carousel } from "flowbite-react";
import slide1 from "../../../Assets/images/careers-page/slider1/1.webp";
import slide2 from "../../../Assets/images/careers-page/slider1/2.webp";
import slide3 from "../../../Assets/images/careers-page/slider1/3.webp";
import slide4 from "../../../Assets/images/careers-page/slider1/4.webp";
import slide5 from "../../../Assets/images/careers-page/slider1/5.webp";
import slide6 from "../../../Assets/images/careers-page/slider1/6.webp";
import SliderItems from "./SliderItems";
import "./Slider.css";
const Slider = () => {
  const sliderItems = [
    {
      id: 1,
      img: slide1,
      title: "BAAM",
      txt: "The BAAM (Black & African American Movement) ERG is an intentional place of warmth, unity and understanding for members of the Black community at Discord. The group aims to develop leaders and changemakers, empower and give back to the community, and diversify the tech industry through training, events, volunteering and more.",
    },
    {
      id: 2,
      img: slide2,
      title: "AAPI",
      txt: "The AAPI (Asian American and Pacific Islander) ERG empowers Discord’s Asian-identifying employees and allies by honoring the richness and diversity of the Asian community. One of the group’s tentpole initiatives is hosting AAPI Heritage Month — a full month of programming that advocates for cultural diversity, education and career development. Celebrations include Lunch & Learn sessions, group gatherings, workshops and creator highlights featuring AAPI employees, communities and artists!",
    },
    {
      id: 3,
      img: slide3,
      title: "Jew-ish",
      txt: "Jew-ish at Discord is a place for Jews, non-Jews and anyone with an interest in Jewish culture, history, nosh, spirituality and more. It's a community within Discord that brings people together and enables them to share their religion and culture with each other, the Discord employee community and Jewish community at large.",
    },
    {
      id: 4,
      img: slide4,
      title: "Parents",
      txt: "The Parents ERG at Discord is a community focused on providing support, resources and fellowship for parents and caregivers. Besides being a safe space for discussing anything related to being a parent, like getting advice on pre-schools in the Bay Area or venting about a newborn’s sleep schedule, the group hosts programs for helping parents and caregivers at Discord best navigate the complicated landscape of finances, benefits and strategies specifically related to raising children.",
    },
    {
      id: 5,
      img: slide5,
      title: "La Cafetería",
      txt: "La Cafetería is Discord’s’ Latinx ERG. Many of its members are the first in their communities or families to enter tech, and the group has made it their collective mission to build a space to enable Latinx folks to thrive without compromising their identity.",
    },
    {
      id: 6,
      img: slide6,
      title: "Women at Discord",
      txt: "The Discord Women's ERG is a place where women and underrepresented genders can gather to discuss topics that impact them, get inspired by great work, offer support and guidance, and develop skills that help build successful careers. The group focuses on driving change that improves everyone's ultimate well-being by making systemic change that makes the table bigger for everyone.",
    },
  ];
  const themeSlider = {
    root: {
      base: "relative h-full w-full",
      leftControl:
        "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
      rightControl:
        "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none",
    },
    indicators: {
      active: {
        off: "bg-blue-100 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
        on: "bg-blue-500 dark:bg-gray-800",
      },
      base: "h-3 w-3 rounded-full",
      wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
    },
    item: {
      base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
      wrapper: {
        off: "w-full flex-shrink-0 transform cursor-default snap-center",
        on: "w-full flex-shrink-0 transform cursor-grab snap-center",
      },
    },
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
    },
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
      snap: "snap-x",
    },
  };
  return (
    <section className="bg-[#f6f6f6] px-5 md:px-16">
      <h2 className="font-GrintoBold text-[32px] md:text-[42px]">
        Inclusion, Diversity and Purpose at Discord
      </h2>
      <div className="flex gap-10 md:gap-20 flex-col md:flex-row mt-8 justify-between">
        <div className="md:w-6/12 w-full">
          <h3 className="font-GrintoBold text-[24px] md:text-[34px]">
            Belonging from the Inside Out
          </h3>
          <p className="text-[21px] mt-4 text-justify font-GgRegular">
            Our internal programs include but are not limited to unconscious
            bias training, employee resource groups, inclusive hiring practices,
            diversity sourcing strategies, and partnerships with high-impact
            organizations that drive equity. As we build our external strategy,
            we empower our employees to be a force for good in the world and
            support causes they are passionate about.
          </p>
        </div>
        <div className="md:w-6/12 w-full">
          <h3 className="font-GrintoBold text-[24px] md:text-[34px]">
            Our Employee Resource Groups
          </h3>
          <p className="text-[21px] mt-4 text-justify font-GgRegular">
            Discord’s Employee Resource Groups (ERGs) are employee-led
            organizations centered around belonging. Led by our Inclusion,
            Diversity & Purpose team, Discord empowers our ERGs to create an
            inclusive space where members of underrepresented groups and allies
            can come together to celebrate our diverse communities. Our ERG
            leads have 10% allocated work time to help build belonging through
            promoting education and awareness, offering learning opportunities,
            and driving advocacy for their communities in and outside of
            Discord.
          </p>
        </div>
      </div>
      <div className=" my-20">
        <Carousel slide={false} theme={themeSlider} className="slider lg:!h-[400px] ">
          {sliderItems &&
            sliderItems.map((elem) => (
              <SliderItems data={elem} key={elem.id} />
            ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Slider;
