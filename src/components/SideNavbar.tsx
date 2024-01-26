import {
  ArrowRight,
  Clapperboard,
  Clock,
  FileVideo,
  Film,
  History,
  Home,
  ListVideo,
  LucideIcon,
  MoveIcon,
  Music,
  Notebook,
  ShoppingBag,
  ThumbsUp,
  TrendingUp,
  User,
} from "lucide-react";
import { Separator } from "./ui/separator";
function SideNavbar() {
  return (
    <div className="min-w-fit">
      <ul>
        <SidebarList title="Home" Icon={Home} />
        <SidebarList title="Shorts" Icon={Film} />
        <SidebarList title="Subscription" Icon={ListVideo} />
      </ul>
      <Separator />
      <div className="hover:bg-muted rounded-md flex px-4 gap-2 py-2 items-center">
        <span className="text-lg font-medium">You</span>
        <ArrowRight strokeWidth={"1px"} />
      </div>
      <ul>
        <SidebarList title="Your Channel" Icon={User} />
        <SidebarList title="History" Icon={History} />
        <SidebarList title="Your Videos" Icon={FileVideo} />
        <SidebarList title="Your Course" Icon={Notebook} />
        <SidebarList title="Watch Later" Icon={Clock} />
        <SidebarList title="Liked Videos" Icon={ThumbsUp} />
      </ul>
      <Separator />
      <ul>
        <SidebarList title="Trending" Icon={TrendingUp} />
        <SidebarList title="Shopping" Icon={ShoppingBag} />
        <SidebarList title="Movies" Icon={Clapperboard} />
        <SidebarList title="Music" Icon={Music} />
      </ul>
    </div>
  );
}
export function SidebarList({
  Icon,
  title,
}: {
  Icon: LucideIcon;
  title: string;
}) {
  return (
    <li className="hover:bg-muted rounded-md flex px-4 gap-4 py-2 items-center">
      <Icon strokeWidth={"1px"} />
      <span className="text-lg font-semibold">{title}</span>
    </li>
  );
}

export default SideNavbar;
