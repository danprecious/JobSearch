"use client";

import { useContext } from "react";
import { StateContext } from "@/app/stateManager/context";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";

const Profile = () => {
  const { state, dispatch } = useContext(StateContext);
  const { toggleProfile } = state;

  const handleToggle = () => {
    console.log("profile modal")
    dispatch({ type: "TOGGLE_PROFILE", payload: !toggleProfile });
  };

  return (
    <div className="flex hover:cursor-pointer" onClick={handleToggle}>
      <div className="h-[40px] w-[40px] overflow-hidden flex justify-center items-center md:mx-2 rounded-lg bg-zinc-500">
        <Image
          width={1040}
          height={1040}
          className=""
          src="/assets/images/profile-image.jpeg"
          alt="profile_image"
        />
      </div>
      <div className="flex-col md:flex justify-center hidden">
        <p className="text-sm font-semibold">Robin Sharma</p>
        <p className="text-xs font-thin dark:text-zinc-300 text-zinc-500">
          Software Engineer
        </p>
      </div>
      <div className="items-center flex md:pl-2">
        <button>
          <FaAngleDown />
        </button>
      </div>
    </div>
  );
};

export default Profile;
