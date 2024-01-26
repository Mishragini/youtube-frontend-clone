import { Input } from "./ui/input";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { BellIcon, Menu, Search, VideoIcon } from "lucide-react";
import SheetNavbar from "./SheetNavbar";
import { ModeToggle } from "./ThemeToggle";

export default function Appbar() {
  return (
    <nav className="flex justify-between items-center bg-background px-4 py-2 sticky top-0 w-full">
      <div className="flex gap-2 sm:gap-4 items-center">
        <SheetNavbar />
        <img
          src="/youtube.png"
          alt="logo youtube"
          className="hidden sm:block aspect-auto w-8 object-cover"
        />

        <span className="text-xl font-semibold sm:block hidden">YouTube</span>
      </div>
      <div className="basis-2/5 flex items-center focus-within:ring focus-within:ring-ring border bg-background  px-2 rounded-md">
        <Input
          placeholder="Search..."
          className=" border-none focus-visible:ring-0"
        />
        <Search
          strokeWidth={"1px"}
          className="size-8 p-1"
          absoluteStrokeWidth
        />
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <VideoIcon strokeWidth={"1px"} absoluteStrokeWidth />
        <BellIcon strokeWidth={"1px"} absoluteStrokeWidth />
        <ModeToggle />
        <Avatar className="size-8">
          <AvatarImage src="pfp.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
