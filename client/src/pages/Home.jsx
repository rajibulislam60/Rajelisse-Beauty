import React from "react";
import HeroPart from "../components/HeroPart";
import Feature from "../components/Feature";
import Costumer from "../components/Costumer";
import Discover from "../components/Discover";
import Instagram from "../components/Instagram";

const Home = () => {
  return (
    <div>
      <HeroPart />
      <Feature />
      <Costumer />
      <Discover />
      <Instagram />
    </div>
  );
};

export default Home;
