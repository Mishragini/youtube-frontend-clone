import { Inter } from "next/font/google";

import VedioGrid from "@/components/VideoGrid";
import Appbar from "@/components/Appbar";
import FullSideNavbar from "@/components/SheetNavbar";

import { ThemeProvider } from "@/components/theme-provider";
import SideNavbar from "@/components/SideNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Appbar />
      <VedioGrid />
    </ThemeProvider>
  );
}
