import React, { useState, useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";

const categories = [
  { image: img1, name: "Salads" },
  { image: img2, name: "Pizzas" },
  { image: img3, name: "Soups" },
  { image: img4, name: "Desserts" },
  { image: img5, name: "Drinks" },
];

const Category = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = categories.length;

  // Automatic slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [totalSlides]);

  // Handle slide change via dot navigation
  const changeSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="p-4 w-full max-w-[1250px] mx-auto">
      <SectionTitle heading="ORDER ONLINE" subHeading="---From 11:00am to 10:00pm---" />
      <div className="relative w-full overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500"
          style={{
            transform: `translateX(-${(100 / totalSlides) * currentIndex}%)`,
          }}
        >
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full px-1 sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-60 md:h-72 lg:h-80"
                />
                <h3 className="absolute bottom-0 left-0 w-full py-2 text-lg font-semibold text-center text-white uppercase bg-black bg-opacity-50">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Navigation */}
        <div className="absolute left-0 z-10 flex justify-center w-full space-x-2 bottom-4">
          {categories.map((_, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              className={`w-3 h-3 rounded-full bg-slate-500 ${
                currentIndex === index ? "bg-opacity-100" : "bg-opacity-60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
