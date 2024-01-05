import { Avatar, Rate } from "antd";
import React, { useEffect, useState } from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import { demoAppProducts } from "../../../data/DemoData";
import ModelViewer from "./widgets/ModelViewer";
import ProductCard from "./widgets/ProductCard";
// import { BsHeart } from "react-icons/bs";

import clickA from "../../../assets/sfx/clickA.mp3";
import useSound from "use-sound";

const ProductPage = (props) => {
  const {
    setDemoAppPage,
    primaryColor,

    textColor,
    backgroundColor,
  } = useStateContext();

  const { demoAppProudctId, setDemoAppProudctId } = useStateContext();
  const [product, setProduct] = useState({});

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  useEffect(() => {
    // 👇️ filter with 1 condition
    const Productsfiltered = demoAppProducts.filter((product) => {
      return product.id === demoAppProudctId;
    });
    setProduct(Productsfiltered[0]);
  }, []);

  // console.log("Here", relatedIds);

  const [playA] = useSound(clickA, { volume: 0.5 });

  return (
    <div
      className="page-back flex flex-col mt-5"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      {/* Demo Indicator */}
      {/* <span className="fixed z-50 ml-[275px] mb-[200px] cursor-pointer">
        <div className="flex items-center content-center justify-center bg-red h-[80px] w-[20px] rotate-[-45deg]	">
          <span className="rotate-[90deg]	text-white text-[12px] ">Demo</span>
        </div>{" "}
      </span> */}
      {/* Go to checkout pop up */}
      {/* <div className="absolute z-2 bg-white shadow-lg w-[327px] ml-1">
        <div className="flex items-center justify-center content-center">
          <span>hey</span>
        </div>
      </div> */}
      {/* Product viewer */}
      <ModelViewer glb={product?.glb} />
      {/* Page content */}
      <div className="p-5">
        <div className="flex flex-row items-center">
          <span className="font-medium ">{product?.product_name}</span>
          <div className="flex flex-row items-center ml-auto space-x-1">
            <span className="line-through text-[#9b9b9b] text-[14px]">
              {product?.regular_price}
            </span>
            <span className="font-bold">{product?.sale_price}</span>
          </div>
        </div>
        <hr className="mt-2.5 mb-2.5 border-greyelement" />
        <div className="flex flex-row items-center space-x-1.5 ">
          <span className="font-medium text-[14px]">Color:</span>
          <span className="text-[14px]">{product?.color_name}</span>
          <Avatar
            className="outline outline-2 outline-[#fff] shadow-md "
            style={{
              backgroundColor: `${product?.color_code}`,
              verticalAlign: "middle",
            }}
            size={{
              xs: 13,
              sm: 13,
              md: 13,
              lg: 13,
              xl: 13,
              xxl: 13,
            }}
          />
        </div>
        {/* Colors */}
        {/* <div className="flex flex-row items-center mb-5 mt-2 space-x-2">
          <Avatar
            className="outline outline-2 outline-[#fff] shadow-md"
            style={{
              backgroundColor: `${product?.color_code}`,
              verticalAlign: "middle",
            }}
            size={{
              xs: 20,
              sm: 20,
              md: 20,
              lg: 20,
              xl: 20,
              xxl: 20,
            }}
          /> */}
        {/* <Avatar
            style={{
              backgroundColor: "#ddff55",
              verticalAlign: "middle",
            }}
            size={{
              xs: 20,
              sm: 20,
              md: 20,
              lg: 20,
              xl: 20,
              xxl: 20,
            }}
          />
          <Avatar
            style={{
              backgroundColor: "#fed640",
              verticalAlign: "middle",
            }}
            size={{
              xs: 20,
              sm: 20,
              md: 20,
              lg: 20,
              xl: 20,
              xxl: 20,
            }}
          /> */}
        {/* </div> */}

        <hr className="mt-2.5 mb-2.5 border-greyelement" />

        {/* Description */}
        <div className="flex flex-col space-y-1 select-none">
          <span className="font-medium mb-1">Overview</span>
          {product?.overview?.map((item) => (
            <li className="text-[14px]">{item}</li>
          ))}
          {/* <li className="text-[14px]">
            Vans provide you with the premium quality
          </li>
          <li className="text-[14px]">Trendy and simple for everyday</li>
          <li className="text-[14px]">
            Comfortable, stylish, Versatile and Attractive
          </li> */}
        </div>
        <hr className="mt-2.5 mb-2.5 border-greyelement" />
        {/* Reviews */}
        <div className="flex flex-col">
          <span className="font-medium ">Reviews</span>
          <div className="flex flex-row items-center">
            <span className="font-bold text-[30px]">{product?.rate}</span>
            <div className="flex flex-col items-start space-y-1 mb-1">
              <Rate
                disabled
                defaultValue={5}
                className="scale-75 ml-[-10px] h-[20px]"
              />
              <span className="text-[13px] text-[#656565] ml-2">
                Reviewed by {product?.customer_number} customers
              </span>
            </div>
          </div>
        </div>
        {/* Add to cart button */}
        <div
          onClick={() => {
            setDemoAppPage("credit-card");
            playA();
          }}
          style={{
            backgroundColor: primaryColor,
            // color: preview.linkTextColor,
          }}
          className={`flex items-center content-center justify-center rounded-lg mt-5 cursor-pointer duration-200 transition-all`}
        >
          {/* hover:bg-darkblue  */}
          <span className="text-white font-bold p-2 select-none">Buy</span>
        </div>

        {/* Related Products */}
        <div className="flex flex-col mt-5 mb-5">
          <span className="font-medium ">Related Products</span>
          <div className="flex flex-row items-center mt-3 space-x-5">
            {product?.related?.map((item) => (
              <ProductCard
                onClick={() => {
                  setDemoAppProudctId(item?.id);
                  const Productsfiltered = demoAppProducts.filter((product) => {
                    return product.id === item?.id;
                  });
                  setProduct(Productsfiltered[0]);
                  playA();
                }}
                name={item?.product_name}
                image={item?.product_img}
                salePrice={item?.sale_price}
                regularPrice={item?.regular_price}
              />
            ))}

            {/* {demoAppProducts
              ?.filter((product) => product?.id === relatedIds[0])
              ?.map((item) => (
                <ProductCard
                  name={item?.product_name}
                  image={item?.product_img}
                  salePrice={item?.sale_price}
                  regularPrice={item?.regular_price}
                />
              ))} */}
            {/* Product Card */}
            {/* <ProductCard /> */}
            {/* End Product Card */}
            {/* Product Card */}
            {/* <ProductCard /> */}
            {/* End Product Card */}
          </div>
        </div>

        {/* Tabs */}
      </div>
    </div>
  );
};

export default ProductPage;
// const Productsfiltered = demoAppProducts.filter((product) => {
//   return product.id === productId;
// });
