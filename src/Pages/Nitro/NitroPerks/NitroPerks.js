import perk1 from "../../../Assets/images/nitro-page/perks/1.svg";
import perk2 from "../../../Assets/images/nitro-page/perks/2.svg";
import perk3 from "../../../Assets/images/nitro-page/perks/3.svg";
import perk4 from "../../../Assets/images/nitro-page/perks/4.svg";
import perk11 from "../../../Assets/images/nitro-page/perks/11.svg";
import perk12 from "../../../Assets/images/nitro-page/perks/12.svg";
import perk14 from "../../../Assets/images/nitro-page/perks/14.svg";
import perk15 from "../../../Assets/images/nitro-page/perks/15.svg";
import perk16 from "../../../Assets/images/nitro-page/perks/16.svg";
import NitroPerksItems from "./NitroPerksItems";
import "./nitroPerksItems.css";
import NitroPerksItems2 from "./NitroPerksItems2";
import { useRef, useState } from "react";
const NitroPerks = () => {
  const [name, setName] = useState("Show all perks");
  const showMore = useRef();
  const showMoreHandler = (e) => {
    showMore.current.classList.toggle("hidden");
    showMore.current.classList.toggle("flex");
    if (name == "Show all perks") {
      setName("Show less perks");
    } else {
      setName("Show all perks");
    }
  };
  const nitroPerks1 = [
    {
      id: 1,
      txt: "From clips to pics, share away with bigger file uploads",
      img: perk1,
    },
    {
      id: 2,
      txt: "Stream apps and games in sweet, sweet HD",
      img: perk2,
    },
    {
      id: 3,
      txt: "Hype and meme with custom emoji anywhere",
      img: perk3,
    },
    {
      id: 4,
      txt: "Unlock perks for your communities with 2 Server Boosts",
      img: perk4,
    },
  ];
  const nitroPerks2 = [
    {
      id: 1,
      title: "Color Themes",
      text: "Add your vibe to Discord with unique theme colors.",
      img: perk11,
    },
    {
      id: 2,
      title: "Special Shop Perks",
      text: "Enjoy member pricing plus Nitro exclusive items in the Shop.",
      img: perk12,
    },
    {
      id: 3,
      title: "Custom Profiles",
      text: "Use a different avatar, profile theme, banner, and bio in each of your servers.",
      img: perk4,
    },
    {
      id: 4,
      title: "Custom Sounds Everywhere",
      text: "Use custom sounds and personalized entrance sounds across voice channels.",
      img: perk14,
    },
    {
      id: 5,
      title: "Unlimited Super Reactions",
      text: "Hype up the chat with action-packed, animated reactions.",
      img: perk15,
    },
    {
      id: 6,
      title: "More Backgrounds",
      text: "Customize video calls with your own video backgrounds.",
      img: perk16,
    },
  ];
  return (
    <>
      <section className="lg:mt-[460px] mt-[60px]">
        <h1 className="font-GrintoBold text-[32px] md:text-[48px] text-center ">
          Popular Nitro Perks
        </h1>
        <div className="flex flex-wrap w-[87%] mx-auto justify-between mt-7 gap-5">
          {nitroPerks1 &&
            nitroPerks1.map((elem) => (
              <NitroPerksItems nitroPerks1={elem} key={elem.id} />
            ))}
        </div>
      </section>
      <section
        className=" flex-wrap w-[87%] mx-auto justify-between hidden mt-7 gap-5 "
        ref={showMore}
      >
        {nitroPerks2 &&
          nitroPerks2.map((elem) => (
            <NitroPerksItems2 nitroPerks2={elem} key={elem.id} />
          ))}
      </section>
      <button className="seen-more font-GgBold" onClick={(e) => showMoreHandler(e)}>
        {name}
      </button>
    </>
  );
};

export default NitroPerks;
