import React from "react";
import HeroImage from "../images/hero-slider-01.jpg";
import Container from "./Container";

const HeroBanner = () => {
  return (
    <div
      className="w-full h-[700px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <Container>
        <div className=" max-w-xl space-y-6">
          <h3 className="text-lg font-medium tracking-widest uppercase">
            Rajelisse Beauty
          </h3>
          <h2 className="text-5xl font-bold leading-tight">
            Be Your <br /> Kind of Beauty
          </h2>
          <p className="text-base text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            sequi repellat et. Rerum, unde distinctio maiores perspiciatis
            accusantium eveniet architecto!
          </p>
        </div>
      </Container>
    </div>
  );
};

export default HeroBanner;
