import { useState } from "react";
import { MdBarChart, MdDashboard, MdSettings } from "react-icons/md";
import { FaReddit } from "react-icons/fa";
import { IoMdFunnel } from "react-icons/io";
import type { SideBarNavItems } from "../types/NavigationTypes.ts";

const navItems: SideBarNavItems[] = [
  {
    id: 0,
    navLabel: "Dashboard",
    icon: MdDashboard,
  },
  {
    id: 1,
    navLabel: "Active Subreddits",
    icon: FaReddit,
  },
  {
    id: 2,
    navLabel: "Painpoint Pipelines",
    icon: IoMdFunnel,
  },
  {
    id: 3,
    navLabel: "Reports & Analysis",
    icon: MdBarChart,
  },
  {
    id: 4,
    navLabel: "Agent Settings",
    icon: MdSettings,
  },
];

export function useSideBar(): { sideBarNavs: SideBarNavItems[] } {
  const [sideBarNavs] = useState(navItems);

  return { sideBarNavs };
}
