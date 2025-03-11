import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category /Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import BistroBossDetails from "../../../components/BistroBossDetails";
import CallUs from "../../../components/CallUs";
import ChefRecommends from "../../../components/ChefRecommends";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <BistroBossDetails />
      <PopularMenu />
      <CallUs />
      <ChefRecommends />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
