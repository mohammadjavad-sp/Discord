import ax1 from "../../../Assets/images/careers-page/experience/svgexport-10.svg";
import ax2 from "../../../Assets/images/careers-page/experience/svgexport-11.svg";
import ax3 from "../../../Assets/images/careers-page/experience/svgexport-12.svg";
import ax4 from "../../../Assets/images/careers-page/experience/svgexport-13.svg";
import ax5 from "../../../Assets/images/careers-page/experience/svgexport-14.svg";
import ax6 from "../../../Assets/images/careers-page/experience/svgexport-15.svg";
import ax7 from "../../../Assets/images/careers-page/experience/svgexport-16.svg";
import ax8 from "../../../Assets/images/careers-page/experience/svgexport-17.svg";
import ax9 from "../../../Assets/images/careers-page/experience/svgexport-18.svg";
import ExperienceItems from "./ExperienceItems";
const Experience = () => {
  const experienceItems = [
    {
      id: 1,
      ax: ax1,
      title: "Discord HQ",
      desc: "Our platform is our headquarters! Because we believe great work isn't tied to a physical space, most of our roles offer flexibility — whether it's from the comfort of your home (in approved locations), an inspiring office setting or a combo of both! No matter where your desk lives, we offer generous support to help you remain productive and engaged.",
    },
    {
      id: 2,
      ax: ax2,
      title: "Grow together",
      desc: "Look forward to developing both professionally and personally alongside your colleagues at Discord. All of our managers go through a leadership program, and we offer diverse trainings for everyone. No matter what your interests or skills are, there's a place on our platform for you to find and build belonging.",
    },
    {
      id: 3,
      ax: ax3,
      title: "Money matters",
      desc: "Discord strives to offer fair and competitive compensation packages, including equity. You'll have room to grow and be rewarded based on your contributions and impact at the company.  Take advantage of our retirement offerings (including 401k matching in the U.S.) to meet your financial goals.",
    },
    {
      id: 4,
      ax: ax4,
      title: "Health benefits",
      desc: "At Discord, we health-care about you! We offer flexible health plans that cover both physical and mental healthcare.",
    },
    {
      id: 5,
      ax: ax5,
      title: "Family support",
      desc: "Spend some quality time with the next generation with parental leave, fertility, adoption, and surrogacy benefits.",
    },
    {
      id: 6,
      ax: ax6,
      title: "R&R",
      desc: "Stay refreshed with four weeks of PTO, 14+ paid holidays and flexible sick time (which includes mental health days).",
    },
    {
      id: 7,
      ax: ax7,
      title: "Gender-affirming care",
      desc: "Many medical insurance providers consider much of the treatment vital to one’s gender transition as cosmetic. We don’t. Use up to $20,000 for transition-related procedures.",
    },
    {
      id: 8,
      ax: ax8,
      title: "Wellness on us",
      desc: "Take advantage of a quarterly stipend for your gym membership or other activities to keep you feeling great. Plus virtual yoga every week!",
    },
    {
      id: 9,
      ax: ax9,
      title: "Giving back",
      desc: "Whatever social cause you’re passionate about, take a day (or two) off to make an impact. While you're at it, take advantage of $1,000/year in donation matching to charitable organizations!",
    },
  ];
  return (
    <section className="bg-[#5865F2] pb-24">
      <h2 className="font-GrintoBold text-white w-[82%] mx-auto text-[32px] md:text-[48px] my-10">
        Experience Life @ Discord
      </h2>
      <div className="flex flex-wrap w-[82%] mx-auto !gap-y-5 justify-between">
        {experienceItems &&
          experienceItems.map((elem) => (
            <ExperienceItems data={elem} key={elem.id} />
          ))}
      </div>
    </section>
  );
};

export default Experience;
