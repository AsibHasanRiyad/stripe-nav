import { IoIosArrowForward } from "react-icons/io";

const Banner = () => {
  return (
    <div>
      <h1 className=" rounded-full px-3 py-1 text-xs text-white bg-gray-300/30 w-fit mt-16 mb-8 ">
        Sessions 2024 • Early-bird registration now open
      </h1>
      <div className=" flex items-center justify-between lg:mt-10">
        <div>
          <h1 className=" text-[#111639] text-5xl md:text-8xl font-bold leading-[60px]">
            Financial <br /> infrastructure <br /> for the internet
          </h1>
          <p className=" text-[#425365] max-w-[420px] my-8">
            Millions of companies of all sizes use Stripe online and in person
            to accept payments, send payouts, automate financial processes, and
            ultimately grow revenue.
          </p>
        </div>
        <img
          className=" w-[28%] h-[20%] hidden lg:block -mt-20"
          src="https://i.ibb.co/vJg3Lmm/Screenshot-2024-01-05-at-4-09-27-PM-removebg-preview.png"
          alt=""
        />
      </div>
      <div className=" mt-0 lg:-mt-10 text-sm flex justify-start items-center gap-5">
        <button className=" flex items-center gap-1 text-white lg:hover:opacity-70 cursor-pointer bg-[#0A2540]  pr-3 pl-5 py-1.5 rounded-full ">
          Start now <IoIosArrowForward />
        </button>
        <button className=" flex items-center gap-1 text-[0A2540] ">
          Contact sales <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Banner;
