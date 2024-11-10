import ios from "../../../Assets/images/download-page/ios.svg";
import android from "../../../Assets/images/download-page/android.svg";
import linux from "../../../Assets/images/download-page/linux.svg";
import mac from "../../../Assets/images/download-page/mac.svg";
import OperatingSystemItems from "./OperatingSystemItems";
const OperatingSystem = () => {
  const operatingSystem = [
    {
      id: 1,
      name: "iOS",
      pic: ios,
    },
    {
      id: 2,
      name: "Android",
      pic: android,
    },
    {
      id: 3,
      name: "Linux",
      pic: linux,
    },
    {
      id: 4,
      name: "Mac",
      pic: mac,
    },
    {
      id: 5,
      name: "Feeling experimental?",
      text: "Try our Public Test Build and test new features before they launch.",
      btn:"Download Public Test Build"
    },
  ];
  return (
    <section className="mx-auto mt-[110px] flex flex-wrap justify-between w-[87%] xl:gap-5 lg:gap-[35px] gap-5">
      {operatingSystem && operatingSystem.map((elem) => (
        <OperatingSystemItems data={elem} />
      ))}
    </section>
  );
};

export default OperatingSystem;
