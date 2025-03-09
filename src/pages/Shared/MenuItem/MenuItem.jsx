import React from "react";

const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex gap-3 ">
      <img
        className="w-[120px] rounded-tl-[0px] rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px] "
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase text-[20px] font-bold">{name} -------</h3>
        <p className="text-[16px] font-bold text-slate-400">{recipe}</p>
      </div>
      <p className="text-[#BB8506]">${price}</p>
    </div>
  );
};

export default MenuItem;
