import React, { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import "react-tabs/style/react-tabs.css";

const Order = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "salad", content: "This is the content of Tab 1" },
    { name: "pizza", content: "This is the content of Tab 2" },
    { name: "soups", content: "This is the content of Tab 3" },
    { name: "desserts", content: "This is the content of Tab 3" },
    { name: "drinks", content: "This is the content of Tab 3" },
  ];
  return (
    <div>
      <Cover
        img={orderCover}
        title="Our order"
        details="Would you like to try a dish?"
      />

      <div className="flex justify-center">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)} // Change active tab on click
            className={`py-2 px-4 text-lg focus:outline-none
              ${
                activeTab === index
                  ? "border-b-2 border-[#BB8506] text-[#BB8506]" // Active tab style
                  : "text-gray-600 hover:border-[#BB8506] hover:text-[#BB8506]"
              } // Hover and inactive tab style
            `}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4">
        <p>{tabs[activeTab].content}</p>
      </div>
    </div>
  );
};

export default Order;
