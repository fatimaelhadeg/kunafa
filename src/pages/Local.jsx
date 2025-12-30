import React from "react";
import LocalMap from "../tactics/LocalMap";

const Local = () => {
  return (
    <div className="min-h-screen py-16 px-6 bg-white dark:bg-[#1F1D2B]">
      <h1 className="text-3xl font-bold text-center text-orange-500 mb-8">
        Our Location
      </h1>
      <LocalMap />
    </div>
  );
};

export default Local;
