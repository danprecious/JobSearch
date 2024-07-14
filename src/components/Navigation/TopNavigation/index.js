"use client";

import Search from "@/components/Forms/Search";
import Profile from "@/components/Profile";
import { FaSearch } from "react-icons/fa";
import NavLinks from "./NavLinks";
import ProfileModal from "@/components/Profile/profileModal";
import { useContext } from "react";
import { StateContext } from "@/app/stateManager/context";
import Logo from "@/components/logo";

const TopNavigation = () => {
  const { state } = useContext(StateContext);
  const { toggleProfile } = state;
  return (
    <div className="w-[100%] z-30 sticky top-0 py-4 md:px-12 sm:px-8 xs:px-4 px-5 md:justify-between items-center">
      {toggleProfile && <ProfileModal />}
      <div className="flex justify-between items-center relative">
              <Logo />
              <div className="flex md:w-[80%] items-center justify-between">
          <div className="hidden md:flex">
            <NavLinks />
          </div>
          <div className="flex justify-between items-center">
            <Search />
            <div className="flex items-center justify-center">
              <Profile />
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden mt-4">
        <NavLinks />
      </div>
    </div>
  );
};

export default TopNavigation;
