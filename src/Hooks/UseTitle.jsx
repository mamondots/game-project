

const UseTitle = ({title,colorTitle,subTitle,titleImg}) => {
    return (
        <div className=" flex flex-col items-center">
            <div className="flex items-center space-x-1 text-title lg:text-3xl md:text-3xl text-2xl font-bold py-2">
              <h2 className="text-title">{title}</h2>
              <h2 className="text-[#E4A101] text-title">{colorTitle}</h2>
            </div>
            <p className="text-[#6c6c6c] font-medium">{subTitle}</p>
            <img className="py-6" src={titleImg} alt="" />
        </div>
    );
};

export default UseTitle;