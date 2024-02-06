import React, { useState, useEffect } from "react";
import star from "../assets/star.png";
import { useAppDispatch, useAppSelector } from "../redux/hook/hooks";
import { Link } from "react-router-dom";
import { getProduct } from "../redux/slice/productSlice";
import heart from "../assets/heartcartIcon.png";
import Filter from "../components/filter/Filter";
import Adds from "../components/add/Adds";
import basket from "../assets/svg/shoppingCart.svg";
import Viewframe from "../assets/svg/View-frame.svg";
import {
  fetchCategoryData,
  setSelectedCategory,
} from "../redux/slice/categoryProduct";
import { Product } from "../type/types";

const Category: React.FC = () => {
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

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div>
      <div className="px-[23px] pt-[30px] flex gap-1 xx:flex-col">
        <div className="right w-1/4  p-4  xx:w-full">
          <Filter handleCategoryClick={handleCategoryClick} />
        </div>
        <div className="left w-3/4  xx:mx-auto ">
          <div className="product flex flex-wrap justify-center items-center lg:justify-between xl:justify-between">
            {!currentCategory
              ? product?.slice(0, 7).map((product: Product) => (
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
                      </div>{" "}
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
                                <img src={basket} alt="" />
                              </div>
                            </div>
                            <div>
                              <img src={Viewframe} alt="" />
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
        </div>
      </div>
      <div>
        <Adds />
      </div>
    </div>
  );
};

export default Category;
