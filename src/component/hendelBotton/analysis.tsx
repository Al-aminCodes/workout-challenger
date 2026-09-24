import React from "react";

const AnalysisSection = () => {
  return (
    <>
      <div className="flex flex-col gap-1 pl-2">
        <p className="text-gray-500 font-medium text-xs md:text-sm tracking-wide">
          Exercises
        </p>
        <h2 className="text-[#ccff00] text-3xl md:text-4xl font-extrabold tracking-tight">
          2
        </h2>
      </div>

      {/* Column 2: Minutes */}
      <div className="flex flex-col gap-1 border-x border-gray-800/60 px-8 md:px-12">
        <p className="text-gray-500 font-medium text-xs md:text-sm tracking-wide">
          Minutes
        </p>
        <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">
          23
        </h2>
      </div>

      {/* Column 3: Calories */}
      <div className="flex flex-col gap-1 pl-6 md:pl-10">
        <p className="text-gray-500 font-medium text-xs md:text-sm tracking-wide">
          Calories
        </p>
        <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">
          190
        </h2>
      </div>
    </>
  );
};

export default AnalysisSection;
