import React from "react";
import SectionTitle from "../../../../components/SectionTitle";




const AllUsers = () => {
    const data = [
        {
          name: "John Doe",
          email: "john.doe@example.com",
          role: "Admin",
        },
        {
          name: "Jane Smith",
          email: "jane.smith@example.com",
          role: "User",
        },
        {
          name: "Alice Jones",
          email: "alice.jones@example.com",
          role: "Moderator",
        },
      ];

  return (
    <div className="container p-4 mx-auto">
      <SectionTitle subHeading="---How many??---" heading="MANAGE ALL USERS" />
      <h2 className="mb-4 text-xl font-semibold">Total Items: {data.length}</h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full table-auto">
          <thead className="bg-[#D1A054]">
            <tr>
              <th className="px-4 py-2 text-left"></th>
              <th className="px-4 py-2 text-left">NAME</th>
              <th className="px-4 py-2 text-left">EMAIL</th>
              <th className="px-4 py-2 text-left">ROLE</th>
              <th className="px-4 py-2 text-left">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.email}</td>
                <td className="flex items-center px-4 py-2">
                </td>
                <td className="px-4 py-2">
                  <button className="text-red-500 hover:underline">
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;