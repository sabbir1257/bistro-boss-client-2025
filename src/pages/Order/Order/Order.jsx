import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../HOOKS/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";
import { Helmet } from "react-helmet-async";

const Order = () => {
  // Define available categories
  const categories = ["salad", "pizza", "soup", "dessert", "drinks", "offered"];
  const { category } = useParams(); // Get the category from the URL
  const navigate = useNavigate();
  const [menu] = useMenu(); // Fetch menu data
  const itemsPerPage = 6; // ✅ Number of items per page

  // Get the index of the category from the list (if not found, default to 0)
  const initialIndex = categories.indexOf(category);
  const validIndex = initialIndex >= 0 ? initialIndex : 0;
  const [activeTab, setActiveTab] = useState(validIndex);
  const [currentPage, setCurrentPage] = useState(1); // ✅ Track current page

  // When the category changes, update the active tab and reset pagination
  useEffect(() => {
    setActiveTab(validIndex);
    setCurrentPage(1); // ✅ Reset page number when changing category
  }, [category]);

  // Show a loading message while menu data is fetching
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

  // Create an array of tabs with category names and filtered items
  const tabs = categories.map((name) => ({
    name,
    content: categoryData[name] || [],
  }));

  // Pagination Logic
  const totalItems = tabs[activeTab]?.content.length || 0; // Get total items in the selected category
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Calculate total pages
  const startIndex = (currentPage - 1) * itemsPerPage; // Get start index for slicing items
  const paginatedItems = tabs[activeTab]?.content.slice(
    startIndex,
    startIndex + itemsPerPage
  ); // Get items for the current page

  return (
    <div>
      {/* Page Title for SEO */}
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>

      {/* Page Cover Section */}
      <Cover
        img={orderCover}
        title="Our Order"
        details="Would you like to try a dish?"
      />

      {/* Tab Navigation */}
      <div className="flex justify-center mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => navigate(`/order/${tab.name}`)} // ✅ Navigate to the selected category
            className={`py-2 px-4 text-lg focus:outline-none ${
              activeTab === index
                ? "border-b-2 border-[#BB8506] text-[#BB8506]" // ✅ Active tab styling
                : "text-gray-600 hover:border-[#BB8506] hover:text-[#BB8506]"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Food Items Grid */}
      <div className="grid gap-4 m-4 sm:grid-cols-2 md:grid-cols-3">
        {paginatedItems.length > 0 ? (
          paginatedItems.map((item) => <FoodCard key={item._id} item={item} />) // ✅ Show paginated food items
        ) : (
          <p>No items available for this category.</p>
        )}
      </div>

      {/* Pagination Controls (Hidden if 6 or fewer items) */}
      {totalItems > itemsPerPage && (
        <div className="flex justify-center my-6 space-x-2">
          {/* Previous Button */}
          <button
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            onClick={() => {
              setCurrentPage((prev) => Math.max(prev - 1, 1));
              window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Auto-scroll to top
            }}
            disabled={currentPage === 1}
          >
            ⬅ Prev
          </button>

          {/* Page Number Buttons */}
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                currentPage === i + 1
                  ? "bg-yellow-500 text-white shadow-lg transform scale-110" // ✅ Highlight active page
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => {
                setCurrentPage(i + 1);
                window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Auto-scroll to top
              }}
            >
              {i + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            onClick={() => {
              setCurrentPage((prev) => Math.min(prev + 1, totalPages));
              window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Auto-scroll to top
            }}
            disabled={currentPage === totalPages}
          >
            Next ➡
          </button>
        </div>
      )}
    </div>
  );
};

export default Order;
