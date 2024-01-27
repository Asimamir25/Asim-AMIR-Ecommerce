import React from "react";
import person2 from "../../assets/Frame 61.png";
import Brand1 from "../../assets/brand-4.png";
import Brand2 from "../../assets/brand-5.png";
import Brand3 from "../../assets/brand-6.png";
import Brand4 from "../../assets/brand-7.png";
import Brand5 from "../../assets/brand-8.png";
import Boxtic from "../../assets/svg/box-tick.svg";
import crown from "../../assets/svg/crown.svg";
import security from "../../assets/svg/shield-security.svg";
const Review = () => {
  return (
    <div>
      <div className="services bg-container rounded-lg md:m-9  xx:w-auto m-1">
        <div className="  flex flex-row justify-between md:flex-col md:px-28 py-11 gap-6 lg:flex-row xx:flex-col px-4">
          <div className="s1 flex items-center gap-[31px] ">
            <img src={Boxtic} alt="" />
            <div className="s-con ">
              <p className="font-bold text-partialcolor text-[22px]">
                Free Delivery
              </p>
              <p className="text-partialcolor text-[18px]">
                on order above $50,00
              </p>
            </div>
          </div>
          <div className="s1  flex items-center gap-[31px]">
            <img src={crown} alt="" />
            <div className="s-con ">
              <p className="font-bold text-partialcolor text-[22px]">
                Best Quality
              </p>
              <p className="font-[400] text-partialcolor text-[18px]">
                best quality in low price
              </p>
            </div>
          </div>
          <div className="s1  flex items-center gap-[31px]">
            <img src={security} alt="" />
            <div className="s-con ">
              <p className="font-bold text-partialcolor text-[22px]">1 Year</p>
              <p className="font-[400] text-partialcolor text-[18px]">
                on order above $50,00
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="review px-[61px] py-8  flex flex-wrap justify-between gap-3 xx:mx-auto ">
        <div className="b border border-[#BABABA] w-[400px] rounded-[20px] p-[16px] text-partialcolor md:w-full lg:w-[400px] xl:[400px] ">
          <div className="imag-con flex items-center gap-7">
            <img src={person2} alt="" />

            <p>Savannah Nguyen</p>
          </div>
          <div className=" bg-container  rounded-[20px] mt-3">
            <p className="px-[26px] py-[11px] text-[13.5px] leading-5 font-normal text-partialcolor">
              Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
              faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem
              sed scelerisque.
            </p>
          </div>
        </div>
        <div className="b border border-[#BABABA] w-[400px] rounded-[20px] p-[16px] text-partialcolor md:w-full lg:w-[400px] xl:[400px] ">
          <div className="imag-con flex items-center gap-7">
            <img src={person2} alt="" />

            <p>Savannah Nguyen</p>
          </div>
          <div className=" bg-container  rounded-[20px] mt-3">
            <p className="px-[26px] py-[11px] text-[13.5px] leading-5 font-normal text-partialcolor">
              Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
              faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem
              sed scelerisque.
            </p>
          </div>
        </div>
        <div className="b border border-[#BABABA] w-[400px] rounded-[20px] p-[16px] text-partialcolor md:w-full lg:w-[400px] xl:[400px]">
          <div className="imag-con flex items-center gap-7">
            <img src={person2} alt="" />

            <p>Savannah Nguyen</p>
          </div>

          <div className=" bg-container  rounded-[20px] mt-3">
            <p className="px-[26px] py-[11px] text-[13.5px] leading-5 font-normal text-partialcolor">
              Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
              faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem
              sed scelerisque.
            </p>
          </div>
        </div>
      </div>
      <div className="my-[30px] flex gap-1 items-center justify-center text-center  ">
        <div className="round w-4 h-4 bg-bgprimary rounded-full"></div>
        <div className="round w-4 h-4 border border-circleround rounded-full"></div>
        <div className="round w-4 h-4 border border-circleround rounded-full"></div>
      </div>
      <div className="services bg-container rounded-lg md:m-9 xx:w-full m-0">
        <div className="flex justify-between px-[34px] py-[47px] lg:gap-[40px] flex-col  xl:flex-row xx:flex gap-3 w-full">
          <img src={Brand1} alt="" />
          <img src={Brand2} alt="" />
          <img src={Brand3} alt="" />
          <img src={Brand4} alt="" />
          <img src={Brand5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Review;
