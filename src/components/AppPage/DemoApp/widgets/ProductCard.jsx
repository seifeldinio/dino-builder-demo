import React, { useEffect, useState } from "react";
import { demoAppProducts } from "../../../../data/DemoData";

const ProductCard = (props) => {
  const { name } = props;
  const { image } = props;
  const { regularPrice } = props;
  const { salePrice } = props;
  const { onClick } = props;

  return (
    <div
      onClick={onClick}
      className="flex flex-col outline outline-greyelement rounded-md h-[190px] w-1/2 p-2 hover:shadow-lg mb-1 duration-200 transition-all cursor-pointer"
    >
      <div className="flex bg-greyelement w-full h-[120px] rounded-md object-cover ">
        <img src={image} className="flex object-cover rounded-md" alt="" />
      </div>
      <span className="font-medium text-[14px] mt-1.5 line-clamp-1">
        {name}
      </span>
      <div className="flex flex-row items-center mt-1">
        <span className="font-bold text-[16px] ">{salePrice}</span>
        <span className="font-normal text-[14px] line-through ml-1 text-[#808080]">
          {regularPrice}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
