import img1 from "../../../Assets/images/discordItems/1.svg";
import img2 from "../../../Assets/images/discordItems/2.svg";
import img3 from "../../../Assets/images/discordItems/3.svg";
import DiscordItems from "./DiscordItems";
const Discord = () => {
  let discordItems = [
    {
      id: 1,
      title: "Create an invite-only place where you belong",
      desc: "Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.",
      img: img1,
    },
    {
      id: 2,
      title: "Where hanging out is easy",
      desc: "Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.",
      img: img2,
      bgColor: "bg-[#F6F6F6]",
      order: "order-2",
    },
    {
      id: 3,
      title: "From few to a fandom",
      desc: "Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.",
      img: img3,
    },
  ];
  return (
    <section className="mt-[60px]">
      {discordItems &&
        discordItems.map((elem) => (
          <DiscordItems discordItems={elem} key={elem.id} />
        ))}
    </section>
  );
};

export default Discord;
