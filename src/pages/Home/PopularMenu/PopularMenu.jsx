import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section className="p-4 md:mb-10">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Popular items---"}
      />
      <div className="grid gap-10 md:grid-cols-2">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <button
        type="button"
        className="uppercase text-black my-3 hover:text-white border-0 border-b-4 border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600  dark:hover:bg-gray-600 dark:focus:ring-gray-800"
      >
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;