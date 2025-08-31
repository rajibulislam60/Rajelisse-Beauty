import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Home from "./pages/Home";
import RootLayOut from "./layout/RootLayOut";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Shop from "./pages/Shop";
import Category from "./pages/Category";
import SingleProduct from "./components/shop/SingleProduct";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<RootLayOut />}>
          <Route index element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
        </Route>
      </Route>
    </>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
