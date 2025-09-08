import React from "react";
import Container from "./../components/Container";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Category = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/category/allCategory"
      );
      console.log(response.data.data);
      setCategories(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoryClick = (id) => {
    navigate(`/shop/${id}`);
  };

  return (
    <div>
      <Container>
        <div className="py-20">
          <div className="grid grid-cols-3 gap-4">
            {categories.map((item) => (
              <div
                key={item.id}
                onClick={() => handleCategoryClick(item._id)}
                className="h-[380px] bg-teal-900 text-white"
              >
                <img
                  className="w-full h-[80%] object-cover rounded-bl-full shadow-md"
                  src={item.image}
                  alt={item.name}
                />
                <h3 className="h-[20%] flex px-4 items-center text-3xl font-bold">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Category;
