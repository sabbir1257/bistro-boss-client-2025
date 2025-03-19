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
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  return (
    <section className="p-4 w-full max-w-[1250px] mx-auto">
      <SectionTitle heading="Customer Reviews" subHeading="---What Our Clients Say---" />

      <div className="relative w-full">
        {/* Left Arrow Button */}
        <button
          onClick={prevSlide}
          className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-700 rounded-full top-1/2 left-4"
        >
          &lt;
        </button>

        {/* Display a single Review Card */}
        {reviews.length > 0 && (
          <div className="w-full p-8 mx-auto text-center bg-white rounded-lg shadow-lg">
            <div className="w-1/5 mx-auto mb-4 ">
              {/* Rating Component */}
              <Rating className="text-yellow-500 " value={reviews[currentIndex].rating} readOnly />
            </div>

            {/* Review Details */}
            <p className="text-lg italic text-gray-700">{reviews[currentIndex].details}</p>

            {/* Reviewer Name */}
            <p className="mt-4 text-2xl font-semibold text-yellow-600">{reviews[currentIndex].name}</p>

            {/* Review Date */}
            <p className="mt-2 text-sm text-gray-500">{reviews[currentIndex].date}</p>
          </div>
        )}

        {/* Right Arrow Button */}
        <button
          onClick={nextSlide}
          className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-700 rounded-full top-1/2 right-4"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
