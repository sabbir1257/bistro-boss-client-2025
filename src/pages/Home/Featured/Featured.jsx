import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="bg-fixed featured-item opacity-90">
      <SectionTitle heading="FROM OUR MENU" subHeading="---Should Try---" />
      <div className="items-center justify-between gap-4 px-16 py-10 text-white md:gap-16 md:flex">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="">
          <h2 className="text-2xl font-bold">March 20, 2023</h2>
          <h2 className="text-2xl font-bold">WHERE CAN I GET SOME?</h2>
          <p className="text-balance">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button
            type="button"
            className="uppercase text-white hover:text-white border-0 border-b-4 border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600  dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;