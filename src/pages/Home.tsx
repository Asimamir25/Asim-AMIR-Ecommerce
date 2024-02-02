import React, { useEffect } from "react";

import speaker from "../assets/2 1.png";
import leftarrow from "../assets/svg/leftarrow.svg";
import rightarrow from "../assets/svg/rightarrow.svg";
import star from "../assets/star.png";
import speakeradd from "../assets/speaker_add.png";
import xbox from "../assets/emulator.png";
import { useAppDispatch } from "../redux/hook/hooks";
import { getProduct } from "../redux/slice/productSlice";
import Popular from "../components/popular/Popular";
import Adds from "../components/add/Adds";
import Review from "../components/review/Review";
import LatestProduct from "../components/latestproduct/LatestProduct";
import AddCard from "../components/add/AddCard";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import DetailCard from "../components/add/DetailCard";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <>
      <AddCard />
      <div className="crouse px-[108px] py-6 flex relative justify-between xx:px-[10px] gap-2 md:gap-3 ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          navigation={{
            prevEl: ".custom-swiper-button-prev",
            nextEl: ".custom-swiper-button-next",
          }}
          loop={true}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <DetailCard />
          </SwiperSlide>
          <SwiperSlide>
            <DetailCard />
          </SwiperSlide>
          <SwiperSlide>
            <DetailCard />
          </SwiperSlide>
          <SwiperSlide>
            <DetailCard />
          </SwiperSlide>
          <SwiperSlide>
            <DetailCard />
          </SwiperSlide>
          <SwiperSlide>
            <DetailCard />
          </SwiperSlide>
        </Swiper>
        <div className="custom-swiper-button-prev z-20  absolute left-[90px] top-[80px]  xl:block xx:hidden">
          <img src={leftarrow} alt="Previous" />
        </div>
        <div className="custom-swiper-button-next z-20 absolute top-[80px] right-[110px]  xl:block xx:hidden">
          <img src={rightarrow} alt="Next" />
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
      <Review />{" "}
      <div className="popular-product px-[61px] py-12 flex justify-between ">
        <p className="font-poppins font-semibold text-primarytext text-[25px] ">
          Latest news
        </p>
        <div className="btn  flex gap-1 font-poppins font-meadium text-primarytext text-[20px]">
          View More
        </div>
      </div>
      <LatestProduct />
    </>
  );
};

export default Home;
