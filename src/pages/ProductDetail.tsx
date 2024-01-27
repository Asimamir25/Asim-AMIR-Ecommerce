import React, { useEffect } from "react";
import star from "../assets/svg/star.png";
import { useParams } from "react-router-dom";
import heart from "../assets/svg/heartframe.png";
import google from "../assets/svg/google.svg";
import facebook from "../assets/svg/facebook.svg";
import whatsapp from "../assets/svg/whatsapp.svg";
import Plus from "../assets/svg/plus.svg";
import Minus from "../assets/svg/Minus.svg";

import { useAppDispatch, useAppSelector } from "../app/hook/hooks";
import { BallTriangle } from "react-loader-spinner";
import { getDetail } from "../app/slice/detailSlice";
import tick from "../assets/svg/tick.png";
const ProductDetail: React.FC = () => {
  const { id } = useParams(); //import from react-router-dom
  const dispatch = useAppDispatch();
  const detail = useAppSelector((state) => state.detail.data);

  useEffect(() => {
    if (id) {
      dispatch(getDetail(parseInt(id))); // Pass the id as an argument
    }
  }, [dispatch, id]);
  if (!detail) {
    return (
      <div className="flex justify-center z-40 h-full">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  const product = Array.isArray(detail) ? detail[0] : detail;

  return (
    <div>
      <div className="details w-full md:h-[661px]  p-7 flex  xx:flex-col h-auto ">
        <div className="w-1/2   flex justify-center border border-[#C0C0C0] rounded-[20px] xx:w-[330px] mx:auto">
          <img
            src={product.image} // Replace with your image URL
            alt="Your Alt Text"
            className="  w-auto object-contain xx:w-[220px]"
          />
        </div>

        <div className="detail-content md:w-1/2  flex flex-col p-3 md:pl-[40px] gap-[11px] xx:gap-1 w-full pl-0 ">
          <p className="text-[29px] text-partialcolor font-semibold xx:text-[20px]">
            {product.title}
          </p>
          <p className="text-[29px] text-lightgray font-bold">
            ${product.price}
          </p>
          <div className="star flex items-center gap-[19.6px] xx:mb-[20px] flex-row">
            <div className="flex">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <div>
              <p className="test-[13px] font-semibold text-lightgray">
                No reviews
              </p>
            </div>
          </div>
          <div className="available flex gap-[19.5px] items-center">
            <p className="font-medium text-[18px] text-darkblack">
              Availability:
            </p>
            <div className="flex items-center gap-[14.5px]">
              <img src={tick} alt="" />
              <p className="font-medium text-[18px] text-[#30BD57]">In Stock</p>
            </div>
          </div>
          <div>
            <p className="text-[15.93px] font-normal text-[#5D5D5D] font-poppins">
              Hurry up! only 34 product left in stock!
            </p>
          </div>
          <div className="p-3">
            <hr className="text-[#BDBDBD]" />
          </div>

          <div className="flex flex-col justify-center gap-[26px]">
            <div className="flex gap-2 items-center ">
              <p className="text-darkblack text-[18px] font-medium">Color:</p>

              <div className="w-[18px] h-[18px] bg-[#D0EC48] rounded-full border border-black p-2"></div>
              <div className="w-[18px] h-[18px] bg-bgdark rounded-full  p-2"></div>
            </div>
            <div className="flex gap-2  ">
              <p className="text-darkblack text-[18px] font-medium">Size:</p>

              <div className=" bg-white  border border-black ">
                <p className="px-[20px] py-[2.5px] text-bgdark  font-medium ">
                  33
                </p>
              </div>
              <div className=" bg-white  border border-black ">
                <p className="px-[20px] py-[2.5px] text-bgdark text-[18px] font-medium">
                  33
                </p>
              </div>
              <div className=" bg-white  border border-black ">
                <p className="px-[20px] py-[2.5px] text-bgdark text-[18px] font-medium">
                  33
                </p>
              </div>
              <div className=" bg-white  border border-black ">
                <p className="px-[20px] py-[2.5px] text-bgdarl text-[18px] font-medium">
                  33
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-darkblack text-[18px] font-medium">
                Quantity:
              </p>
              <div>
                <div className="relative flex items-center max-w-[8rem] ">
                  <img src={Minus} alt="" />
                  <input
                    type="text"
                    id="quantity-input"
                    data-input-counter
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="999"
                    required
                  />
                  <img src={Plus} alt="" />
                </div>
              </div>
            </div>
            <div className="flex justify-between xx:flex-col gap-2 items-center">
              <button className="bg-bgprimary rounded-[32.4px]">
                <p className="px-[56px] py-[19.5px] text-[22.7px] text-white font-bold md:font-semibold md:px-[20px] xx:px-[20px] xx:font-normal">
                  Add to cart
                </p>
              </button>

              <button className="bg-bgprimary rounded-[32.4px] md:hidden lg:block">
                <p className="px-[56px] py-[19.5px] text-[22.7px] text-white font-bold md:font-normal md:px-[20px] xx:px-[20px] xx:font-normal">
                  Buy it Now
                </p>
              </button>

              <div className=" xx:hidden md:hidden xl:block">
                <img src={heart} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rem-detail w-full h-[230px]  flex p-4 mt-3 xx:flex-col">
        <div className="left w-1/2  flex justify-between gap-3 xx:hidden">
          <div className="img w-2/4  border border-[#C0C0C0] rounded-[20px] flex justify-center items-center overflow-hidden ">
            <img
              src={product.image}
              alt=""
              className="object-contain w-[130px] h-auto"
            />
          </div>
          <div className="img w-2/4  border border-[#C0C0C0] rounded-[20px] flex justify-center items-center overflow-hidden ">
            <img
              src={product.image}
              alt=""
              className="object-contain w-[130px] h-auto "
            />
          </div>
        </div>
        <div className="right w-1/2 p-3 pl-[50px] xx:w-full">
          <div className="p-2">
            <hr className="text-[#BDBDBD]" />
          </div>
          <div className="flex flex-col gap-8   xx:items-center">
            <div className="flex gap-3">
              <p className="text-[18px] text-darkblack font-medium">Sku:</p>
              <p className="text-[18px] text-bg-dark font-medium">01133-9-9</p>
            </div>
            <div className="flex gap-3">
              <p className="text-[18px] text-darkblack font-medium">
                Category:
              </p>
              <p className="text-[18px] text-bgdark font-medium">20% off,</p>
              <p className="text-[18px] text-bgdark font-medium">40% off,</p>
              <p className="text-[18px] text-bgdark font-medium">
                {product?.category}
              </p>
            </div>
            <div className="flex gap-3">
              <p className="text-[18px] text-darkblack font-medium">Share:</p>
              <img src={google} alt="" />
              <img src={facebook} alt="" />
              <img src={whatsapp} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-[20px] mt-[30px] mb-[10px]">
        <button className="border border-[#8F8F8F] rounded-[20px]">
          <p className="px-[34px] py-[14.5px]  text-[#373737] text-[20px] font-medium">
            Description
          </p>
        </button>
        <button className="border border-[#8F8F8F] rounded-[20px] bg-partialcolor">
          <p className="px-[42px] py-[14.5px] text-white text-[20px] font-medium">
            Reviews
          </p>
        </button>
      </div>
      <div className="review m-[63px] border border-[#B8B8B8] py-[42px] px-[49px] flex flex-col gap-6 rounded-[20px] ">
        <h1 className=" font-bold text-[22px] text-partialcolor">
          Customer reviews
        </h1>
        <p className="text-[#4F4F4F] text-[19.8px]">No reviews yet</p>
        <div className="flex">
          <button className="px-[28.5px] py-[5px] bg-partialcolor text-white">
            <span className="underline text-[19px]">Write a review</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
