import React from "react";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  const handleAddToCard = food => {
console.log(food)
  }

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
          onClick={() => handleAddToCard(item)}
            type="button"
            className="uppercase  text-[#BB8506] border-0 border-b-4 border-[#BB8506] hover:bg-gray-900   font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
