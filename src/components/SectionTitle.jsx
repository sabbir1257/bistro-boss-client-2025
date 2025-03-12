import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="py-4 text-center md:py-8 ">
      <p className="decoration-2 underline-offset-5 decoration-slate-300 font-semibold  text-[#D99904] underline md:text-[20px] text-[14px]">
        {subHeading}
      </p>
      <h3 className="underline pt-8 uppercase decoration-slate-300 decoration-2 underline-offset-5 md:text-[40px] text-2xl font-bold">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;