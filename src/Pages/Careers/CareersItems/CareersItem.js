import pic1 from "../../../Assets/images/careers-page/11.webp";
import pic2 from "../../../Assets/images/careers-page/12.webp";
import pic3 from "../../../Assets/images/careers-page/13.webp";
import CareersItems from "./CareersItems";
import "./CareersItems.css";
const CareersItem = () => {
  const careersItems = [
    {
      id: 1,
      title: "Work with people who care.",
      desc: "Our people, much like our users, can’t be put in a box. The quirky and unique cast of characters that work together at Discord may be intrepid travelers from all walks of life, but there’s a reason we’ve all ended up here. We care about each other, the work we do, and the future we’re building — like, a lot. We pull our own weight and treat each other with extreme empathy. No cogs or jerks allowed.",
      pic: pic1,
    },
    {
      id: 2,
      title: "Join a culture that builds belonging.",
      desc: "Imagine a workplace where everyone belongs. At Discord, we aren't just imagining this place, we’re creating it. We’re building an inclusive, diverse, and welcoming space that reflects the world we live, play, and work in — because we know that with diversity comes better ideas, a better product, a better work environment, and ultimately a better company.",
      pic: pic2,
      order: "order-2",
    },
    {
      id: 3,
      title: "Internships",
      desc: "Join us for an unforgettable summer at Discord! You’ll be working on real features that impact millions of people, receive close mentorship, and learn from leaders in the industry. We are looking for undergraduate and graduate students of all levels. Check out our listings, and read more about our program.",
      pic: pic3,
    },
  ];
  return (
    <>
      <div className="md:text-center w-[90%] text-start mx-auto md:mt-20 mt-12 text-[#23272A]">
        <h1 className="font-GrintoBold text-[32px] md:text-[42px]">
          Come build belonging with us
        </h1>
        <p className="font-GgRegular text-[22px] md:mt-14 mt-8">
          Discord is working toward an inclusive world where no one feels like
          an outsider, where genuine human connection is a click, text chat, or
          voice call away. A place where everyone can find belonging.
          Challenging? Heck yes. Rewarding? Double heck yes. It’s a mission that
          gives us the chance to positively impact millions of people all over
          the world.
        </p>
        <p className="font-GgRegular text-[22px] mt-6">
          So if this strikes a chord, and you’re equally comfortable
          communicating in memes and gifs as you are in code or decks, come
          build belonging with us!
        </p>
      </div>
      <section className="w-[90%] mx-auto mt-20">
        {careersItems &&
          careersItems.map((elem) => (
            <CareersItems data={elem} key={elem.id} />
          ))}
      </section>
      <div className="stars text-center w-[75%] mx-auto mt-9 pt-8">
        <h2 className="font-GrintoBold text-[32px]">Want to find out more?</h2>
        <p className="font-GgRegular text-[22px] mt-4">
          Check out our inclusion, diversity and purpose efforts, or learn more
          about the Life @ Discord experience!
        </p>
      </div>
    </>
  );
};

export default CareersItem;
