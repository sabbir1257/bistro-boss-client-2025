import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import PopularMenu from "../../Shared/MenuCategory/MenuCategory";
import SectionTitle from "../../../components/SectionTitle";
import img1 from "../../../assets/menu/banner3.jpg";
import img2 from "../../../assets/menu/dessert-bg.jpeg";
import img3 from "../../../assets/menu/pizza-bg.jpg";
import img4 from "../../../assets/menu/salad-bg.jpg";
import img5 from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Page</title>
      </Helmet>
      <Cover
        img={img1}
        title="ouse menu"
        details="Would you like to try a dish?"
      />
       <SectionTitle
        heading={"TODAY'S OFFER"}
        subHeading={"---Don't miss---"}
      />
      <PopularMenu buttonName='ORDER YOUR FAVOURITE FOOD' category="offered"  />
      <Cover
        img={img2}
        title="DESSERTS"
        details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <PopularMenu buttonName='ORDER YOUR FAVOURITE FOOD' category="dessert" />
      <Cover
        img={img3}
        title="pizza"
        details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <PopularMenu buttonName='ORDER YOUR FAVOURITE FOOD' category="pizza" />
      <Cover
        img={img4}
        title="salads"
        details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <PopularMenu buttonName='ORDER YOUR FAVOURITE FOOD' category="salad" />
      <Cover
        img={img5}
        title="soups"
        details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <PopularMenu buttonName='ORDER YOUR FAVOURITE FOOD' category="soup" />
    </div>
  );
};

export default Menu;