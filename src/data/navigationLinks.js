import {
  LayoutDashboard,
  History,
  Calendar,
  CalendarCheck,
  BarChart2,
  MessageSquare,
  LifeBuoy,
  Settings
} from "lucide-react";

export const navigationLinks = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "History", icon: History },
  { name: "Calendar", icon: Calendar },
  { name: "Appointments", icon: CalendarCheck },
  { name: "Statistics", icon: BarChart2 }
];

export const toolsLinks = [
  { name: "Chat", icon: MessageSquare },
  { name: "Support", icon: LifeBuoy }
];

export const settingsLink = { name: "Settings", icon: Settings };
