import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";
import SectionTitle from "../../../components/SectionTitle";
import banner from "../../../assets/menu/banner3.jpg";
import dessert from "../../../assets/menu/dessert-bg.jpeg";
import pizza from "../../../assets/menu/pizza-bg.jpg";
import salad from "../../../assets/menu/salad-bg.jpg";
import soup from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const sections = [
    {
      img: dessert,
      title: "DESSERTS",
      details: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      category: "dessert",
      buttonText: "ORDER YOUR FAVOURITE FOOD"
    },
    {
      img: pizza,
      title: "Pizza",
      details: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      category: "pizza",
      buttonText: "ORDER YOUR FAVOURITE FOOD"
    },
    {
      img: salad,
      title: "Salads",
      details: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      category: "salad",
      buttonText: "ORDER YOUR FAVOURITE FOOD"
    },
    {
      img: soup,
      title: "Soups",
      details: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      category: "soup",
      buttonText: "ORDER YOUR FAVOURITE FOOD"
    }
  ];
  
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={banner}
        title="ouse menu"
        details="Would you like to try a dish?"
      />
       <SectionTitle
        heading={"TODAY'S OFFER"}
        subHeading={"---Don't miss---"}
      />
      <MenuCategory buttonName='ORDER YOUR FAVOURITE FOOD' category="offered"  />

      {sections.map((section, index) => (
        <React.Fragment key={index}>
          <Cover img={section.img} title={section.title} details={section.details} />
          <MenuCategory buttonName={section.buttonText} category={section.category} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Menu;