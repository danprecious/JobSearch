"use client";

import Search from "@/components/Forms/Search";
import Profile from "@/components/Profile";
import { FaSearch } from "react-icons/fa";
import NavLinks from "./NavLinks";

const TopNavigation = () => {
  return (
    <div className="w-[100%] z-50 bg-white dark:bg-darkBg fixed top-0 py-4 md:px-12 sm:px-8 xs:px-4 px-2 md:justify-between items-center">
      <div className="flex justify-between items-center relative">
        <div className=" relative flex items-center">
          <p className="text-black-600 font-black text-lg">J</p>
          <div className="relative"> 
            <div className="absolute h-[30px] w-[30px] bg-stone-700 rounded-full top-0 opacity-50 left-5"></div>
            <div className=" h-[30px] w-[30px] bg-black/75 rounded-full top-0 right-0"></div>
          </div>
          <p className="text-black-600 font-black text-white z-50 text-sm">bs</p>
        </div>
        <div className="flex md:w-[80%] items-center justify-between">
          <div className="hidden md:flex"><NavLinks /></div>
          <div className="flex justify-between items-center">
            <Search />
            <div className="flex items-center justify-center"><Profile /></div>
          </div>
        </div>
      </div>
      <div className="md:hidden mt-4"><NavLinks /></div>
    </div>
  );
};

export default TopNavigation;
