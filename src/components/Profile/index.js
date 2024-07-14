"use client";

import { useContext } from "react";
import { StateContext } from "@/app/stateManager/context";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";

const Profile = () => {
  const { state, dispatch } = useContext(StateContext);
  const { toggleProfile } = state;

  const handleToggle = () => {
    console.log("profile modal");
    dispatch({ type: "TOGGLE_PROFILE", payload: !toggleProfile });
  };

  return (
    <div className="flex md:ml-4 hover:cursor-pointer" onClick={handleToggle}>
      <div className="items-center flex md:pl-2">
        <button>
          <BiMenuAltRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Profile;
