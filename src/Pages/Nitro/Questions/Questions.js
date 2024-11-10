import { NavLink } from "react-router-dom";
import dataQuests from "./DataQuests";
import { useEffect, useState } from "react";
import QuestionItems from "./QuestionItems";
import khargoosh from "../../../Assets/images/nitro-page/khargoosh.svg";
import setare from "../../../Assets/images/nitro-page/setare.svg";
const Questions = () => {
  let [quest, setQuest] = useState("");
  let [selectedTitle, setSelectedTitle] = useState("");
  let [result, setResult] = useState([]);
  let questCategory = [];
  const filterItems = () => {
    if (quest == "General") {
      questCategory = dataQuests.filter((elem) => elem.id > 0 && elem.id < 6);
      setResult(questCategory);
      setSelectedTitle("General");
    } else if (quest == "Payments") {
      questCategory = dataQuests.filter((elem) => elem.id > 5 && elem.id < 8);
      setResult(questCategory);
      setSelectedTitle("Payments");
    } else if (quest == "Gifting and Promotions") {
      questCategory = dataQuests.filter((elem) => elem.id > 7 && elem.id < 13);
      setResult(questCategory);
      setSelectedTitle("Gifting and Promotions");
    } else if (quest == "Other") {
      questCategory = dataQuests.filter((elem) => elem.id > 12 && elem.id < 16);
      setResult(questCategory);
      setSelectedTitle("Other");
    } else {
      questCategory = dataQuests.filter((elem) => elem.id > 0 && elem.id < 6);
      setResult(questCategory);
      setSelectedTitle("General");
    }
  };
  useEffect(() => {
    filterItems();
  }, [quest]);
  return (
    <>
      <section className="w-[87%] mx-auto">
        <img src={khargoosh} className="absolute right-0 lg:block hidden" />

        <h1 className="font-GrintoBold text-[32px] md:text-[48px] text-center mt-28">
          Frequently Asked Questions
        </h1>
        <ul
          onClick={filterItems}
          className="justify-center flex flex-wrap gap-9 my-8 text-[18px] text-[#72767D] "
        >
          <NavLink
            style={{
              borderBottom:
                selectedTitle === "General" ? "2px solid #5865F2" : null,
              color: selectedTitle === "General" ? "#5865F2" : null,
              fontFamily:
                selectedTitle === "General" ? "Gg-bold" : "Gg-Regular",
              padding: "3px 0",
            }}
            onClick={(e) => setQuest(e.target.innerText)}
          >
            General
          </NavLink>
          <NavLink
            style={{
              borderBottom:
                selectedTitle === "Payments" ? "2px solid #5865F2" : null,
              color: selectedTitle === "Payments" ? "#5865F2" : null,
              fontFamily:
                selectedTitle === "Payments" ? "Gg-bold" : "Gg-Regular",
              padding: "3px 0",
            }}
            onClick={(e) => setQuest(e.target.innerText)}
          >
            Payments
          </NavLink>
          <NavLink
            style={{
              borderBottom:
                selectedTitle === "Gifting and Promotions"
                  ? "2px solid #5865F2"
                  : null,
              color:
                selectedTitle === "Gifting and Promotions" ? "#5865F2" : null,
              padding: "3px 0",
              fontFamily:
                selectedTitle === "Gifting and Promotions"
                  ? "Gg-bold"
                  : "Gg-Regular",
            }}
            onClick={(e) => setQuest(e.target.innerText)}
          >
            Gifting and Promotions
          </NavLink>
          <NavLink
            style={{
              borderBottom:
                selectedTitle === "Other" ? "2px solid #5865F2" : null,
              color: selectedTitle === "Other" ? "#5865F2" : null,
              fontFamily: selectedTitle === "Other" ? "Gg-bold" : "Gg-Regular",
              padding: "3px 0",
            }}
            onClick={(e) => setQuest(e.target.innerText)}
          >
            Other
          </NavLink>
        </ul>
        <div className="">
          <img src={setare} className="absolute left-4 lg:block hidden" />
          {result &&
            result.map((elem) => <QuestionItems data={elem} key={elem.id} />)}
        </div>
      </section>
    </>
  );
};

export default Questions;
