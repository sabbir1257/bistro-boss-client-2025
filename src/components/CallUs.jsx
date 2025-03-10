import React from "react";

const CallUs = () => {
  return (
    <div className="flex items-center justify-center p-4 bg-white">
      {/* Responsive section with width 1280px and height 250px */}
      <div className="bg-black p-6 rounded-lg shadow-lg w-full max-w-[1280px] h-[250px] flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="mb-2 text-5xl font-bold text-white">
            Call Us: +88 0192345678910
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CallUs;