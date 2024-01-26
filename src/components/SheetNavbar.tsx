import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import SideNavbar from "./SideNavbar";
import { Menu } from "lucide-react";
export default function SheetNavbar() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu strokeWidth={"1px"} absoluteStrokeWidth />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="min-w-fit w-1/5 px-4 overflow-y-auto focus-within:ring-0 focus-within:outline-none"
      >
        <SideNavbar />
      </SheetContent>
    </Sheet>
  );
}
