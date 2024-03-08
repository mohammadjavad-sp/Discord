const SafeItems = ({data}) => {
    return ( 
        <div className="flex flex-wrap lg:flex-nowrap w-[75%] lg:justify-between items-center mx-auto my-20 justify-center">
            <div className={`lg:w-[47%] w-full text-center lg:text-start lg:${data.order}`}>
                <h1 className="font-GrintoBold text-[40px] sm:text-[48px]">{data.title}</h1>
                <p className="font-GgBold text-[16px]">{data.text}</p>
                <button></button>
            </div>
            <div className="rounded-lg lg:w-[47%] w-full md:w-10/12">
                <img src={data.img} className="block mx-auto lg:mx-0" />
            </div>
        </div>
     );
}
 
export default SafeItems;