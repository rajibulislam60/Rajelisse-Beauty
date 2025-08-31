import React, { useState } from "react";
import Slider from "react-slick";
import HeroImage1 from "../images/hero-slider-01.jpg";
import HeroImage2 from "../images/hero-slider-02.jpg";
import HeroImage3 from "../images/hero-slider-03.jpg";
import Container from "./Container";
import "../../src/index.css";
import Button from "./Button";

const slides = [
  {
    image: HeroImage1,
    title: "Rajelisse Beauty",
    subtitle: "Be Your Kind of Beauty",
    description:
      "Discover your glow with premium care. Elegance, redefined with every touch.",
  },
  {
    image: HeroImage2,
    title: "Natural Radiance",
    subtitle: "Glow from Within",
    description:
      "Experience beauty rooted in nature. Pure, powerful, and perfect for you.",
  },
  {
    image: HeroImage3,
    title: "Luxury Redefined",
    subtitle: "Shine with Confidence",
    description: "Because you deserve to feel as beautiful as you truly are.",
  },
];

const HeroPart = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <div
            className="w-full h-[700px] bg-cover bg-center flex items-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="inset-0" />
            <Container>
              <div
                key={
                  currentSlide === index
                    ? `active-${index}`
                    : `inactive-${index}`
                }
                className=" slide-down"
              >
                <h3 className="text-lg font-medium tracking-widest uppercase">
                  {slide.title}
                </h3>
                <h2 className="text-5xl font-bold leading-tight mt-4">
                  {slide.subtitle}
                </h2>
                <p className="text-base mt-4">{slide.description}</p>
                <Button
                  btnName="Shop Now"
                  className="bg-black text-white px-6 py-3 text-3xl font-semibold mt-10"
                />
              </div>
            </Container>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroPart;
