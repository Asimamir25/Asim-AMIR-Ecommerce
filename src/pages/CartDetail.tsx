import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hook/hooks";
import { getCart, getProductDetails, Cart } from "../app/slice/cartSlice";
import Plus from "../assets/svg/plus.svg";
import Close from "../assets/svg/close-circle.svg";
import Minus from "../assets/svg/Minus.svg";
import { BallTriangle } from "react-loader-spinner";
const CartDetail = () => {
  const dispatch = useAppDispatch();
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const { cartItems, error, loading } = useAppSelector((state) => state.cart);
  const handleCart = () => {
    setSelectedProducts([]);
  };

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        if (cartItems && cartItems.length > 0) {
          const promises = cartItems.map((item) =>
            dispatch(getProductDetails(item.productId))
          );

          const responses = await Promise.all(promises);

          setSelectedProducts(responses.map((response) => response.payload));
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [dispatch, cartItems]);
  const renderCartItem = (item: Cart, index: number) => (
    <>
      <tr key={item.productId} className="mt-7  ">
        <td className="flex">
          {selectedProducts[index] && (
            <img
              src={selectedProducts[index].image}
              alt={selectedProducts[index].title}
              className="w-[126px]"
            />
          )}
          <div className="flex flex-col ml-3">
            <td className="w-[320px] xx:flex-col">
              <p className=" text-partialcolor font-bold text-[20px] break-words xx:text-[10px] ">
                {selectedProducts[index]?.title}
              </p>
            </td>
            <td className="text-darkgray  text-[20px]">Color:Black</td>
            <td className="text-darkgray  text-[20px]">Size:title</td>
          </div>
        </td>

        <td className="font-medium text-[22px] text-darkgray xx:text-[18px] ">
          ${selectedProducts[index]?.price}
        </td>

        <td>
          <div className="relative flex items-center max-w-[7rem]  ">
            <img src={Minus} alt="" />

            <input
              type="text"
              id="quantity-input"
              data-input-counter
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border-x-0 border-gray-300 h-8 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 xx:w-[30px]"
              placeholder="999"
              required
            />
            <img src={Plus} alt="" />
          </div>
        </td>
        <td className="font-medium text-[22px] text-darkgray xx:text-[18px] pl-8">
          <div className="flex gap-3">
            ${selectedProducts[index]?.price}
            <img src={Close} alt="" />
          </div>
        </td>
      </tr>

      <tr>
        <td colSpan={8}>
          <div className="border top-1"></div>
        </td>
      </tr>
    </>
  );

  return (
    <>
      {loading && (
        <div className="z-10 flex justify-center">
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
      )}
      <div className="flex justify-between px-7 py-6 xx:flex-col md:flex-col gap-4 lg:flex-row">
        {error && <p>Error: {error}</p>}

        <div className="lg:w-8/12 relative md:w-full xx:overflow-auto m-4">
          <table className="w-full border-collapse">
            <thead className="bg-thead h-[56px]">
              <tr className="tr-6">
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th className="px-4">Subtotal</th>
              </tr>
            </thead>
            <tbody>{cartItems.map(renderCartItem)}</tbody>
          </table>
          <div className=" flex justify-between xx:gap-2">
            <div>
              <button className="bg-bgprimary rounded-[32px] mt-3  text-white">
                <p className=" md:px-[37px] py-[19.5px]   font-semibold xx:font-normal xx:px-[40px] xx:py-[10px] xx:text-[10px] ">
                  Coninue to Shopping
                </p>
              </button>
            </div>

            <button className=" rounded-[32px] mt-3  text-white border border-[#A9A9A9] xx:hidden">
              <p className="px-[47px] py-[19.5px]   font-semibold text-[#797979] ">
                Update Cart
              </p>
            </button>
            <button className=" rounded-[32px] mt-3  text-white border border-brown">
              <p
                className="md:px-[47px] py-[19.5px]  font-semibold text-brown xx:px-[50px] xx:py-[10px]  xx:text-[10px]"
                onClick={() => {
                  handleCart();
                }}
              >
                Clear Cart
              </p>
            </button>
          </div>
        </div>

        <div className="lg:w-3/12 border border-[#AFAFAF] xx:w-full md:w-full">
          <table className="w-full md:w-full xx:[330px]">
            <thead className="bg-thead h-[56px] text-center">
              <tr className="items-center">
                <th>Cart Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="flex justify-between p-4">
                <td>
                  <p>Subtotal</p>
                </td>
                <td className="text-[22px] font-semibold">$10,00</td>
              </tr>

              <tr>
                <td colSpan={2} className="p-4">
                  <hr />
                </td>
              </tr>

              <tr>
                <td colSpan={2} className="p-3">
                  <div className="border border-border2 rounded-[20px] flex pl-4">
                    <input
                      type="text"
                      placeholder="Enter Coupon"
                      className="outline-none placeholder-[#232323] text-[16px] font-normal font-poppins p-3 w-full"
                    />
                    <button className="w-full text-partialcolor font-semibold text-[16px] p-3">
                      Apply
                    </button>
                  </div>
                </td>
              </tr>

              <tr>
                <td colSpan={2} className="p-4">
                  <hr />
                </td>
              </tr>

              <tr>
                <td colSpan={2} className="p-5">
                  <select
                    defaultValue="US"
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] block w-full p-2.5"
                  >
                    <option>Country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </td>
              </tr>

              <tr className="flex justify-between p-4">
                <td>
                  <p>Total</p>
                </td>
                <td className="text-[22px] font-semibold">$10,00</td>
              </tr>
            </tbody>
            <div className="text-center">
              <button className="bg-bgprimary rounded-[32px] mb-3  text-white">
                <p className="px-[62px] py-[10.5px]   font-semibold ">
                  Proceed to Checkout
                </p>
              </button>
            </div>
          </table>
        </div>
      </div>
    </>
  );
};

export default CartDetail;
