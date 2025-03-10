import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category /Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import BistroBossDetails from "../../../components/BistroBossDetails";
import CallUs from "../../../components/CallUs";
import ChefRecommends from "../../../components/ChefRecommends";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";

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
      <Testimonials/>
    </div>
  );
};

export default Home;
