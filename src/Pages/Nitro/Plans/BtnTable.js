const BtnTable = ({text}) => {
  return (
    <a
      className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 cursor-pointer font-GgBold mx-1 text-wrap sm:text-nowrap"
      type="btn"
    >
      <span className="block rounded-sm bg-white md:px-4 md:py-2 px-2 py-2 lg:text-[16px]  group-hover:bg-transparent">
        {text}
      </span>
    </a>
  );
};

export default BtnTable;
