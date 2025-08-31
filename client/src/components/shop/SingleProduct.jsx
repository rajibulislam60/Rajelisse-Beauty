import React from "react";
import Container from "../Container";
import singleProductImage from "../../images/product3.jpg";

const SingleProduct = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="flex justify-between">
          <div className="w-[45%] h-[500px]">
            <img
              className="w-full h-full"
              src={singleProductImage}
              alt="Single Product Image"
            />
          </div>
          <div className="w-[55%] px-5">
            <h3 className="text-3xl font-semibold">
              Aloe Vera face hydration cream
            </h3>
            <h4 className="text-2xl font-bold mt-3">Price: 2,550TK</h4>
            <div className="flex items-center gap-3 mt-8">
              <button className=" w-[40px] py-1 font-semibold text-2xl bg-teal-600 text-white hover:bg-teal-800 cursor-pointer">
                -
              </button>
              <h4 className="font-semibold text-2xl">1</h4>
              <button className="w-[40px] py-1 font-semibold text-2xl bg-teal-600 text-white hover:bg-teal-800 cursor-pointer">
                +
              </button>
            </div>
            <p className="text-[16px] font-regular mt-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              sunt magnam, alias praesentium harum quisquam laboriosam nemo
              perspiciatis voluptates soluta. Harum nihil ab autem fugit nam,
              aspernatur nisi veniam, nesciunt quia consectetur inventore!
              Cumque rem iure repellat a, magnam ea iste quod ipsum obcaecati
              expedita veniam itaque ad, fugit doloribus odio autem eaque minima
              omnis recusandae fuga sed quos! Excepturi est quos amet odit
              aliquam nesciunt laudantium deserunt pariatur! Aliquid sed, rem
              eos pariatur nobis recusandae accusamus tempore magni aspernatur
              quia a porro doloremque beatae voluptatum voluptates non
              temporibus soluta ex distinctio vitae dolor? Ut aut suscipit esse
              natus veritatis.
            </p>
            <button className="text-2xl font-semibold bg-teal-600 text-white hover:bg-teal-800 cursor-pointer py-2 w-full text-center mt-18 rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleProduct;
