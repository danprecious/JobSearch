import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../utils/theme-provider";
import TopNavigation from "@/components/Navigation/TopNavigation";
import SideNavigation from "@/components/Navigation/SideNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FindJobs",
  description: "Find your dream Job",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaulTheme="system" enableSystem>
        <body className={inter.className}>
          <main className="fle bg-lightBg dark:bg-darkBg">
            <div className="">
              <TopNavigation />

              {children}

            </div>
          </main>
        </body>
      </ThemeProvider>
    </html>
  );
}
