import React from "react";
import speaker from "../../assets/2 1.png";
const DetailCard = () => {
  return (
    <div>
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
    </div>
  );
};

export default DetailCard;
