import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";

const ChefRecommends = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  return (
    <section>
      <SectionTitle
        heading={"CHEF RECOMMENDS"}
        subHeading={"---Should Try---"}
      />
      <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
        {/* Grid Container for Cards */}
        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menu?.slice(0, 3).map((card) => (
            <div
              key={card._id}
              className="overflow-hidden bg-white rounded-lg shadow-lg"
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="object-cover w-full h-48"
              />

              {/* Details */}
              <div className="p-6">
                <h2 className="mb-2 text-2xl font-bold text-center">
                  {card.name}
                </h2>
                <p className="mb-4 text-base font-bold">{card.recipe}</p>

                <div className="flex justify-center">
                  <button className="px-6 py-2 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefRecommends;
