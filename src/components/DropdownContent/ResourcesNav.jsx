import {
  FaAccusoft,
  FaBandAid,
  FaBookOpen,
  FaBuilding,
  FaCartPlus,
  FaCodeBranch,
  FaFirstAid,
  FaNewspaper,
  FaPenNib,
  FaRockrms,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const useCase = [
  {
    title: "Support Center ",
    icon: <FaBandAid />,
  },
  {
    title: "Blog ",
    icon: <FaPenNib />,
  },
  {
    title: "Support Plans ",
    icon: <FaCartPlus />,
  },
  {
    title: "Annual Conference ",
    icon: <FaAccusoft />,
  },
  {
    title: "Guides ",
    icon: <FaRockrms />,
  },
  {
    title: "Contact Sales ",
    icon: <MdOutlineEmail />,
  },
  {
    title: "Customer Stories ",
    icon: <FaBuilding />,
  },
];

const ResourcesNav = () => {
  return (
    <div>
      <div className=" p-6 text-sm">
        {/* by use case */}
        <h1 className=" mt-4">BY USE CASE</h1>
        <div className=" grid grid-cols-2 gap-3 cursor-pointer mt-3">
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
        <div className=" grid grid-cols-2 gap-3 cursor-pointer mt-3">
          <p className=" flex items-center gap-2 cursor-pointer text-slate-500 hover:text-slate-900">
            {" "}
            <FaFirstAid /> <span className=" text-slate-900">Jobs</span>
          </p>
          <p className=" flex items-center gap-2 cursor-pointer text-slate-500 hover:text-slate-900">
            {" "}
            <FaBookOpen /> <span className=" text-slate-900">Stripe Press</span>
          </p>
          <p className=" flex items-center gap-2 cursor-pointer text-slate-500 hover:text-slate-900">
            <FaNewspaper /> <span className=" text-slate-900">Newsroom</span>
          </p>
          <p className=" flex items-center gap-2 cursor-pointer text-slate-500 hover:text-slate-900">
            <FaCodeBranch />{" "}
            <span className=" text-slate-900">Become a partner</span>
          </p>
        </div>
      </div>
      <h1 className="h-1.5"></h1>
    </div>
  );
};

export default ResourcesNav;
