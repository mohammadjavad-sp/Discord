import pic1 from "../../../Assets/images/blog-page/blog3/1.svg";
import pic2 from "../../../Assets/images/blog-page/blog3/2.png";
import pic3 from "../../../Assets/images/blog-page/blog3/3.png";
import pic4 from "../../../Assets/images/blog-page/blog3/4.png";
import pic5 from "../../../Assets/images/blog-page/blog3/5.png";
import pic6 from "../../../Assets/images/blog-page/blog3/6.svg";
import pic7 from "../../../Assets/images/blog-page/blog3/7.jpg";
import pic8 from "../../../Assets/images/blog-page/blog3/8.png";
import pic9 from "../../../Assets/images/blog-page/blog3/9.png";
import pic10 from "../../../Assets/images/blog-page/blog3/10.png";
import pic11 from "../../../Assets/images/blog-page/blog3/11.svg";
import pic12 from "../../../Assets/images/blog-page/blog3/12.png";
import pic13 from "../../../Assets/images/blog-page/blog3/13.png";
import pic14 from "../../../Assets/images/blog-page/blog3/14.png";
import pic15 from "../../../Assets/images/blog-page/blog3/15.png";
import pic16 from "../../../Assets/images/blog-page/blog3/16.svg";
import pic17 from "../../../Assets/images/blog-page/blog3/17.jpg";
import pic18 from "../../../Assets/images/blog-page/blog3/18.png";
import pic19 from "../../../Assets/images/blog-page/blog3/19.png";
import pic20 from "../../../Assets/images/blog-page/blog3/20.png";
import pic21 from "../../../Assets/images/blog-page/blog3/21.svg";
import pic22 from "../../../Assets/images/blog-page/blog3/22.png";
import pic23 from "../../../Assets/images/blog-page/blog3/23.png";
import pic24 from "../../../Assets/images/blog-page/blog3/24.png";
import pic25 from "../../../Assets/images/blog-page/blog3/25.png";
import pic26 from "../../../Assets/images/blog-page/blog3/26.svg";
import pic27 from "../../../Assets/images/blog-page/blog3/27.png";
import pic28 from "../../../Assets/images/blog-page/blog3/28.png";
import pic29 from "../../../Assets/images/blog-page/blog3/29.png";
import pic30 from "../../../Assets/images/blog-page/blog3/30.png";
import Blog3Items from "./Blog3Items";
import Blog3Items2 from "./Blog3Items2";
const Blog3 = () => {
  const blog3Items = [
    {
      id: 1,
      txt0: "PRODUCT & FEATURES",
      ax1: pic1,
      txt1: "Announcements, new features, and general info about the Discord app.",
      ax2: pic2,
      txt2: "Discord Update: December 13, 2023 Changelog",
      ax3: pic3,
      txt3: "Improving Our Mobile Experience",
      ax4: pic4,
      txt4: "Discord Update: October 19, 2023 Changelog",
      ax5: pic5,
      txt5: "Avatar Decorations & Profile Effects: Collect and Keep the Newest Styles",
    },
    {
      id: 2,
      txt0: "COMMUNITY",
      ax1: pic6,
      txt1: "Stories, spotlights, and behind the scenes from the heart and soul of Discord: the community.",
      ax2: pic7,
      txt2: "A Devilishly Discord Halloween Celebration Looms…  👻",
      ax3: pic8,
      txt3: "Two Lovely Hispanic & Latinx-owned Discord Communities",
      ax4: pic9,
      txt4: "Celebrating Disability Pride Month With Two Inclusive Communities",
      ax5: pic10,
      txt5: "Bridging Mental Health Gaps for Gen Z",
    },
    {
      id: 3,
      txt0: "HOW TO DISCORD",
      ax1: pic11,
      txt1: "Tutorials and guides to help with Discord and other topics of interest.",
      ax2: pic12,
      txt2: "5 Holiday Gift Ideas for your Discord Friends",
      ax3: pic13,
      txt3: "Complete Your Look in the Shop, Now Open to All",
      ax4: pic14,
      txt4: "Ways to Customize Your Discord Experience",
      ax5: pic15,
      txt5: "Apps on Discord to Uplevel Your Competitive Gaming Skills",
    },
    {
      id: 4,
      txt0: "DISCORD HQ",
      ax1: pic16,
      txt1: "General company updates about what Discord is up to at HQ.",
      ax2: pic17,
      txt2: "@Everyone’s a Member: Get Two Weeks of Nitro on Us",
      ax3: pic18,
      txt3: "How We’re Making Discord the Best Place to Hang Out and Have Fun with Your Friends",
      ax4: pic19,
      txt4: "What It’s Like to Be a Discord Intern",
      ax5: pic20,
      txt5: "Get a Month of Discord Nitro On Us During Summer BOGO",
    },
  ];
  const blog3Items2 = [
    {
      id: 1,
      txt0: "POLICY & SAFETY",
      ax1: pic21,
      txt1: "General tips and insights from Discord's Policy & Safety teams who enable users and communities to be safe on the platform.",
      ax2: pic22,
      txt2: "How We're Evolving Our Safety Architecture For The Digital Services Act",
      ax3: pic23,
      txt3: "Supporting Youth Mental Health: Discord's Partnership with Crisis Text Line",
      ax4: pic24,
      txt4: "Gen Z Mental Health: Empowering Conversation in an Uncertain World",
      ax5: pic25,
      txt5: "Stay Connected With Your Teen Using Discord’s Family Center",
    },
    {
      id: 2,
      txt0: "ENGINEERING & DEVELOPERS",
      ax1: pic26,
      txt1: "Resources and news for engineers and Discord app developers.",
      ax2: pic27,
      txt2: "How Discord Moved Engineering to Cloud Development Environments",
      ax3: pic28,
      txt3: "Discord Developers, Here’s to 2023 and What’s to Come!",
      ax4: pic29,
      txt4: "How Discord Modernized MFA with WebAuthn",
      ax5: pic30,
      txt5: "pytest daemon: 10X Local Test Iteration Speed",
    },
  ];
  return (
    <>
      {blog3Items &&
        blog3Items.map((elem) => <Blog3Items data={elem} key={elem.id} />)}
      {blog3Items2 &&
        blog3Items2.map((elem) => <Blog3Items2 data={elem} key={elem.id} />)}
    </>
  );
};

export default Blog3;
