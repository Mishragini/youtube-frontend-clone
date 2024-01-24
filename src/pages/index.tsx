import Image from "next/image";
import { Inter } from "next/font/google";
import VedioCard from "@/components/VedioCard";
import VedioGrid from "@/components/VedioGrid";
import Appbar from "@/components/Appbar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div>
    <Appbar />
    <VedioGrid />
   
   </div>
  );
}
