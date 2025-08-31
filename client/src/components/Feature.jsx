import React from "react";
import Slider from "react-slick";
import Container from "./Container";
import Title from "./Title";
import ProductItem from "./ProductItem";
import ProductImage1 from "../images/product1.jpg";
import ProductImage2 from "../images/product2.jpg";
import ProductImage3 from "../images/product3.jpg";
import ProductImage4 from "../images/product4.jpg";
import FeatureBanner from "./feature/FeatureBanner";
import FeatureDetails from "./feature/FeatureDetails";
import { FiBox } from "react-icons/fi";
import { GiReturnArrow } from "react-icons/gi";
import { MdSupportAgent, MdPayment } from "react-icons/md";

const Feature = () => {
  const products = [
    { id: 1, src: ProductImage1, price: 550, itemName: "Glowing Skin Siram" },
    { id: 2, src: ProductImage2, price: 600, itemName: "Vitamin C Serum" },
    { id: 3, src: ProductImage3, price: 750, itemName: "Aloe Vera Gel" },
    { id: 4, src: ProductImage4, price: 450, itemName: "Rose Water Toner" },
    { id: 5, src: ProductImage3, price: 850, itemName: "Night Repair Cream" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const features = [
    {
      Icon: FiBox,
      nameDetails: "Free Shipping",
      details: "Enjoy free shipping on all orders over $50.",
    },
    {
      Icon: GiReturnArrow,
      nameDetails: "Returns",
      details: "Within 7 days for an exchange.",
    },
    {
      Icon: MdSupportAgent,
      nameDetails: "Online Support",
      details: "24 hours a day, 7 days a week",
    },
    {
      Icon: MdPayment,
      nameDetails: "Flexible Payment",
      details: "Pay with Multiple Credit Cards",
    },
  ];

  return (
    <div>
      <div className="bg-[#F8F8F8] py-20">
        <Container>
          <div>
            <Title
              titleName="Our Featured Products"
              titlePera="Get the skin you want to feel"
            />

            <div className="mt-10">
              <Slider {...settings}>
                {products.map((product) => (
                  <div key={product.id} className="flex justify-center">
                    <ProductItem
                      src={product.src}
                      price={product.price}
                      itemName={product.itemName}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </Container>
      </div>
      <FeatureBanner />
      <div className="py-10">
        <Container>
          <div className="flex justify-between flex-wrap gap-4">
            {features.map((feature, index) => (
              <FeatureDetails
                key={index}
                Icon={feature.Icon}
                nameDetails={feature.nameDetails}
                details={feature.details}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Feature;
