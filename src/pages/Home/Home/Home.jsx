import React from "react";
import Banner from "../Banner/Banner";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";
import CallUs from "../../../components/CallUs";
import ChefRecommends from "../../../components/ChefRecommends";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import SectionTitle from "../../../components/SectionTitle";
import coverImage from "../../../assets/home/chef-service.jpg";
import Category from "../Category/Category";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>

      <Banner />
     <Category />

      <Cover
        img={coverImage}
        title={"Bistro Boss"}
        details={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
        }
      />

      <SectionTitle heading={"FROM OUR MENU"} subHeading={"---Popular items---"} />
      <MenuCategory buttonName="View Full Menu" category="popular" />

      <CallUs />
      <ChefRecommends />
      <Featured />
      <Testimonials /> 
    </div>
  );
};

export default Home;