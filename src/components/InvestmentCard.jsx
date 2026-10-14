import { useState } from "react";

const InvestmentCard = () => {
  const [netIncome, setNetIncome] = useState("00.00");
  const [amount, setAmount] = useState("");

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="w-full mx-auto bg-[#12123a]">
      <div className="w-full mx-auto max-w-[360px] rounded-[7px] border border-[#344C86] bg-[#182653] pt-[16px] pb-[18px] px-[16px] text-white">

      {/* Investment heading */}
      <div className="flex items-center gap-[10px]">

        <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[5px] bg-[#60C9CE] text-[14px] font-semibold text-white">
          ?
        </div>

        <div>
          <p className="text-[16px] font-normal leading-[24px] text-white">
            Enter Amount to Invest
          </p>

          <p className="text-[16px] leading-[18px] mt-[-2px] text-[#858BA8]">
            Invest
          </p>
        </div>

      </div>


      {/* Amount input */}
      <div className="mt-[18px] flex h-[44px] items-center justify-between rounded-[5px] bg-[#202F5B] px-[14px]">

        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder="USD"
          className="
            w-full
            bg-transparent
            text-[14px] leading-[21px]
            text-white
            outline-none
            placeholder:text-[#858BA8]
          "
        />

        <span className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-[#60C9CE] text-[9px] font-bold text-[#182653]">
          $
        </span>

      </div>


      {/* Net Income */}
      <div className="mt-[20px] flex items-center justify-between border-b border-[#4A5270] pb-[11px]">

        <span className="text-[14px] leading-[16px] text-white">
          Net Income
        </span>

        {/* Directly editable */}
        <input
          type="text"
          value={`$${netIncome}`}
          onChange={(e) => {
            const value = e.target.value.replace(/[^0-9.]/g, "");
            setNetIncome(value);
          }}
          className="
            w-[75px]
            bg-transparent
            text-right
            text-[14px]
            leading-[16px]
            font-semibold
            text-white
            outline-none
          "
        />

      </div>


      {/* Maximum investment */}
      <div className="flex items-center justify-between border-b border-[#4A5270] pt-[12px] pb-[11px] ">

        <span className="text-[14px] leading-[16px] text-white">
          Maximum investment per user
        </span>

        <span className="text-[14px] leading-[16px] font-semibold text-white">
          $ 5565099.00
        </span>

      </div>


      {/* Your investment */}
      <div className="flex items-center justify-between border-b border-[#4A5270] pt-[12px] pb-[11px]">

        <span className="text-[14px] leading-[16px] text-white">
          Your investment in the product
        </span>

        <span className="text-[14px] leading-[16px] font-semibold text-white">
          ${amount || "00.00"}
        </span>

      </div>


      {/* Invest button */}
      <button
        type="button"
        className="
          mt-[24px]
          h-[50px]
          w-full
          rounded-[5px]
          bg-[#60C9CE]
          text-[11px]
          font-semibold
          text-white
          transition-all
          duration-300
          hover:-translate-y-[2px]
          hover:bg-[#72DDE2]
          hover:shadow-[0_6px_18px_rgba(96,201,206,0.3)]
          active:translate-y-0
        "
      >
        Invest now
      </button>

    </div>
    </div>
  );
};

export default InvestmentCard;