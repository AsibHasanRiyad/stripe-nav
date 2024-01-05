import {
  FaAccusoft,
  FaAddressCard,
  FaBoxes,
  FaBuilding,
  FaCartPlus,
  FaFacebookMessenger,
  FaMarsStroke,
  FaMoneyBill,
  FaMoneyBillWave,
  FaPallet,
  FaPlus,
  FaRocket,
  FaRockrms,
} from "react-icons/fa";
const useCase = [
  {
    title: "SaaS",
    icon: <FaRockrms />,
  },
  {
    title: "Platforms",
    icon: <FaPallet />,
  },
  {
    title: "Ecommerce",
    icon: <FaCartPlus />,
  },
  {
    title: "Marketplaces",
    icon: <FaAccusoft />,
  },
  {
    title: "Crypto",
    icon: <FaRockrms />,
  },
  {
    title: "Creator Economy",
    icon: <FaMarsStroke />,
  },
  {
    title: "Embedded Finance",
    icon: <FaMoneyBill />,
  },
  {
    title: "Global Businesses",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "Finance Automation",
    icon: <FaAddressCard />,
  },
];

const SolutionsNav = () => {
  return (
    <div className=" text-base lg:text-sm">
      <div className=" px-6 pt-10 pb-6 ">
        {/* by stage */}
        <div>
          <h1>BY STAGE</h1>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-1 items-center py-4 border-b border-dashed border-b-slate-200">
            <h1 className=" flex items-center gap-2 cursor-pointer text-slate-500 hover:text-slate-900">
              <FaRocket /> <span className=" text-slate-900">Startups</span>{" "}
            </h1>
            <h1 className="flex items-center gap-2 cursor-pointer text-slate-500 mt-2 lg:mt-0 hover:text-slate-900">
              <FaBuilding /> <span className=" text-slate-900">Enterprise</span>{" "}
            </h1>
          </div>
        </div>
        {/* by use case */}
        <h1 className=" mt-4">BY USE CASE</h1>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-3 cursor-pointer mt-3">
          {useCase?.map((data, index) => (
            <div
              key={index}
              className=" flex gap-2 items-center cursor-pointer text-slate-500 hover:text-slate-900 "
            >
              <div>{data?.icon}</div>
              <p className=" text-slate-900">{data?.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* investigation and customer solution */}
      <div className=" py-5 px-5 mx-1.5 rounded-md bg-[#EFF3F8] mt-5">
        <p className=" uppercase mt-5">Investigation and customer solution</p>
        <div className=" grid grid-cols-2 gap-3 cursor-pointer mt-3">
          <p className=" flex items-center gap-2 cursor-pointer text-slate-500 hover:text-slate-900">
            {" "}
            <FaPlus /> <span className=" text-slate-900">App Marketplace</span>
          </p>
          <p className=" flex items-center gap-2 cursor-pointer text-slate-500 hover:text-slate-900">
            {" "}
            <FaBoxes />{" "}
            <span className=" text-slate-900">Partner Ecosystem</span>
          </p>
          <p className=" flex items-center gap-2 cursor-pointer text-slate-500 hover:text-slate-900">
            <FaFacebookMessenger />{" "}
            <span className=" text-slate-900">Professional Services</span>
          </p>
        </div>
      </div>
      <h1 className="h-1.5"></h1>
    </div>
  );
};

export default SolutionsNav;
