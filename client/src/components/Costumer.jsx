import React from "react";
import Container from "./Container";
import Title from "./Title";
import ProductImage1 from "../images/product1.jpg";
import ProductImage2 from "../images/product2.jpg";
import ProductImage3 from "../images/product3.jpg";
import ProductImage4 from "../images/product4.jpg";
import ProductItem from "./ProductItem";
import customerBannerImage from "../images/banner-white-33.jpg";

const Customer = () => {
  const products = [
    { id: 1, src: ProductImage1, price: 550, itemName: "Glowing Skin Siram" },
    { id: 2, src: ProductImage2, price: 600, itemName: "Vitamin C Serum" },
    { id: 3, src: ProductImage3, price: 750, itemName: "Aloe Vera Gel" },
    { id: 4, src: ProductImage4, price: 450, itemName: "Rose Water Toner" },
    { id: 5, src: ProductImage3, price: 850, itemName: "Night Repair Cream" },
    { id: 6, src: ProductImage1, price: 550, itemName: "Glowing Skin Siram" },
  ];

  return (
    <Container>
      <div className="py-8">
        <Title
          titleName="Customer Favorite Beauty Essentials"
          titlePera="Made using clean, non-toxic ingredients, our products are designed for everyone."
        />

        <div className="md:flex gap-6 mt-6 py-6">
          <div className="w-full md:w-[40%]">
            <img
              src={customerBannerImage}
              alt="Customer Banner"
              className="w-full h-[200px] md:h-full object-cover"
            />
          </div>

          <div className="w-full md:w-[60%] mt-2 md:mt-0 grid grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductItem
                key={product.id}
                src={product.src}
                price={product.price}
                itemName={product.itemName}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Customer;
