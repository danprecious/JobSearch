import Link from "next/link";
import React, { useState } from "react";
import { FaLightbulb, FaMoon, FaThemeco, FaUpload, FaUserEdit } from "react-icons/fa";
import { RiContrastFill } from "react-icons/ri";
// import Profile from "";

const ProfileModal = () => {
  // logic to get user from session

  const [hover, setHover] = useState(false);

  return (
    <div className="rounded-2xl bg-stone-50 h-[14e] w-[15em] absolute top-16 right-3  shadow-md">
      <div className="md:hidden flex"></div>

      <div className="py-2 md:py-0 hover:border-b-[1px rounded-md hover:shadow-lg shadow border-b-stone-500">
        <Link
          href="/editProfile"
          className="px-3 py-4 w-100 flex items-center  justify-center"
        >
          <FaUserEdit />
          <span className="px-2">Edit Profile</span>
        </Link>
      </div>
      <div
        className="py-2 md:py-0 hover:border-b-[1px rounded-md hover:shadow-lg border-b-stone-500"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="px-3 py-4 w-100 flex items-center  justify-center">
          <RiContrastFill />
          <p className="px-2">Theme</p>
        </div>

        {hover && <div className="flex justify-center">
            {/* these two components have to become one component to avoid duplication */}
            <div className="flex flex-col justify-center items-center w-[100%] p-3 border hover:border-2 rounded-lg"><FaLightbulb/> <span className="px-1">Light</span></div>
            <div className="flex flex-col justify-center items-center w-[100%] p-3 border"><FaMoon/> <span className="px-1">Dark</span></div>
            </div>}
      </div>
    </div>
  );
};

export default ProfileModal;
