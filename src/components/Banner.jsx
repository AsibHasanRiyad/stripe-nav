const Banner = () => {
  return (
    <div>
      <div className=" flex items-center justify-between mt-20 lg:mt-10">
        <div>
          <h1 className=" text-[#111639] text-5xl md:text-8xl font-bold leading-[60px]">
            Financial <br /> infrastructure <br /> for the internet
          </h1>
          <p className=" text-[#ecedee] max-w-[420px] my-8">
            Millions of companies of all sizes use Stripe online and in person
            to accept payments, send payouts, automate financial processes, and
            ultimately grow revenue.
          </p>
        </div>
        <img
          className=" w-[24%] h-[20%] hidden lg:block"
          src="https://i.ibb.co/vJg3Lmm/Screenshot-2024-01-05-at-4-09-27-PM-removebg-preview.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
