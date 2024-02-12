import React from "react";
import addimg from "../../assets/laptop_addbar.png";

const Adds: React.FC = () => {
  return (
    <div>
      <div className="p-7 xx:p-1">
        <div
          className="bg-cover bg-center h-[417px] flex items-center justify-end rounded-3xl xx: mx-auto w-auto xx:rounded-none"
          style={{ backgroundImage: `url(${addimg})` }}
        >
          <div className="flex flex-col justify-center mr-24 gap-3  items-center xx:mx-auto">
            <button className="search-btn bg-bgprimary w-[144px] p-4 rounded-[20px]  text-base text-center text-white font-semibold font-poppins ">
              Shop Now
            </button>
            <p className="text-addtext font-poppins font-bold text-[41px] xx:text-center">
              Sale up to 50% off
            </p>
            <p className="text-white text-center font-poppins">
              12 inch hd display
            </p>
            <button className="search-btn bg-bgprimary w-[144px] p-4 rounded-[20px]  text-base text-center text-white font-semibold font-poppins ">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adds;
