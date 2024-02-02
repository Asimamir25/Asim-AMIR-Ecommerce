import React, { useEffect, useState, useRef } from "react";
import camera from "../../assets/camera.png";
import { Swiper, SwiperSlide, SwiperRef, SwiperClass } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const AddCard = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);
  const handleRoundClick = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
  };
  return (
    <div>
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        loop={true}
        onSlideChange={handleSlideChange}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="add bg-white  py-[6px]   w-full flex flex-col justify-between md:flex-row  ">
            <div className="add-con mt-3 flex flex-col xx:order-2  justify-center lg:order-1 md:order-1 sm:pl-[175px] xx:text-center ">
              <div className=" xx:justify-center items-center">
                <h5 className="font-bold text-[43px] text-primarytext font-poppins ">
                  Canon
                </h5>
                <h5 className="font-bold text-[43px] text-primarytext font-poppins">
                  camera
                </h5>
              </div>
              <div className="btn flex flex-col gap-6 my-[20px] sm:flex-row xx:items-center m-5">
                <button className="search-btn bg-bgprimary w-[144px] p-4 rounded-[20px]  text-base text-center text-white font-semibold font-poppins xx:w-full  ">
                  Shop Now
                </button>

                <button className="search-btn bg-white w-[130px] p-4 text-base rounded-[24px]  z-10 text-center text-lightblue font-semibold border border-lightblue font-poppins xx:w-full">
                  View more
                </button>
              </div>
              <div className="my-[30px] mx-[128px] flex gap-1 w-[64px] items-center xx:hidden">
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className={`round w-4 h-4 ${
                      activeSlide === index
                        ? "bg-bgprimary"
                        : "border border-circleround"
                    } rounded-full`}
                    onClick={() => handleRoundClick(index)}
                  ></div>
                ))}
              </div>
            </div>
            <div className="add-img  pr-[16px] py-[38px] relative lg:pr-3  xx:order-1 mx-auto lg:order-2 md:order-2">
              <img src={camera} alt="" className="object-cover sm:pl-[8] " />
              <div className="price w-[120px] h-[120px] rounded-full bg-bgprimary absolute right-[20px] bottom-[70px] flex justify-center">
                <p className="p-9 text-center text-white font-bold">
                  Onlys $89
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="add bg-white  py-[6px]   w-full flex flex-col justify-between md:flex-row  ">
            <div className="add-con mt-3 flex flex-col xx:order-2  justify-center lg:order-1 md:order-1 sm:pl-[175px] xx:text-center ">
              <div className=" xx:justify-center items-center">
                <h5 className="font-bold text-[43px] text-primarytext font-poppins ">
                  Canon
                </h5>
                <h5 className="font-bold text-[43px] text-primarytext font-poppins">
                  camera
                </h5>
              </div>
              <div className="btn flex flex-col gap-6 my-[20px] sm:flex-row xx:items-center m-5">
                <button className="search-btn bg-bgprimary w-[144px] p-4 rounded-[20px]  text-base text-center text-white font-semibold font-poppins xx:w-full  ">
                  Shop Now
                </button>

                <button className="search-btn bg-white w-[130px] p-4 text-base rounded-[24px]  z-10 text-center text-lightblue font-semibold border border-lightblue font-poppins xx:w-full">
                  View more
                </button>
              </div>
              <div className="my-[30px] mx-[128px] flex gap-1 w-[64px] items-center xx:hidden">
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className={`round w-4 h-4 ${
                      activeSlide === index
                        ? "bg-bgprimary"
                        : "border border-circleround"
                    } rounded-full`}
                    onClick={() => handleRoundClick(index)}
                  ></div>
                ))}
              </div>
            </div>
            <div className="add-img  pr-[16px] py-[38px] relative lg:pr-3  xx:order-1 mx-auto lg:order-2 md:order-2">
              <img src={camera} alt="" className="object-cover sm:pl-[8] " />
              <div className="price w-[120px] h-[120px] rounded-full bg-bgprimary absolute right-[20px] bottom-[70px] flex justify-center">
                <p className="p-9 text-center text-white font-bold">
                  Onlys $89
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="add bg-white  py-[6px]   w-full flex flex-col justify-between md:flex-row  ">
            <div className="add-con mt-3 flex flex-col xx:order-2  justify-center lg:order-1 md:order-1 sm:pl-[175px] xx:text-center ">
              <div className=" xx:justify-center items-center">
                <h5 className="font-bold text-[43px] text-primarytext font-poppins ">
                  Canon
                </h5>
                <h5 className="font-bold text-[43px] text-primarytext font-poppins">
                  camera
                </h5>
              </div>
              <div className="btn flex flex-col gap-6 my-[20px] sm:flex-row xx:items-center m-5">
                <button className="search-btn bg-bgprimary w-[144px] p-4 rounded-[20px]  text-base text-center text-white font-semibold font-poppins xx:w-full  ">
                  Shop Now
                </button>

                <button className="search-btn bg-white w-[130px] p-4 text-base rounded-[24px]  z-10 text-center text-lightblue font-semibold border border-lightblue font-poppins xx:w-full">
                  View more
                </button>
              </div>
              <div className="my-[30px] mx-[128px] flex gap-1 w-[64px] items-center xx:hidden">
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className={`round w-4 h-4 ${
                      activeSlide === index
                        ? "bg-bgprimary"
                        : "border border-circleround"
                    } rounded-full`}
                    onClick={() => handleRoundClick(index)}
                  ></div>
                ))}
              </div>
            </div>
            <div className="add-img  pr-[16px] py-[38px] relative lg:pr-3  xx:order-1 mx-auto lg:order-2 md:order-2">
              <img src={camera} alt="" className="object-cover sm:pl-[8] " />
              <div className="price w-[120px] h-[120px] rounded-full bg-bgprimary absolute right-[20px] bottom-[70px] flex justify-center">
                <p className="p-9 text-center text-white font-bold">
                  Onlys $89
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AddCard;
