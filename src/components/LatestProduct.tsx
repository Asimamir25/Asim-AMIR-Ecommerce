import React from "react";
import blog from "../assets/Blog.png";
import blog2 from "../assets/Blog-2.png";

const LatestProduct = () => {
  return (
    <div>
      <div className="latest md:px-[60px] w-full  flex gap-3 lg:flex-col xl:flex-row md:flex-col xx:flex-col px-5 ">
        <div className="latest1   flex gap-6 border border-[#C8C8C8] py-[40px] px-[18px] rounded-[20px] md:w-full lg:w-full xl:w-1/2 xx:flex-col w-auto">
          <img src={blog} alt="" className="w-[318px] h-[288px]" />
          <div className=" flex flex-col justify-between">
            <div>
              <button className="Date bg-white  rounded-[20px]  border border-bordercol1 ">
                <p className="text-lightblue font-semibold text-[20px]   font-poppins px-[18px] py-[5px]">
                  22,oct,2023
                </p>
              </button>
            </div>

            <p className="font-bold text-[22px] text-primarytext">
              Who avoids a pain that produces?
            </p>
            <p className="font-meadium text-[13.5px] text-partialcolor ">
              Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
              faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem
              sed scelerisque.
            </p>
            <p className="font-meadium text-[13.5px] text-partialcolor">
              By spacing tech
            </p>
          </div>
        </div>
        <div className="latest1 flex gap-6 border border-[#C8C8C8] py-[40px] px-[18px] rounded-[20px] md:w-full lg:w-full xl:w-1/2 xx:flex-col w-auto ">
          <img src={blog2} alt="" className="w-[318px] h-[288px]" />
          <div className=" flex flex-col justify-between">
            <div>
              <button className="Date bg-white  rounded-[20px]  border border-bordercol1 ">
                <p className="text-lightblue font-semibold text-[20px]   font-poppins px-[18px] py-[5px]">
                  22,oct,2023
                </p>
              </button>
            </div>

            <p className="font-bold text-[22px] text-primarytext">
              Who avoids a pain that produces?
            </p>
            <p className="font-meadium text-[13.5px] text-partialcolor ">
              Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
              faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem
              sed scelerisque.
            </p>
            <p className="font-meadium text-[13.5px] text-partialcolor">
              By spacing tech
            </p>
          </div>
        </div>
      </div>
      <div className="my-[30px] flex gap-1 items-center justify-center text-center  ">
        <div className="round w-4 h-4 bg-bgprimary rounded-full"></div>
        <div className="round w-4 h-4 border border-circleround rounded-full"></div>
        <div className="round w-4 h-4 border border-circleround rounded-full"></div>
        <div className="round w-4 h-4 border border-circleround rounded-full"></div>
        <div className="round w-4 h-4 border border-circleround rounded-full"></div>
      </div>
    </div>
  );
};

export default LatestProduct;
