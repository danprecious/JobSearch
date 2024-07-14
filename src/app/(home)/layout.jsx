import TopNavigation from "@/components/Navigation/TopNavigation";
import SideNavigation from "@/components/Navigation/SideNavigation";
// import { FaBookmark } from "react-icons/fa";
import { Toast } from "@/components/modals/BookMarkToast";
import { DeleteBookMark } from "@/components/modals/BookmarkModal";
import PersonalizeModal from "@/components/modals/personalize";



export default function RootLayout({ children }) {
  return (
    <main className=" ">
      <div className="content relative">
        <PersonalizeModal />
        <TopNavigation />

        <DeleteBookMark />
        <Toast />
        {children}
      </div>
    </main>
  );
}
