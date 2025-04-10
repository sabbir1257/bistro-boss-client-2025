import React from "react";
import { FaUser, FaUsers } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import { MdDeleteOutline } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../HOOKS/useAxiosSecure";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users", {
        headers: {
          authorization: `Bearer ${localStorage.getItem('access-token')}`
        }
      });
      return res.data;
    },
  });
  const handleMakeAdmin = (user) => {
    // Handle make admin functionality her
    axiosSecure.patch(`users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${user.name} is an Admin`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="container p-4 mx-auto z-999">
      <SectionTitle subHeading="---How many??---" heading="MANAGE ALL USERS" />
      <h2 className="mb-4 text-xl font-medium">Total Users : {users.length}</h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full table-auto">
          <thead className="bg-[#D1A054]">
            <tr className="text-center ">
              <th className="px-4 py-2 text-left"></th>
              <th className="px-4 py-2 text-left">NAME</th>
              <th className="px-4 py-2 text-left">EMAIL</th>
              <th className="px-4 py-2 text-left">ROLE</th>
              <th className="px-4 py-2 text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2 text-center">
                  {user.role === "admin" ? (
                    <button className="font-medium ">
                      <FaUser />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="text-2xl font-medium "
                    >
                      <FaUsers />
                    </button>
                  )}
                </td>
                <td className="flex items-center justify-center gap-4 px-4 py-2 text-center">
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="p-2 text-2xl font-medium text-white bg-red-600 rounded-md cursor-pointer hover:bg-red-800"
                  >
                    <MdDeleteOutline />
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
