import { Inter } from "next/font/google";
import "./globals.css";
import TopNavigation from "@/components/Navigation/TopNavigation";
import SideNavigation from "@/components/Navigation/SideNavigation";
import StateContextProvider from "./stateManager/context";
// import { FaBookmark } from "react-icons/fa";
import { Toast } from "@/components/modals/BookMarkToast";
import { DeleteBookMark } from "@/components/modals/BookmarkModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FindJobs",
  description: "Find your dream Job",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StateContextProvider>
        <body className={`${inter.className} `}>
            {children}  
        </body>
      </StateContextProvider>
    </html>
  );
}
