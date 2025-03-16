import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../HOOKS/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";

const Order = () => {
  const categories = [
    "salad",
    "pizza",
    "soup",
    "dessert",
    "drinks",
    "offered",
  ];
  const { category } = useParams();
  const navigate = useNavigate();
  const [menu] = useMenu();

  // Ensure the category is valid
  const initialIndex = categories.indexOf(category);
  const validIndex = initialIndex >= 0 ? initialIndex : 0;
  const [activeTab, setActiveTab] = useState(validIndex);

  useEffect(() => {
    setActiveTab(validIndex); // Update tab when URL changes
  }, [category]);

  if (!menu.length) return <p>Loading menu...</p>;

  // Filter menu items by category
  const categoryData = {
    offered: menu.filter((item) => item.category === "offered"),
    salad: menu.filter((item) => item.category === "salad"),
    pizza: menu.filter((item) => item.category === "pizza"),
    soup: menu.filter((item) => item.category === "soup"),
    dessert: menu.filter((item) => item.category === "dessert"),
    drinks: menu.filter((item) => item.category === "drinks"),
  };

  const tabs = categories.map((name) => ({
    name,
    content: categoryData[name] || [],
  }));

  return (
    <div>
      <Cover
        img={orderCover}
        title="Our Order"
        details="Would you like to try a dish?"
      />

      {/* Tab Buttons */}
      <div className="flex justify-center mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => navigate(`/order/${tab.name}`)} // ✅ Update URL on click
            className={`py-2 px-4 text-lg focus:outline-none ${
              activeTab === index
                ? "border-b-2 border-[#BB8506] text-[#BB8506]"
                : "text-gray-600 hover:border-[#BB8506] hover:text-[#BB8506]"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Food Items */}
      <div className="grid gap-4 m-4 sm:grid-cols-2 md:grid-cols-3">
        {tabs[activeTab]?.content.length > 0 ? (
          tabs[activeTab].content.map((item) => (
            <FoodCard key={item._id} item={item} />
          ))
        ) : (
          <p>No items available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Order;
