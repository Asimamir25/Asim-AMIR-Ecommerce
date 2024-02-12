import React from "react";
import Location from "../../assets/svg/location.svg";
import group from "../../assets/svg/group.svg";
const Header = () => {
  return (
    <div>
      <div className="header  flex  flex-col justify-between items-center p-4 md:flex-row ">
        <div className="header_heading mb-2 md:mb-0 md:pl-12">
          <p className="text-sm font-normal text-custom-color font-poppins">
            Need help? Call us: (+98) 0234 456 789
          </p>
        </div>
        <div className="heading_flex pr-6 flex flex-wrap justify-center items-center gap-7 ">
          <div className="content flex gap-2">
            <div>
              <img src={Location} alt="" />
            </div>
            <li className="list-none font-poppins">Our Store</li>
          </div>
          <div className="content flex gap-2">
            <div>
              <img src={group} alt="" />
            </div>
            <li className="list-none font-poppins">Track Your Order</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
