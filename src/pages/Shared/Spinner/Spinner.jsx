import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-transparent border-t-[#D99904] border-r-[#D99904] rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-transparent border-b-[#D99904] border-l-[#D99904] rounded-full animate-spin-reverse"></div>
        <div className="absolute inset-4 bg-[#D99904] rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Spinner;
