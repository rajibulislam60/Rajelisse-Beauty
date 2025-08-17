import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import { RouterProvider } from "react-router/dom";
import RootlayOut from "./layout/RootlayOut";
import Home from "./pages/Home";
import Order from "./pages/Order";
import AddCategory from "./components/products/AddCategory";
import AllCategory from "./components/products/AllCategory";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<RootlayOut />}>
          <Route index element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/addcategory" element={<AddCategory />} />
          <Route path="/allcategory" element={<AllCategory />} />
        </Route>
      </Route>
    </>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />,
    </div>
  );
};

export default App;
