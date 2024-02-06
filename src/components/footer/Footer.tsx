import React from "react";
import logo from "../../assets/logoSec.png";
import headphone from "../../assets/svg/headphone.svg";
import google from "../../assets/svg/google.svg";
import facebook from "../../assets/svg/facebook.svg";
import whatsapp from "../../assets/svg/whatsapp.svg";
import listcircle from "../../assets/svg/bgCircle.svg";
import send from "../../assets/svg/sendicon2.svg";
const Footer: React.FC = () => {
  return (
    <footer className="relative bottom-0">
      <div className=" bg-[#E2F4FF]  py-[42px]  ">
        <div className="newsletter min-w-[320px] bg-white mx-8 rounded-[20px] flex md:px-24 py-9 justify-between items-center lg:justify-around lg:flex-col gap-4 xl:flex-row md:flex-col xx:flex-col px-[3px] ">
          <div>
            <p className=" font-bold text-primarytext  text-[30px] xx:text-[23px] ">
              Subscribe newsletter
            </p>
          </div>

          <div className=" bg-bgprimary py-[21px] flex justify-around items-center pl-[25px] pr-2 rounded-[20px] xx:justify-around">
            <p className="  text-white  text-[14px] font-semibold  pr-[262px] xx:pr-0 ">
              Email address
            </p>
            <img src={send} alt="" />
          </div>
          <div className="contact flex justify-around gap-5 ">
            <div>
              <img src={headphone} alt="" />
            </div>
            <div className="flex flex-col  ">
              <p className="font-semibold  text-[#606060] ">Call us 24/7 :</p>
              <p className="font-semibold  text-[#606060] ">
                (+62) 0123 567 789
              </p>
            </div>
          </div>
        </div>
        <div className="sec-part border flex md:items-start md:pl-[100px] justify-between  md:px-[30px] py-[42px] md:flex-row     lg:flex-row gap-3  xl:flex-row  xx:flex-col items-start pl-[60px]  ">
          <div className="address w-[190px]">
            <div className="flex flex-col justify-between gap-12">
              <img src={logo} alt="" className="w-[140px] h-[39px]" />
              <div className="flex flex-col gap-4 ">
                <p className="text-[16px] text-primarytext font-normal ">
                  64 st james boulevard hoswick , ze2 7zj
                </p>
                <div>
                  <hr className="border-t-2 border-[#9D9D9D]" />
                </div>
              </div>
              <div className="flex gap-3">
                <img src={google} alt="" />
                <img src={facebook} alt="" />
                <img src={whatsapp} alt="" />
              </div>
            </div>
          </div>
          <div className="menu flex flex-col gap-4 justify-center xx:items-center">
            <p className=" text-primarytext font-semibold text-[20px]">
              Find Product
            </p>

            <ul className=" flex flex-col gap-4 list-none">
              <div className="flex gap-2">
                <img src={listcircle} alt="" />
                <li className=" text-[19px] text-primarytext">
                  Brownze arnold
                </li>
              </div>
              <div className="flex gap-2">
                <img src={listcircle} alt="" />
                <li className=" text-[19px] text-primarytext">
                  Brownze arnold
                </li>
              </div>
              <div className="flex gap-2">
                <img src={listcircle} alt="" />
                <li className=" text-[19px] text-primarytext">
                  Brownze arnold
                </li>
              </div>
              <div className="flex gap-2">
                <img src={listcircle} alt="" />
                <li className=" text-[19px] text-primarytext">
                  Brownze arnold
                </li>
              </div>
              <div className="flex gap-2">
                <img src={listcircle} alt="" />
                <li className=" text-[19px] text-primarytext">
                  Brownze arnold
                </li>
              </div>
            </ul>
          </div>
          <div className="menu flex flex-col gap-4">
            <p className=" text-primarytext font-semibold text-[20px]">
              Find Product
            </p>
            <ul className=" flex flex-col gap-4 list-none">
              <div className="flex gap-2">
                <img src={listcircle} alt="" />
                <li className=" text-[19px] text-primarytext">
                  Brownze arnold
                </li>
              </div>
              <div className="flex gap-2">
                <img src={listcircle} alt="" />
                <li className=" text-[19px] text-primarytext">
                  Brownze arnold
                </li>
              </div>
              <div className="flex gap-2">
                <img src={listcircle} alt="" />
                <li className=" text-[19px] text-primarytext">
                  Brownze arnold
                </li>
              </div>
              <div className="flex gap-2">
                <img src={listcircle} alt="" />
                <li className=" text-[19px] text-primarytext">
                  Brownze arnold
                </li>
              </div>
              <div className="flex gap-2">
                <img src={listcircle} alt="" />
                <li className=" text-[19px] text-primarytext ">
                  Brownze arnold
                </li>
              </div>
            </ul>
          </div>{" "}
          <div className="menu flex flex-col gap-4">
            <p className=" text-primarytext font-semibold text-[20px]">
              Find Product
            </p>
            <ul className=" flex flex-col gap-4 list-none">
              <div className="flex gap-2">
                <img src={listcircle} alt="" />
                <li className=" text-[19px] text-primarytext">
                  Brownze arnold
                </li>
              </div>
              <div className="flex gap-2">
                <img src={listcircle} alt="" />
                <li className=" text-[19px] text-primarytext">
                  Brownze arnold
                </li>
              </div>
              <div className="flex gap-2">
                <img src={listcircle} alt="" />
                <li className=" text-[19px] text-primarytext">
                  Brownze arnold
                </li>
              </div>
              <div className="flex gap-2">
                <img src={listcircle} alt="" />
                <li className=" text-[19px] text-primarytext">
                  Brownze arnold
                </li>
              </div>
              <div className="flex gap-2">
                <img src={listcircle} alt="" />
                <li className=" text-[19px] text-primarytext">
                  Brownze arnold
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
