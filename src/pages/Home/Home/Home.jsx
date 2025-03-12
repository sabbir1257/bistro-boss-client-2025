import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category /Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import CallUs from "../../../components/CallUs";
import ChefRecommends from "../../../components/ChefRecommends";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import SectionTitle from "../../../components/SectionTitle";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <Cover
        img={"../../src/assets/home/chef-service.jpg"}
        title={"Bistro Boss"}
        details={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
        }
      />
       <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Popular items---"}
      />
      <PopularMenu name='View Full  Menu' />
      <CallUs />
      <ChefRecommends />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
