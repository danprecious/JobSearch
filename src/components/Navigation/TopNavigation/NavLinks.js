"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();
  const paths = [
    {
        href: "/findJobs",
        title: "Jobs"
    },
  
    {
        href: "/bookmarks",
        title: "Bookmarks"
    },
  
];

  const Captialize = (word) =>{
    return word.slice(1).charAt(0).toUpperCase()
  }

  return (
    <div className="flex justify-center md:justify-right">
      {paths.map((path, index) => (
        <div key={index} className="flex flex-col items-center">
          <Link
            href={path.href}
            className={`${
              pathname == path.href
                ? "font-bold text-black dark:text-white"
                : "font-bold text-zinc-400"
            }
                text-sm px-4 
            `}
          >
            {path.title}
          </Link>
          <div className={`${pathname == path.href ? "flex justify-center items-center" : "hidden"}`}><div className="bg-red-600 rounded-full h-[5px] w-[10px]"></div></div>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
