import React, { useState, useEffect } from "react";
import Container from "./../components/Container";
import ShopCate from "../components/shop/ShopCate";
import Product from "../components/shop/Product";
import Pagination from "../components/shop/Pagination";
import axios from "axios";

const Shop = () => {
  const [activePage, setActivePage] = useState(1);
  const [allproducts, setAllproducts] = useState([]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/product/allproducts"
      );
      console.log(response);
      setAllproducts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const productsPerPage = 9;
  const startIndex = (activePage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = allproducts.slice(startIndex, endIndex);
  return (
    <div className="py-10">
      <Container>
        <div>
          <div className="flex gap-4">
            <ShopCate />
            <Product allproducts={paginatedProducts} />
          </div>
          <Pagination
            total={allproducts.length}
            perPage={productsPerPage}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </div>
      </Container>
    </div>
  );
};

export default Shop;
