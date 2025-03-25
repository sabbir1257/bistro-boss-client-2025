import React, { useState, useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]); // State to hold fetched reviews
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch reviews data when the component mounts
  useEffect(() => {
    fetch("http://localhost:8000/reviews") // ✅ Ensure the path to the JSON file is correct
      .then((res) => res.json())
      .then((data) => setReviews(data)) // Set reviews data into state
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []); // Empty dependency array ensures this runs only once when component mounts

  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  return (
    <section className="p-4 w-full max-w-[1250px] mx-auto">
      <SectionTitle
        heading="Customer Reviews"
        subHeading="---What Our Clients Say---"
      />

      <div className="relative flex items-center justify-center w-full py-4 bg-white">
        {/* Left Arrow Button */}
        <button
          onClick={prevSlide}
          className="absolute p-3 text-white -translate-y-1/2 bg-gray-700 rounded-full left-4 top-1/2"
        >
          &lt;
        </button>

        {/* Display a single Review Card */}
        {reviews.length > 0 && (
          <div className="w-full max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-lg min-h-[350px] flex flex-col items-center justify-between">
            {/* Rating Component */}
            <div className="flex justify-center w-1/5 py-4 mx-auto mb-2">
              <Rating
                className="text-yellow-500"
                value={reviews[currentIndex].rating}
                readOnly
              />
            </div>

            {/* Review Details */}
            <p className="flex-1 py-4 text-lg italic text-center text-gray-700">
              {reviews[currentIndex].details}
            </p>

            {/* Reviewer Info */}
            <div className="text-center">
              <p className="max-w-xs mt-4 overflow-hidden text-2xl font-semibold text-yellow-600 whitespace-nowrap text-ellipsis">
                {reviews[currentIndex].name}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {reviews[currentIndex].date}
              </p>
            </div>
          </div>
        )}

        {/* Right Arrow Button */}
        <button
          onClick={nextSlide}
          className="absolute p-3 text-white -translate-y-1/2 bg-gray-700 rounded-full right-4 top-1/2"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
