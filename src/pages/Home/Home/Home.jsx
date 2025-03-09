import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category /Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import BistroBossDetails from "../../../components/BistroBossDetails";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <BistroBossDetails/>
      <PopularMenu/>
    </div>
  );
};

export default Home;
