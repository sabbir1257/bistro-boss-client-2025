import MenuItem from "../MenuItem/MenuItem";
import useMenu from "../../../HOOKS/useMenu";
import { useNavigate } from "react-router-dom";

const MenuCategory = ({ buttonName, category }) => {
  const [menu] = useMenu();
  const navigate = useNavigate(); // ✅ Use navigate for dynamic routing


  const categorye = menu.filter((item) => item.category === category);



  return (
    <section className="p-4 md:mb-10">
      <div className="grid gap-5 md:grid-cols-2">
        {categorye.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center mt-6">
          {/* ✅ Navigate to /order/category when button is clicked */}
          <button
          onClick={() => navigate(`/order/${category}`)}
          type="button"
          className="uppercase text-black my-3 hover:text-white border-0 border-b-4 border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          {buttonName}
        </button>
      </div>
    </section>
  );
};

export default MenuCategory;
