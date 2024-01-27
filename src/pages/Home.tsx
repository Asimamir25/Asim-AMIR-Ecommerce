import React, { useEffect } from "react";

import speaker from "../assets/2 1.png";
import leftarrow from "../assets/svg/leftarrow.svg";
import rightarrow from "../assets/svg/rightarrow.svg";
import star from "../assets/Vector.png";
import speakeradd from "../assets/11 1.png";
import xbox from "../assets/Frame 29.png";
import { useAppDispatch } from "../app/hook/hooks";
import { getProduct } from "../app/slice/productSlice";
import Popular from "../components/Popular/Popular";
import Adds from "../components/Add/Adds";
import Review from "../components/Review/Review";
import LatestProduct from "../components/LatestProduct";
import AddCard from "../components/Add/AddCard";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <>
      <AddCard />
      <div className="crouse px-[108px] py-6 flex relative justify-between  xx:px-[10px] gap-2 overflow-auto">
        <div className="absolute left-[90px] top-[80px] xx:hidden md:hidden lg:hidden xl:block">
          <img src={leftarrow} alt="" />
        </div>
        <div className="absolute top-[80px] right-[90px] xx:hidden md:hidden lg:hidden xl:block">
          <img src={rightarrow} alt="" />
        </div>
        <div className="item1 min-h-[147px] min-w-[341px] px-[43px] border border-bordercol rounded-[20px] flex items-center xx:h-auto">
          <img src={speaker} alt="" className="w-[154px]" />
          <div className="cro-text">
            <p className="text-primarytext font-poppins text-[21px] font-semibold">
              Speaker
            </p>
            <p className="text-primarytext font-poppins text-lg font-meadium">
              (6 items)
            </p>
          </div>
        </div>
        <div className="item1 min-h-[147px] min-w-[341px] px-[43px] border border-bordercol rounded-[20px] flex items-center xx:h-auto ">
          <img src={speaker} alt="" className="w-[154px]" />
          <div className="cro-text">
            <p className="text-primarytext font-poppins text-[21px] font-semibold">
              Speaker
            </p>
            <p className="text-primarytext font-poppins text-lg font-meadium">
              (6 items)
            </p>
          </div>
        </div>
        <div className="item1 min-h-[147px] min-w-[341px] px-[43px] border border-bordercol rounded-[20px] flex items-center xx:h-auto w-">
          <img src={speaker} alt="" className="w-[154px]" />
          <div className="cro-text">
            <p className="text-primarytext font-poppins text-[21px] font-semibold">
              Speaker
            </p>
            <p className="text-primarytext font-poppins text-lg font-meadium">
              (6 items)
            </p>
          </div>
        </div>
      </div>
      <Popular />
      <div>
        <Adds />
      </div>

      <div className="add2 min-h-[500px] w-full flex px-[55px] py-[50px] gap-5 md:flex flex-col    xl:flex-row lg:flex-row xx:hidden ">
        <div className="right_add w-[60%] border overflow-hidden h-auto border-bordercol1 rounded-[20px] flex md:w-full lg:w-1/2 xl:w-1/2  ">
          <div className="img h-full flex justify-center items-center">
            <img src={speakeradd} alt="" className="object-cover" />
          </div>
          <div className="img h-full py-[63px] flex flex-col gap-4 ">
            <p className="font-poppins font-bold text-partialcolor text-[20px]">
              JBL bar 2.1 deep bass
            </p>
            <p className="font-poppins text-[17px] text-lightgray font-bold ">
              $1100
            </p>
            <div className="flex mb-0">
              <img src={star} alt="" /> <img src={star} alt="" />
              <img src={star} alt="" /> <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <div className="flex gap-2 ">
              <div className="size  rounded-[500px] bg-container  flex justify-center items-center font-poppins font-bold text-bgprimary text-[20px]">
                <p className="p-[22px]">57</p>
              </div>
              <div className="size  rounded-full bg-container flex justify-center items-center font-poppins font-bold  text-bgprimary text-[20px]">
                <p className="p-[22px]">37</p>
              </div>
              <div className="size w-[72px] h-[72px] rounded-full bg-container flex justify-center items-center font-poppins font-bold  text-bgprimary text-[20px]">
                <p className="p-[22px]">11</p>
              </div>
              <div className="size w-[72px] h-[72px] rounded-full bg-container flex justify-center items-center font-poppins font-bold  text-bgprimary text-[20px]">
                <p className="p-[22px]">57</p>
              </div>
            </div>
            <div className="my-[30px] flex gap-1  ">
              <div className="round w-4 h-4 bg-bgprimary rounded-full"></div>
              <div className="round w-4 h-4 border border-circleround rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="left_add w-[40%]  h-full flex flex-col  gap-14 md:w-full lg:w-[50%] ">
          <div className="left1 h-1/2 border border-bordercol1 rounded-[20px] flex justify-around   ">
            <img src={xbox} alt="" />
            <div className="flex flex-col justify-center gap-4">
              <div>
                <p className="font-poppins text-[17px] text-partialcolor font-semibold">
                  Play Game
                </p>
              </div>
              <div className="">
                <p className="font-poppins text-[17px] text-lightgray font-bold ">
                  $1111
                </p>
              </div>
              <div className="flex mb-0">
                <img src={star} alt="" /> <img src={star} alt="" />
                <img src={star} alt="" /> <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
          </div>
          <div className="left1 h-1/2 border border-bordercol1 rounded-[20px] flex justify-around gap-4">
            <img src={xbox} alt="" className="" />
            <div className="flex flex-col justify-center gap-4">
              <div>
                <p className="font-poppins text-[17px] text-partialcolor font-semibold">
                  Play Game
                </p>
              </div>
              <div className="">
                <p className="font-poppins text-[17px] text-lightgray font-bold ">
                  $1111
                </p>
              </div>
              <div className="flex mb-0">
                <img src={star} alt="" /> <img src={star} alt="" />
                <img src={star} alt="" /> <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Review />

      <div className="popular-product px-[61px] py-12 flex justify-between ">
        <p className="font-poppins font-semibold text-primarytext text-[25px] ">
          Latest news
        </p>
        <div className="btn  flex gap-1 font-poppins font-meadium text-primarytext text-[20px]">
          View More
        </div>
      </div>
      <LatestProduct />

      {/* <Footer /> */}
    </>
  );
};

export default Home;
