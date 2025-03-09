import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="py-4 text-center md:py-8 ">
      <p className="decoration-2 underline-offset-5 decoration-slate-300 font-semibold  text-[#D99904] underline text-[20px]">
        {subHeading}
      </p>
      <h3 className="underline pt-4 uppercase decoration-slate-300 decoration-2 underline-offset-5 text-[40px] font-bold">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
