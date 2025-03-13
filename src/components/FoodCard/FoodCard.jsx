import React from "react";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <div className="relative flex flex-col h-full overflow-hidden bg-white rounded-lg shadow-lg">
      {/* Image */}
      <img src={image} alt={name} className="object-cover w-full h-48" />

      {/* Price in the top-right corner */}
      <p className="absolute px-3 py-1 text-lg font-bold text-white bg-black rounded-md top-4 right-4">
        ${price}
      </p>

      {/* Details Section */}
      <div className="flex flex-col flex-grow p-6">
        <h2 className="mb-2 text-2xl font-bold text-center">{name}</h2>
        <p className="mb-4 text-base">{recipe}</p>
      </div>

      {/* Button Always at the Bottom */}
      <div className="p-4 mt-auto">
        <div className="flex justify-center">
          <button
            type="button"
            className="uppercase  text-[#BB8506] border-0 border-b-4 border-[#BB8506] hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
