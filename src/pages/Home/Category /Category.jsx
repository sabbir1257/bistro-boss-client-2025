import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";

/* Improvement Admin can change the Carousel img and name */
const categories = [
  { image: img1, name: "Salads" },
  { image: img2, name: "Pizzas" },
  { image: img3, name: "Soups" },
  { image: img4, name: "Desserts" },
  { image: img5, name: "" },
];

const Category = () => {
  return (
    <section className="p-4">
      <SectionTitle heading="ORDER ONLINE" subHeading="---From 11:00am to 10:00pm---" />

      <div className="py-4 md:pb-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={55}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.image} alt={item.name || "Category Image"} />
              {item.name && (
                <h3 className="-mt-6 text-center text-white uppercase md:-mt-16 md:text-3xl">
                  {item.name}
                </h3>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
