import Image from "next/image";
import { Inter } from "next/font/google";
import VedioCard from "@/components/VedioCard";
import VedioGrid from "@/components/VedioGrid";
import Appbar from "@/components/Appbar";
import SideNavbar from "@/components/SideNavbar";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <RecoilRoot>

    <Appbar />
    <VedioGrid />
   </RecoilRoot>
  );
}
