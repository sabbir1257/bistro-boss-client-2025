import React from "react";
import useCart from "../../../HOOKS/useCart";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-[992px] p-3">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold md:text-3xl">Items: {cart.length}</h2>
          <h2 className="font-semibold md:text-3xl">
            Total Price: ${totalPrice}
          </h2>
          <button className=" font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-[#D1A054] hover:bg-yellow-400">
            pay
          </button>
        </div>
        {/*  */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="flex flex-wrap items-center justify-between pb-4 space-y-4 bg-white flex-column md:flex-row md:space-y-0 dark:bg-gray-900"></div>
          <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3">
                  item image
                </th>
                <th scope="col" className="px-6 py-3">
                  item name
                </th>
                <th scope="col" className="px-6 py-3">
                  price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => (
                <tr
                  className="bg-white border-b border-gray-200 hover:bg-gray-50"
                  key={idx}
                >
                  <td className="px-6 py-4">{idx + 1}</td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src={item.image}
                      alt="Jese image"
                    />
                  </th>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">${item.price}</td>
                  <td className="px-6 py-4">
                    <button className="font-medium text-red-600 dark:text-red-500">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
