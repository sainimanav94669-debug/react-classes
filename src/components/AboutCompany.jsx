import Paragraph from "./common/Paragraph";

const documents = [
  {
    icon: "X",
    title: "Sales report",
    year: "2022-2023",
  },
  {
    icon: "PDF",
    title: "Orinoco Ferrominera wag...",
    year: "2022-2023",
  },
];

const AboutCompany = () => {
  return (
    <div className=" bg-[#12123A] lg:pb-[65px]  mt-[-2px]">

      <div
        className="
          w-full
          max-w-[740px] 
          rounded-[10px]
          bg-[#181E46]
          pl-[20px] pr-[30px]
          pt-[18px] pb-[17px]
           
        "
      >

        {/* Heading */}
        <h2
          className="
            text-[16px]
            sm:text-[18px]
            md:text-[20px]
            font-semibold
            leading-[115%]
            text-white
          "
        >
          About company
        </h2>


        {/* Content */}
        <div className="mt-[15px]">

          {/* Short description */}
          <p
            className="
              text-[14px]
              sm:text-[14px]
              font-normal
              leading-[115%]
              text-white
            "
          >
            Dictum sit lobortis hendrerit morbi leo amet sapien ipsum blandit.
          </p>


          {/* Main description */}
          {/* <p
            className="
              mt-[4px]
              max-w-[840px]
              text-[14px]
              sm:text-[14px]
              font-normal
              leading-[150%]
              text-[#858BA8]
            "
          >
            Arcu fringilla tincidunt mauris ut risus massa ipsum. Metus
            adipiscing sed leo pharetra sed. Ut nulla libero vel ipsum
            adipiscing purus posuere. Dui pulvinar id enim tristique habitasse
            lobortis. Aliquam et et orci ultrices interdum rhoncus arcu mi
            quis. Arcu fringilla tincidunt mauris ut risus massa ipsum. Metus
            adipiscing sed leo pharetra sed. Ut nulla libero vel ipsum
            adipiscing purus posuere. Dui pulvinar id enim tristique habitasse
            lobortis. Aliquam et et orci ultrices rhoncus arcu mi quis.
          </p> */}
          <Paragraph className={' text-[#858BA8]!'} text={` Arcu fringilla tincidunt mauris ut risus massa ipsum. Metus
            adipiscing sed leo pharetra sed. Ut nulla libero vel ipsum
            adipiscing purus posuere. Dui pulvinar id enim tristique habitasse
            lobortis. Aliquam et et orci ultrices interdum rhoncus arcu mi
            quis. Arcu fringilla tincidunt mauris ut risus massa ipsum. Metus
            adipiscing sed leo pharetra sed. Ut nulla libero vel ipsum
            adipiscing purus posuere. Dui pulvinar id enim tristique habitasse
            lobortis. Aliquam et et orci ultrices rhoncus arcu mi quis.`}/>

        </div>


        {/* Documents */}
        <div
          className="
            mt-[16px]
            flex
            flex-col
            sm:flex-row
            sm:items-center
            gap-[22px]
            sm:gap-[70px]
            md:gap-[120px]
          "
        >

          {documents.map((document, index) => (

            <div
              key={index}
              className="
                flex
                items-center
                gap-[12px]
                group
                cursor-pointer
              "
            >

              {/* Document icon */}
              <div
                className="
                  flex
                  h-[36px]
                  w-[36px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[9px]
                  bg-[#60C9CE]
                  text-white
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:-translate-y-1
                "
              >
                <span
                  className={
                    document.icon === "PDF"
                      ? "text-[10px] font-bold"
                      : "text-[17px] font-semibold"
                  }
                >
                  {document.icon}
                </span>
              </div>


              {/* Document text */}
              <div>

                <p
                  className="
                    max-w-[180px]
                    truncate
                    text-[14px]
                    sm:text-[14px]
                    font-normal
                    leading-[130%]
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-[#60C9CE]
                  "
                >
                  {document.title}
                </p>

                <p
                  className=" 
                    text-[14px]
                    leading-[130%]
                    text-[#858BA8]
                  "
                >
                  {document.year}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default AboutCompany;