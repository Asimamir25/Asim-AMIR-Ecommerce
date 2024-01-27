import React, { useState, useEffect } from "react";
import star from "../assets/Vector.png";
import { useAppDispatch, useAppSelector } from "../app/hook/hooks";
import { Link } from "react-router-dom";
import { getProduct } from "../app/slice/productSlice";
import heart from "../assets/Frame 28.png";
import Filter from "../components/filter/Filter";
import Adds from "../components/Add/Adds";
import basket from "../assets/svg/shopping-cart.svg";
import {
  fetchCategoryData,
  setSelectedCategory,
} from "../app/slice/categoryProduct";
const Category: React.FC = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
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
              ? product?.slice(0, 7).map((product: any) => (
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
                            alt=""
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
                              <svg
                                width="72"
                                height="61"
                                viewBox="0 0 72 61"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="0.633545"
                                  y="0.114868"
                                  width="70.8147"
                                  height="59.9958"
                                  rx="19.6707"
                                  fill="#87BCD9"
                                />
                                <path
                                  d="M41.5289 30.1127C41.5289 32.0601 39.9553 33.6338 38.0079 33.6338C36.0605 33.6338 34.4868 32.0601 34.4868 30.1127C34.4868 28.1653 36.0605 26.5917 38.0079 26.5917C39.9553 26.5917 41.5289 28.1653 41.5289 30.1127Z"
                                  stroke="#292D32"
                                  stroke-width="1.47531"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M38.0079 38.2467C41.4798 38.2467 44.7157 36.2009 46.968 32.6602C47.8532 31.2734 47.8532 28.9424 46.968 27.5556C44.7157 24.0149 41.4798 21.9691 38.0079 21.9691C34.5361 21.9691 31.3002 24.0149 29.0479 27.5556C28.1627 28.9424 28.1627 31.2734 29.0479 32.6602C31.3002 36.2009 34.5361 38.2467 38.0079 38.2467Z"
                                  stroke="#292D32"
                                  stroke-width="1.47531"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
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
              : selectedCategory?.map((product: any) => (
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
                            alt=""
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

                              <div className="w-[30px] h-[30px] bg-bg-primary rounded-full flex justify-center items-center ">
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1.89209 1.94104H3.13996C3.91449 1.94104 4.52408 2.608 4.45953 3.37537L3.86429 10.5183C3.76388 11.6873 4.68902 12.6913 5.86517 12.6913H13.503C14.5357 12.6913 15.4393 11.8451 15.5182 10.8195L15.9054 5.4408C15.9915 4.25031 15.0879 3.28213 13.8902 3.28213H4.63166"
                                    stroke="white"
                                    stroke-width="1.47531"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M12.1115 16.2844C12.6066 16.2844 13.008 15.883 13.008 15.3879C13.008 14.8928 12.6066 14.4915 12.1115 14.4915C11.6164 14.4915 11.2151 14.8928 11.2151 15.3879C11.2151 15.883 11.6164 16.2844 12.1115 16.2844Z"
                                    stroke="white"
                                    stroke-width="1.47531"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M6.37448 16.2844C6.86958 16.2844 7.27093 15.883 7.27093 15.3879C7.27093 14.8928 6.86958 14.4915 6.37448 14.4915C5.87938 14.4915 5.47803 14.8928 5.47803 15.3879C5.47803 15.883 5.87938 16.2844 6.37448 16.2844Z"
                                    stroke="white"
                                    stroke-width="1.47531"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M6.91211 6.24402H15.5181"
                                    stroke="white"
                                    stroke-width="1.47531"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div>
                              <svg
                                width="72"
                                height="61"
                                viewBox="0 0 72 61"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="0.633545"
                                  y="0.114868"
                                  width="70.8147"
                                  height="59.9958"
                                  rx="19.6707"
                                  fill="#87BCD9"
                                />
                                <path
                                  d="M41.5289 30.1127C41.5289 32.0601 39.9553 33.6338 38.0079 33.6338C36.0605 33.6338 34.4868 32.0601 34.4868 30.1127C34.4868 28.1653 36.0605 26.5917 38.0079 26.5917C39.9553 26.5917 41.5289 28.1653 41.5289 30.1127Z"
                                  stroke="#292D32"
                                  stroke-width="1.47531"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M38.0079 38.2467C41.4798 38.2467 44.7157 36.2009 46.968 32.6602C47.8532 31.2734 47.8532 28.9424 46.968 27.5556C44.7157 24.0149 41.4798 21.9691 38.0079 21.9691C34.5361 21.9691 31.3002 24.0149 29.0479 27.5556C28.1627 28.9424 28.1627 31.2734 29.0479 32.6602C31.3002 36.2009 34.5361 38.2467 38.0079 38.2467Z"
                                  stroke="#292D32"
                                  stroke-width="1.47531"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
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
