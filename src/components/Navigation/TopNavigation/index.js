"use client";

import Search from "@/components/Forms/Search";
import Profile from "@/components/Profile";
import { FaSearch } from "react-icons/fa";
import NavLinks from "./NavLinks";

const TopNavigation = () => {
  return (
    <div className="w-[100%] max-h-[10em] py-4 md:px-6 sm:px-8 xs:px-4  md:justify-between items-center">
      <div className="flex justify-between items-center">
        <div className=" relative">
          <p className="text-blue-600 font-black text-lg">FindJ..</p>
          <div className="absolute h-[30px] w-[30px] bg-sky-700 rounded-full top-0 opacity-50 right-0"></div>
          <div className="absolute h-[30px] w-[30px] bg-red-700 rounded-full top-0 opacity-50 right-4"></div>
        </div>
        <div className="flex md:w-[80%] items-center justify-between">
          <div className="hidden md:flex"><NavLinks /></div>
          <div className="flex justify-between items-center">
            <div className="md:hidden flex items-center justify-center"><FaSearch/></div>
            <div className="hidden md:flex"><Search /></div>
            <div className="flex items-center justify-center"><Profile /></div>
          </div>
        </div>
      </div>
      <div className="md:hidden mt-4"><NavLinks /></div>
    </div>
  );
};

export default TopNavigation;
