import sup1 from "../../../Assets/images/support-page/1.svg";
import sup2 from "../../../Assets/images/support-page/2.svg";
import sup3 from "../../../Assets/images/support-page/3.svg";
import sup4 from "../../../Assets/images/support-page/4.svg";
import sup5 from "../../../Assets/images/support-page/5.svg";
import sup6 from "../../../Assets/images/support-page/6.svg";
import sup7 from "../../../Assets/images/support-page/7.svg";
import sup8 from "../../../Assets/images/support-page/8.svg";
import sup9 from "../../../Assets/images/support-page/9.svg";
import sup10 from "../../../Assets/images/support-page/10.svg";
import SupItems from "./SupItems";
const SupItem = () => {
  const supItems = [
    {
      id: 1,
      title: "Announcements",
      desc: "We've got our ear to the ground. Here's what you need to know.",
      img: sup1,
    },
    {
      id: 2,
      title: "Discord's Interface",
      desc: "WHAT DOES THIS BUTTON DO!?!11",
      img: sup2,
    },
    {
      id: 3,
      title: "Account Settings",
      desc: "You're a special snowflake and so is your account.",
      img: sup3,
    },
    {
      id: 4,
      title: "Getting Started",
      desc: "Start off on the right foot! Not the left one!",
      img: sup4,
    },
    {
      id: 5,
      title: "Server Setup",
      desc: "Almost as exciting as interior decorating.",
      img: sup5,
    },
    {
      id: 6,
      title: "Community Programs",
      desc: "Bringing people together from all around the globe (and occasionally Mars)",
      img: sup6,
    },
    {
      id: 7,
      title: "Perks and Subscriptions",
      desc: "Please don't shop until you drop. Let us help.",
      img: sup7,
    },
    {
      id: 8,
      title: "Billing",
      desc: "That feel when you look at your bank account.",
      img: sup8,
    },
    {
      id: 9,
      title: "Trust & Safety",
      desc: "Keep things safe & sound for you and your buddies.",
      img: sup9,
    },
    {
      id: 10,
      title: "F.A.Q.s",
      desc: "All you can eat self-serve problem solving.",
      img: sup10,
    },
  ];
  return (
    <section className="w-full mt-[70px]">
      <div className="text-center lg:w-6/12 w-10/12 mx-auto">
        <h1 className="font-GgBold text-[32px]">
          Need help? We've got your back.
        </h1>
        <p className="font-GgMedium text-[20px] mt-3">
          From account settings to permissions, find help for everything Discord
          If you're new to Discord and looking for tips, check out our
          Beginner's Guide
        </p>
      </div>
      <div className="flex flex-wrap w-[95%] mx-auto gap-5 justify-center mt-12">
        {supItems &&
          supItems.map((elem) => <SupItems data={elem} key={elem.id} />)}
      </div>
    </section>
  );
};

export default SupItem;
