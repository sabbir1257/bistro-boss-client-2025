import React from "react";

const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex gap-3 ">
      <img
        className="md:w-[120px] w-[50px] rounded-tl-[0px] rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px] "
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase md:text-[20px] font-bold">{name} -------</h3>
        <p className="md:text-[16px] text-[10px] font-bold text-slate-400">{recipe}</p>
      </div>
      <p className="text-[#BB8506]">${price}</p>
    </div>
  );
};

export default MenuItem;
