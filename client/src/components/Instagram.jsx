import React from "react";
import Container from "./Container";
import insagramImage1 from "../images/instagram-01-320x320.jpg";
import insagramImage2 from "../images/instagram-02-320x320.jpg";
import insagramImage3 from "../images/instagram-03-320x320.jpg";
import insagramImage4 from "../images/instagram-04.jpg";
import insagramImage5 from "../images/instagram-05-320x320.jpg";
import { FaFacebookF } from "react-icons/fa";

const Instagram = () => {
  const images = [
    insagramImage1,
    insagramImage2,
    insagramImage3,
    insagramImage4,
    insagramImage5,
  ];

  return (
    <div className="py-10">
      <Container>
        <div className="flex justify-between items-center gap-4 flex-wrap">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group sm:w-full md:w-[220px] md:h-[220px] overflow-hidden"
            >
              <img
                src={image}
                alt={`Instagram ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaFacebookF className="text-white text-3xl" />{" "}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Instagram;
