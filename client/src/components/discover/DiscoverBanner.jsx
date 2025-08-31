import React from "react";
import ImageBox1 from "../../images/image-box-white-10-1.jpg";
import ImageBox2 from "../../images/image-box-white-12.jpg";
import { FaArrowRight } from "react-icons/fa6";

const DiscoverBanner = () => {
  return (
    <div className="md:flex justify-between py-10">
      <div className="text-center w-full md:w-[49%]">
        <img src={ImageBox1} alt="Summer Collection Image Box" />
        <div className="mt-6">
          <h3 className="text-3xl font-semibold">Summer Collection</h3>
          <button className="text-xl mx-auto flex gap-3 items-center font-medium hover:text-[#C09B61] mt-3">
            Shop Now <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="text-center w-full md:w-[49%] mt-4 md:mt-0">
        <img src={ImageBox2} alt="Summer Collection Image Box" />
        <div className="mt-6">
          <h3 className="text-3xl font-semibold">Summer Collection</h3>
          <button className="text-xl mx-auto flex gap-3 items-center font-medium hover:text-[#C09B61] mt-3">
            Read More <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverBanner;
