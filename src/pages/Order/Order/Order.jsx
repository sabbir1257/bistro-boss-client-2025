import React, { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../HOOKS/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";

const Order = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [menu] = useMenu();

  // Filter menu items by category
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  const tabs = [
    { name: "salad", content: salad },
    { name: "pizza", content: pizza },
    { name: "soups", content: soup },
    { name: "desserts", content: desserts },
    { name: "drinks", content: offered },
  ];

  return (
    <div>
      <Cover
        img={orderCover}
        title="Our Order"
        details="Would you like to try a dish?"
      />

      <div className="flex justify-center mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)} // Change active tab on click
            className={`py-2 px-4 text-lg focus:outline-none
              ${
                activeTab === index
                  ? "border-b-2 border-[#BB8506] text-[#BB8506]" // Active tab style
                  : "text-gray-600 hover:border-[#BB8506] hover:text-[#BB8506]"
              }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="grid gap-4 m-4 sm:grid-cols-2 md:grid-cols-3">
        {tabs[activeTab].content.length > 0 ? (
          tabs[activeTab].content.map((item) => (
            <FoodCard key={item._id} item={item} /> // Render FoodCard for each item in the active tab
          ))
        ) : (
          <p>No items available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Order;
