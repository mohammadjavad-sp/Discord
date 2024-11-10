const DiscordItems = ({ discordItems }) => {
  return (
    <section
      className={`lg:flex justify-between  items-center gap-10 overflow-hidden lg:px-24 py-14 ${discordItems.bgColor}`}
    >
      <img
        data-aos="fade-up"
        data-aos-duration="1000"
        src={discordItems.img}
        className={`lg:w-6/12 px-10 ${discordItems.order}`}
      />
      <div className="lg:w-6/12 overflow-hidden">
        <h1
          style={{ fontFamily: "Gg-Bold", fontSize: "45px" }}
          className="w-4/6 leading-tight overflow-hidden  mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {discordItems.title}
        </h1>
        <p
          className="mt-5 w-4/6 mx-auto text-justify"
          style={{ fontFamily: "Gg-Regular", fontSize: "20px" }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {discordItems.desc}
        </p>
      </div>
      
    </section>
  );
};

export default DiscordItems;
