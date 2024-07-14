"use client";

import { StateContext } from "@/app/stateManager/context";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaLightbulb, FaMoon, FaThemeco, FaUpload, FaUserEdit } from "react-icons/fa";
import { RiContrastFill } from "react-icons/ri";
// import Profile from "";

const ProfileModal = () => {
  // logic to get user from session
  const {state, dispatch} = useContext(StateContext);

  const [hover, setHover] = useState(false);

  const handleClick = () =>{
    dispatch({type: "PERSONALIZE_MODAL", payload: true});
  }

  return (
    <div className="h-[14e] w-[15em] absolute top-16 right-3  shadow-md rounded-md backdrop-blur-xl bg-transparent">
     <div className="p-2 "> <div className="md:hidden flex"></div>

      <div className="py-2 md:py-0 flex justify-center   hover:shadow shadow border-b-stone-500">
        <button
          onClick={handleClick}
          className="px-3 py-4 w-100 flex items-center  justify-center"
        >
          <FaUserEdit />
          <span className="px-2">Edit Preferences</span>
        </button>
      </div>
      <div
        className="py-2 md:py-0  hover:shadow-lg border-b-stone-500"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="px-3 py-4 w-100 flex items-center  justify-center">
          <RiContrastFill />
          <p className="px-2">Theme</p>
        </div>

        {hover && <div className="flex justify-center">
            {/* these two components have to become one component to avoid duplication */}
            <div className="flex flex-col justify-center items-center w-[100%] py-1 hover:text-stone-200 cursor-pointer"><FaLightbulb/> <span className="px-1">Light</span></div>
            <div className="flex flex-col justify-center items-center w-[100%] py-1  hover:bg-black hover:text-white cursor-pointer"><FaMoon/> <span className="px-1">Dark</span></div>
            </div>}
      </div>
      </div>
    </div>
  );
};

export default ProfileModal;
