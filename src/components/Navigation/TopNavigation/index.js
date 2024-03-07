"use client";

import Search from "@/components/Forms/Search";
import Profile from "@/components/Profile";
import NavLinks from "./NavLinks";

const TopNavigation = () => {
  return (
    <div className="w-[100%] max-h-[4em] py-4 md:px-16 flex md:justify-between items-center">
      <div className=" relative">
        <p className="text-blue-600 font-black text-lg">FindJ..</p>
        <div className="absolute h-[30px] w-[30px] bg-sky-700 rounded-full top-0 opacity-50 right-0"></div>
        <div className="absolute h-[30px] w-[30px] bg-red-700 rounded-full top-0 opacity-50 right-4"></div>
      </div>
      <div className="flex md:w-[80%] items-center justify-between">
        <NavLinks />
        <div className="flex justify-between items-end">
          <Search />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
