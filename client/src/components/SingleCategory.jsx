import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Product from "../components/shop/Product";
import ShopCate from "./shop/ShopCate";
import Pagination from "./shop/Pagination";
import Container from "./Container";

const SingleCategory = () => {
  const { id } = useParams();
  const [activePage, setActivePage] = useState(1);
  const [categoryInfo, setCategoryInfo] = useState(null);

  useEffect(() => {
    const fetchSingleCategory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/category/singleCategory/${id}`
        );
        setCategoryInfo(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      fetchSingleCategory();
    }
  }, [id]);

  if (!categoryInfo?.products) return <p>Loading...</p>;

  const allproducts = categoryInfo.products;
  const productsPerPage = 9;
  const startIndex = (activePage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = allproducts.slice(startIndex, endIndex);

  return (
    <div className="py-10">
      <Container>
        <div className="flex gap-4">
          <ShopCate />

          <div className="flex-1">
            <Product allproducts={paginatedProducts} />
            <Pagination
              total={allproducts.length}
              perPage={productsPerPage}
              activePage={activePage}
              setActivePage={setActivePage}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleCategory;
