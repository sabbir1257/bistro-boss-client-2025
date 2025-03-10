import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category /Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import BistroBossDetails from "../../../components/BistroBossDetails";
import CallUs from "../../../components/CallUs";
import ChefRecommends from "../../../components/ChefRecommends";
import Featured from "../Featured/Featured";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <BistroBossDetails/>
      <PopularMenu/>
      <CallUs/>
      <ChefRecommends/>
      <Featured/>
    </div>
  );
};

export default Home;
