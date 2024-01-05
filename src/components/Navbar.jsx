import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowForward, IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  // on hover icon change to sign in and contact
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isSignInHovered, setIsSignInHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactMouseEnter = () => {
    setIsContactHovered(true);
  };

  const handleContactMouseLeave = () => {
    setIsContactHovered(false);
  };

  const handleSignInMouseEnter = () => {
    setIsSignInHovered(true);
  };

  const handleSignInMouseLeave = () => {
    setIsSignInHovered(false);
  };

  //
  const handelToggle = () => {
    setIsMenuOpen(true);
  };
  return (
    <nav className=" text-gray-700 lg:text-gray-100 px-4 md:px-8 lg:px-16 xl:px-40 py-5 text-[15px] font-medium overflow-hidden ">
      {/* main div */}
      <div className=" flex items-center justify-between gap-10">
        <div>
          <h1 className=" text-3xl text-white font-semibold">stripe</h1>
        </div>
        {/* links related nav */}
        <div
          className={` lg:flex absolute bg-white rounded-md ${
            isMenuOpen ? "top-[3%]" : " -top-full"
          } lg:static lg:bg-transparent h-screen lg:h-auto right-4 md:right-7 w-[93vw] lg:w-auto mx-auto transition-all duration-500 ease-in-out`}
        >
          <div className=" grid grid-cols-1 lg:grid-cols-2 items-start  lg:items-center justify-between w-full">
            {/* dropdown related nav */}
            <ul className=" flex flex-col text-start pl-5 lg:pl-0 justify-start lg:flex-row lg:items-center gap-10">
              {" "}
              {isMenuOpen && (
                <h1 className=" text-2xl flex justify-between items-center pr-5 py-3">
                  <span className=" font-bold text-[#635AFF]">stripe</span>
                  <RxCross2 onClick={() => setIsMenuOpen(false)} />
                </h1>
              )}
              <li className="hover:text-gray-200 transition-colors duration-200 cursor-default ">
                Products
              </li>
              <li className="hover:text-gray-200 transition-colors duration-200 cursor-default">
                Solutions{" "}
              </li>
              <li className="hover:text-gray-200 transition-colors duration-200 cursor-default">
                Developers
              </li>
              <li className="hover:text-gray-200 transition-colors duration-200 cursor-default">
                Resources{" "}
              </li>
              <li className="hover:text-gray-200 transition-colors duration-200 cursor-pointer">
                Pricing
              </li>{" "}
            </ul>
            {/* contact and sign in  */}
            <ul className=" flex flex-col lg:flex-row   lg:items-center justify-end gap-10 mt-10 lg:mt-0">
              <li
                onMouseEnter={handleContactMouseEnter}
                onMouseLeave={handleContactMouseLeave}
                className=" pl-5 lg:pl-0 flex items-center gap-1 hover:text-gray-200 transition-colors duration-200 cursor-pointer "
              >
                Contact Sales{" "}
                {isContactHovered ? <IoArrowForward /> : <IoIosArrowForward />}{" "}
              </li>
              <div className=" bg-[#F7F9FB] lg:bg-transparent py-4 mx-1.5 flex justify-center items-center lg:block mt-[52px] rounded-md lg:mt-0">
                <li
                  onMouseEnter={handleSignInMouseEnter}
                  onMouseLeave={handleSignInMouseLeave}
                  className=" flex items-center gap-1 text-white lg:hover:text-gray-200 cursor-pointer bg-[#635AFF] lg:bg-gray-300/20 pr-3 pl-5 py-1.5 rounded-full "
                >
                  Sign in{" "}
                  {isSignInHovered ? <IoArrowForward /> : <IoIosArrowForward />}
                </li>
              </div>
            </ul>
          </div>
          <div></div>
        </div>

        {/* menu icon for small and medium device */}
        <div
          onClick={handelToggle}
          className=" block lg:hidden text-end justify-end px-4 py-2 rounded-full text-white bg-gray-300/30"
        >
          <IoMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
