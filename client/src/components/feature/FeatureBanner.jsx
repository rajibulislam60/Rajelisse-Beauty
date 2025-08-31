import React from "react";
import Container from "./../Container";
import featureImage1 from "../../images/banner-01.jpg";
import featureImage2 from "../../images/banner-02.jpg";
import Button from "../Button";

const FeatureBanner = () => {
  return (
    <div>
      <Container>
        <div className="md:flex gap-5 mt-12">
          {[featureImage1, featureImage2].map((img, idx) => (
            <div
              key={idx}
              className="w-[100%] md:w-[50%] h-[350px] overflow-hidden relative group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${img})` }}
              />

              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10 p-10 text-black">
                {idx === 0 ? (
                  <>
                    <h4 className="text-[18px] font-medium text-gray-600">
                      New Collection
                    </h4>
                    <h3 className="text-2xl font-bold mt-2">
                      Intensive Glow C+ <br /> Serum
                    </h3>
                    <Button
                      btnName="Explore More"
                      className="bg-white text-xl md:text-2xl font-semibold md:font-bold px-3 py-2 mt-6"
                    />
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold">
                      Discount for Everything
                    </h3>
                    <p className="text-[16px] text-gray-500 font-medium mt-2">
                      Makeup with extended range in <br /> colors for every
                      human.
                    </p>
                    <Button
                      btnName="Shop Sale"
                      className="bg-white text-xl md:text-2xl font-semibold md:font-bold px-3 py-2 mt-6"
                    />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FeatureBanner;
