import React from "react";

const Logo = () => {
  return (
    <div className=" relative flex items-center">
      <p className="text-black-600 font-black text-lg">J</p>
      <div className="relative">
        <div className="absolute h-[30px] w-[30px] bg-stone-700 rounded-full top-0 opacity-50 left-5"></div>
        <div className=" h-[30px] w-[30px] bg-secondary rounded-full top-0 right-0"></div>
      </div>
      <p className="text-black-600 font-black text-white z-50 text-sm">bs</p>
    </div>
  );
};

export default Logo;
