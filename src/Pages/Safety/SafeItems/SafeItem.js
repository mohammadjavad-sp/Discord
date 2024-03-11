import safe1 from "../../../Assets/images/safety-page/1.svg";
import safe2 from "../../../Assets/images/safety-page/2.svg";
import safe3 from "../../../Assets/images/safety-page/3.svg";
import safe4 from "../../../Assets/images/safety-page/4.svg";
import safe5 from "../../../Assets/images/safety-page/5.svg";
import safe7 from "../../../Assets/images/safety-page/7.svg";
import SafeItems from "./SafeItems";
const SafeItem = () => {
  const safeItems = [
    {
      id: 1,
      title: "Safety Library",
      text: "Everything you could ever want to know about safety on Discord. Whether you’re a user, a moderator, or a parent, discover all of our tools and resources and how to use them.",
      img: safe1,
    },
    {
      id: 2,
      title: "Privacy Hub",
      text: "Privacy is an essential part of feeling safe. No matter what, we build privacy into our products, and we will always try to let you know what's happening where and when. Learn more about what that means, including the data we collect and the tools to put you in control.",
      img: safe2,
      order: "order-2",
    },
    {
      id: 3,
      title: "Parent Hub",
      text: " Learn more about what we’re doing to help your teen stay safer on our platform, explore our Family Center tool, and download our Parent's Guide to Discord.",
      img: safe3,
    },
    {
      id: 4,
      title: "Transparency Hub",
      text: "Explore data, trends, and analysis into the work done to help keep people on Discord safe. Transparency reports cover information about enforcement of our platform policies, as well as our response to legal, emergency, and intellectual property removal requests.",
      img: safe4,
      order: "order-2",
    },
    {
      id: 5,
      title: "Safety News Hub",
      text: "The latest news and updates on Discord’s Safety, Privacy, and Policy initiatives.",
      img: safe5,
    },
    {
      id: 6,
      title: "Policy Hub",
      text: "Learn about our Community Guidelines, developed to help keep people safe and make Discord the best place to hang out with friends.",
      img: safe3,
      order: "order-2",
    },
    {
      id: 7,
      title: "Teen Charter",
      text: "We work to center youth voices in our product design and policies. Now we're collaborating with teens around the world on a charter to make Discord a better place to hang out.",
      img: safe7,
    },
  ];
  
  return (
    <>

      <section className="bg-[#f6f6f6] mt-16">
        {safeItems &&
          safeItems.map((elem) => <SafeItems data={elem} key={elem.id} />)}
      </section>
    </>
  );
};

export default SafeItem;
