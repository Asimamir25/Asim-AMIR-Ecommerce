import React from "react";
import logo from "../../assets/logoPrimary.png";
import user from "../../assets/svg/user.svg";
import heart from "../../assets/svg/heart.svg";
import basket from "../../assets/svg/shoppingCart.svg";
import arrow from "../../assets/svg/arrowDown.svg";
import arrowwhite from "../../assets/svg/arrowWhite.svg";
import { Link } from "react-router-dom";
const Navbar: React.FC = () => {
  return (
    <>
      <div className="navbar bg-partialcolor p-4 md:px-20 flex justify-between items-center md:py-6 mx-auto  ">
        <div className="nav_left  flex  items-center gap-20 pr-24 ">
          <Link to="/">
            <img src={logo} alt="" className=" min-h[39px]" />
          </Link>

          <div className="search bg-white rounded-[24px] py-[17.5px] pl-[25px] pr-[126px] items-center relative hidden xl:flex">
            <input
              className="text-black outline-none placeholder-[#293D32]"
              type="text"
              name="name"
              placeholder="Search any things  "
            />
            <button className="search-btn bg-[#EDA415] py-[17.5px]   pl-[41px] pr-[41px] rounded-[24px] absolute left-[280px] z-10 text-center text-white font-normal">
              Search
            </button>
          </div>
        </div>
        <div className="nav_right flex gap-6 pr-3 items-center ">
          <div className="right-elem flex gap-3">
            <img src={user} alt="user w-[24px]" />
            <p className="text-white  hidden md:block">Sign in </p>
          </div>
          <div className="right-elem flex gap-3">
            <div className="icon flex items-center">
              <div className="icon-svg">
                <img src={heart} alt="heart w-[24px] " />
              </div>
              <div className="counter w-[14.21px] h-[15px] bg-[#EDA415] rounded-full flex justify-center items-center xx:w-[24px] ">
                <div className="text-white text-[9px] font-normal flex justify-center items-center text-center">
                  1
                </div>
              </div>
            </div>

            <p className="text-white hidden md:block">Cart </p>
          </div>
          <Link to="/cart">
            <div className="right-elem flex gap-3">
              <div className="icon flex items-center">
                <div className="icon-svg">
                  <img src={basket} alt="" />
                </div>
                <div className="counter w-[14.21px] h-[15px] bg-[#EDA415] rounded-full flex justify-center items-center xx:w-[24px] ">
                  <div className="text-white text-[9px] font-normal flex justify-center items-center text-center">
                    1
                  </div>
                </div>
              </div>

              <p className="text-white hidden md:block">Cart </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="snd_nav bg-[#F4F4F4] px-8 flex flex-col sm:flex-row gap-2 justify-between items-center w-full xx:py-4">
        <div className="ml-9 flex  bg-[#EDA415] pr-2 ">
          <button className="dropdown text-white  text-base font-medium  flex items-center py-[23px] px-[19px] pr-[24px]   ">
            <p className="text-center">Browse categorie</p>
          </button>
          <img src={arrowwhite} alt="" />
        </div>

        <div className="hidden md:hidden lg:block ">
          <div className="nav-item flex gap-7  ">
            <div className="flex gap-4 items-center">
              <Link to="/">
                <li className="list-none ">
                  <p className="font-medium font-poppins text-[#3A3A3A] text-[16px]">
                    Home
                  </p>
                </li>
              </Link>

              <div>
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Link to="category">
                <li className="list-none font-medium text-[16px] font-poppins  text-[#3A3A3A]">
                  Catalog
                </li>
              </Link>
              <div>
                <img src={arrow} alt="" />
              </div>
            </div>
            <div>
              <li className="list-none font-poppins font-medium  text-[#3A3A3A]">
                Blog
              </li>
            </div>

            <div className="flex gap-4 items-center">
              <li className="list-none font-medium text-[16px] font-poppins  text-[#3A3A3A]">
                Pages
              </li>
              <div>
                <img src={arrow} alt="" />
              </div>
            </div>
            <div>
              <li className="list-none font-medium text-[16px] font-poppins  text-[#3A3A3A]">
                Pages
              </li>
            </div>
          </div>
        </div>
        <div className="">
          <p className="font-bold nav-custom-color text-base md:text-lg lg:text-xl">
            30 Days Free Return
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
