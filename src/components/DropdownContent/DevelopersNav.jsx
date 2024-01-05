import { FaBookOpen, FaCode, FaCodeBranch, FaNewspaper } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

const DevelopersNav = () => {
  return (
    <div>
      <div className=" px-8 pt-10">
        {/* Documentation
         */}

        <div className="text-slate-500 hover:text-slate-900 cursor-pointer">
          <h1 className=" flex items-center gap-4">
            <FaBookOpen />
            Documentation{" "}
          </h1>
          <p className=" pl-8">Start integrating Stripe’s products and tools</p>
        </div>
        {/* middle div */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 py-5 pl-8 text-sm text-slate-500">
          <div className=" space-y-3 cursor-pointer">
            <h1 className=" text-base">GET STARTED</h1>
            <p>Prebuilt checkout</p>
            <p>Libraries and SDKs </p>
            <p>App integrations </p>
            <p>Code samples</p>
          </div>
          <div className=" space-y-3 cursor-pointer mt-5 lg:mt-0">
            <h1 className=" text-base ">GUIDES</h1>
            <p>Accept online payments </p>
            <p>Manage subscriptions </p>
            <p>Send payments </p>
            <p>Set up in-person payments</p>
          </div>
        </div>
      </div>

      {/* investigation and customer solution */}
      <div className=" py-5 px-5 mx-1.5 rounded-md bg-[#EFF3F8] mt-5">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3 cursor-pointer mt-3">
          <p className=" flex items-center gap-2 cursor-pointer text-slate-500 hover:text-slate-900">
            {" "}
            <MdMenu />{" "}
            <span className=" text-slate-900">Full API Reference</span>
          </p>
          <p className=" flex items-center gap-2 cursor-pointer text-slate-500 hover:text-slate-900">
            {" "}
            <FaCode /> <span className=" text-slate-900">API Changelog</span>
          </p>
          <p className=" flex items-center gap-2 cursor-pointer text-slate-500 hover:text-slate-900">
            <FaNewspaper /> <span className=" text-slate-900">API Status</span>
          </p>
          <p className=" flex items-center gap-2 cursor-pointer text-slate-500 hover:text-slate-900">
            <FaCodeBranch />{" "}
            <span className=" text-slate-900">Build on Stripe Apps </span>
          </p>
        </div>
      </div>
      <h1 className="h-1.5"></h1>
    </div>
  );
};

export default DevelopersNav;
