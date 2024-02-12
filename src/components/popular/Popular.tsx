import React, { useEffect, useState } from "react";
import heart from "../../assets/heartcartIcon.png";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook/hooks";
import basket from "../../assets/svg/shoppingCart.svg";
import { getProduct } from "../../redux/slice/productSlice";
import Viewframe from "../../assets/svg/eyeFrame.svg";
import star from "../../assets/star.png";
import { Product } from "../../type/types";

import {
  fetchCategoryData,
  setSelectedCategory,
} from "../../redux/slice/categoryProduct";

const Popular = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.product.data);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  const selectedCategory = useAppSelector(
    (state) => state.selectedCategory.data
  );

  const handleCategoryClick = (category: string) => {
    dispatch(setSelectedCategory(category));
    dispatch(fetchCategoryData(category));
    setCurrentCategory(category);
  };
  const uniqueCategories = Array.from(
    new Set(product.map((item: Product) => item.category || ""))
  );
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div>
      <div className="popular-product  md:px-[61px] lg:px-[40px] py-12 flex justify-between xx:flex-col gap-6 xx:px-[10px] ">
        <p className="font-poppins font-semibold  text-[27px] text-primarytext">
          Popular products
        </p>
        <div className="flex gap-2">
          {uniqueCategories?.map((category) => (
            <div className="btn flex gap-2 xx:overflow-auto " key={category}>
              <button
                className="search-btn bg-white py-[10px] px-[30px] text-base rounded-[20px] z-10 text-center text-lightblue font-semibold border border-[#316887] font-poppins md:px-[20px] md:py-[5px] xx:px-[10px] pr-2 xx:rounded-small "
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            </div>
          ))}
          <Link to={"/category"}>
            <button className="search-btn bg-white py-[10px] px-[30px] text-base rounded-[20px] z-10 text-center text-lightblue font-semibold border border-[#316887] font-poppins  md:px-[20px] md:py-[15px] xx:px-[10px]">
              View More
            </button>
          </Link>
        </div>
      </div>

      <div className="product flex flex-wrap justify-center items-center p-10 lg:p-5 lg:justify-between xl:justify-between md:gap-3 ">
        {!currentCategory
          ? product?.map((product: Product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <div
                  className={`rounded-[20px] border-[0.98px] border-bordercol1 w-[308px] h-[310px] my-1 p-1 lg:w-[230px] xl:w-[308px] ${
                    hoveredProduct === product.id ? "hovered" : ""
                  }`}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="relative">
                    <div className="flex justify-center items-start">
                      <img
                        src={product.image}
                        alt="product"
                        className="h-[173px] w-[187px] object-contain "
                      />
                    </div>
                    <div className="absolute right-3 top-3">
                      <img src={heart} alt="" />
                    </div>
                  </div>

                  <div>
                    {hoveredProduct === product.id ? (
                      <div className="flex gap-[20px] justify-center items-center mt-[30px]  ">
                        <div className="flex bg-btnbg justify-between items-center rounded-[19px] pr-[10px]   ">
                          <div>
                            <button className="py-[18px] px-[25.9px] ">
                              <p className="font-bold text-[15.5px]">
                                Add to cart
                              </p>
                            </button>
                          </div>

                          <div className="w-[50px] h-[50px] bg-bgprimary rounded-full flex justify-center items-center ">
                            <img src={basket} alt="" />
                          </div>
                        </div>
                        <div>
                          <img src={Viewframe} alt="" />
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-4 pl-3 mt-5 ">
                        <div>
                          <p className="font-poppins text-[17px] text-partialcolor font-semibold truncate">
                            {product.title}
                          </p>
                        </div>
                        <div className="">
                          <p className="font-poppins text-[17px]text-lightgray ">
                            ${product.price}
                          </p>
                        </div>
                        <div className="flex mb-0">
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))
          : selectedCategory?.map((product: Product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <div
                  className={`rounded-[20px] border-[0.98px] border-bordercol1 w-[308px] h-[310px] my-1 p-1 lg:w-[230px] xl:w-[308px] ${
                    hoveredProduct === product.id ? "hovered" : ""
                  }`}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="relative">
                    <div className="flex justify-center items-start">
                      <img
                        src={product.image}
                        alt="Product"
                        className="h-[173px] w-[187px] max-h-40 "
                      />
                    </div>
                    <div className="absolute right-3 top-3">
                      <img src={heart} alt="" />
                    </div>
                  </div>

                  <div>
                    {hoveredProduct === product.id ? (
                      <div className="flex gap-[20px] justify-center items-center mt-[30px]  ">
                        <div className="flex bg-btnbg justify-between items-center rounded-[19px] pr-[10px]   ">
                          <div>
                            <button className="py-[18px] px-[25.9px] ">
                              <p className="font-bold text-[15.5px]">
                                Add to cart
                              </p>
                            </button>
                          </div>

                          <div className="w-[50px] h-[50px] bg-bgprimary rounded-full flex justify-center items-center ">
                            <img src={basket} alt="basket" />
                          </div>
                        </div>
                        <div>
                          <img src={Viewframe} alt="eye" />
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-1 pl-3 mt-5">
                        <div>
                          <p className="font-poppins text-[17px] text-partialcolor font-semibold truncate">
                            {product.title}
                          </p>
                        </div>
                        <div className="">
                          <p className="font-poppins text-[17px] text-lightgray ">
                            ${product.price}
                          </p>
                        </div>
                        <div className="flex mb-0">
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
      </div>
      <div className="my-[30px] flex gap-1 items-center justify-center text-center  ">
        <div className="round w-4 h-4 bg-bgprimary rounded-full"></div>
        <div className="round w-4 h-4 border border-[#ADADAD] rounded-full"></div>
        <div className="round w-4 h-4 border border-[#ADADAD] rounded-full"></div>
      </div>
    </div>
  );
};

export default Popular;
