import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowForward, IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import ProductsNav from "./DropdownContent/ProductsNav";
const Navbar = () => {
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isSignInHovered, setIsSignInHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // on hover icon change to sign in and contact
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

  // toggle for mobile nav
  const handelToggle = () => {
    setIsMenuOpen(true);
  };
  return (
    <nav className=" text-gray-700 lg:text-gray-100 py-6 lg:py-0 text-[15px] font-medium">
      {/* main div */}
      <div className=" flex items-center justify-between gap-10">
        <div>
          <h1 className=" text-3xl text-white font-semibold">stripe</h1>
        </div>
        {/* links related div */}
        <div
          className={` lg:flex absolute bg-white rounded-md ${
            isMenuOpen ? "top-[3%]" : " -top-full"
          } lg:static lg:bg-transparent lg:h-auto right-4 md:right-7 w-[93vw] md:w-1/2 lg:w-auto mx-auto transition-all duration-500 ease-in-out`}
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
              {/* products */}
              <li className=" relative group ">
                <a className="hover:opacity-70 cursor-default" href="#">
                  Products
                </a>
                <div className=" absolute top-0 left-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 w-full lg:min-w-[560px] transform">
                  <div className=" relative -left-32 top-6 p-6 bg-white text-black rounded-xl shadow-xl w-full">
                    <div className=" w-10 h-10 bg-white transform rotate-45 absolute top-0 -left-14 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
                    <ProductsNav />
                  </div>
                </div>
              </li>
              {/* solutions */}
              <li className="relative group">
                <a className="hover:opacity-70 cursor-default" href="#">
                  Solutions
                </a>
                <div className=" absolute top-0 left-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 w-full lg:min-w-[560px] transform">
                  <div className=" relative -left-32 top-6 p-6 bg-white text-black rounded-xl shadow-xl w-full">
                    <div className=" w-10 h-10 bg-white transform rotate-45 absolute top-0 -left-14 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
                    <ProductsNav />
                  </div>
                </div>
              </li>
              <li className="hover:opacity-70  cursor-default">
                <a href="#">Developers</a>
              </li>
              <li className="hover:opacity-70  cursor-default">
                <a href="#">Resources</a>
              </li>
              <li className="hover:opacity-70  cursor-pointer">
                <a href="#">Pricing</a>
              </li>{" "}
            </ul>

            {/* contact and sign in  */}
            <ul className=" flex flex-col lg:flex-row   lg:items-center justify-end gap-10 mt-10 lg:mt-0">
              <li
                onMouseEnter={handleContactMouseEnter}
                onMouseLeave={handleContactMouseLeave}
                className=" pl-5 lg:pl-0 flex items-center gap-1 hover:opacity-70  cursor-pointer "
              >
                Contact Sales{" "}
                {isContactHovered ? <IoArrowForward /> : <IoIosArrowForward />}{" "}
              </li>
              <div className=" bg-[#F7F9FB] lg:bg-transparent py-4 mx-1.5 flex justify-center items-center lg:block rounded-md mt-36 lg:mt-0 mb-2 lg:mb-0">
                <li
                  onMouseEnter={handleSignInMouseEnter}
                  onMouseLeave={handleSignInMouseLeave}
                  className=" flex items-center gap-1 text-white lg:hover:opacity-70 cursor-pointer bg-[#635AFF] lg:bg-gray-300/20 pr-3 pl-5 py-1.5 rounded-full "
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
