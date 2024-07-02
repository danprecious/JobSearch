import TopNavigation from "@/components/Navigation/TopNavigation";
import SideNavigation from "@/components/Navigation/SideNavigation";
// import { FaBookmark } from "react-icons/fa";
import { Toast } from "@/components/modals/BookMarkToast";
import { DeleteBookMark } from "@/components/modals/BookmarkModal";



export default function RootLayout({ children }) {
  return (
    <main className=" ">
      <div className="conten relative">
        <TopNavigation />

        <DeleteBookMark />
        <Toast />
        {children}
      </div>
    </main>
  );
}
