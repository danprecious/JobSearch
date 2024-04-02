import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../utils/theme-provider";
import TopNavigation from "@/components/Navigation/TopNavigation";
import SideNavigation from "@/components/Navigation/SideNavigation";
import StateContextProvider from "./stateManager/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FindJobs",
  description: "Find your dream Job",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StateContextProvider>
        <ThemeProvider attribute="class" defaulTheme="system" enableSystem>
          <body className={inter.className}>
            <main className=" ">
              <div className="conten relative">
                <TopNavigation />

                {children}
              </div>
            </main>
          </body>
        </ThemeProvider>
      </StateContextProvider>
    </html>
  );
}
