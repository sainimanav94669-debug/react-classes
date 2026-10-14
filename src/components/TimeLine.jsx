const timelineData = [
  {
    icon: "▣",
    title: "Working Capital Loan",
    label: "Type of instrument",
  },
  {
    icon: "▭",
    title: "Pantera Exchange",
    label: "Transmitter",
  },
  {
    icon: "⇄",
    title: "Compass Bank",
    label: "Settlor entity",
  },
  {
    icon: "  $",
    title: "$ 5565099.00",
    label: "Total amount",
  },
  {
    icon: "▤",
    title: "2 months",
    label: "Estimated repayment date",
  },
];

export default function Timeline() {
  return (
     

     <div className="bg-[#12123A] pb-5 mt-[-2px]">
         <div
        className="
          relative
          w-full
          max-w-[740px] 
          bg-[#151B43]
          px-[21px]
          py-[18px] rounded-[10px]
      
          sm:pl-[20px]
          sm:pr-[38px]
          sm:pt-[18px]
          sm:pb-[33px]
        "
      >

        {/* Top small line */}
        <span
          className="
            absolute
            -top-[18px]
            left-1/2
            h-[18px]
            border-l
            border-dashed
            border-[#009FE3]
          "
        />

        {/* Left small line */}
        <span
          className="
            absolute
            top-[173px]
            -left-[22px]
            w-[22px]
            border-t
            border-dashed
            border-[#009FE3]
          "
        />

        {/* Header */}
        <div className="flex items-center justify-between gap-4">

          <h2 className="text-[20px]  font-semibold leading-[115%] text-white">
            Timeline
          </h2>

          <a
            href="#"
            className="
              text-[16px] 
              font-normal
              leading-[113%]
              text-[#59C8D0]
              transition-all
              duration-300
              hover:text-white
              hover:translate-x-1
            "
          >
            How does it works?
          </a>

        </div>


        {/* Dates */}
        <div className="mt-[20px] flex items-center justify-between">

          <span className="text-[14px] text-[#858BA8]">
            01/08/2023
          </span>

          <span className="text-[14px] text-[#858BA8]">
            30/08/2023
          </span>

        </div>


        {/* Progress */}
        <div className="mt-[7px] h-[12px] w-full rounded-full bg-[#202B57] overflow-hidden">

          <div
            className="
              h-full
              w-[43%]
              rounded-full
              bg-[#60C9CE]
            "
          />

        </div>


        {/* Amount */}
        <div className="mt-[12px] flex items-start justify-between">

          <div>
            <p className="text-[16px] leading-[113%]  text-white">
              $10.00
            </p>

            <p className="mt-[4px] text-[14px] leading-[115%] text-[#A5A9BD]">
              Initial public offering
            </p>
          </div>


          <div className="text-right">

            <p className="text-[16px] leading-[113%]  text-white">
              $5,565,500
            </p>

            <p className="mt-[4px] text-[14px] leading-[115%] text-[#A5A9BD]">
              Credit performance (DDC)
            </p>

          </div>

        </div>


        {/* Information */}
        <div
          className="
            mt-[49px]
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-x-[38px]
            gap-y-[29px]
          "
        >

          {timelineData.map((item, index) => (

            <div
              key={index}
              className="
                flex
                min-w-[209px]
                items-center
                gap-[10px]
                group
              "
            >

              {/* Icon */}
              <div
                className="
                  flex
                  h-[36px]
                  w-[36px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[9px]
                  bg-[#5BC8CE]
                  text-[20px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:bg-[#72DDE2]
                "
              >
                {item.icon}
              </div>


              {/* Text */}
              <div className="min-w-0">

                <p
                  className="
                    truncate
                    text-[14px]
                    font-normal
                    leading-[16px]
                    text-white
                  "
                >
                  {item.title}
                </p>

                <p
                  className=" 
                    text-[14px]
                    leading-[21px]
                    text-[#858BA8]
                  "
                >
                  {item.label}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div></div>

    
  );
}