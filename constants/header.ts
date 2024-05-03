import CalendarIcon from "@/components/shared/Iconss/CalendarIcon";
import CreateIcon from "@/components/shared/Iconss/CreateIcon";
import GroupsIcon from "@/components/shared/Iconss/GroupsIcon";
import HeadphonesIcon from "@/components/shared/Iconss/HeadphonesIcon";
import HomeIcon from "@/components/shared/Iconss/HomeIcon";
import NotificationIcon from "@/components/shared/Iconss/NotificationIcon";
import SearchIcon from "@/components/shared/Iconss/SearchIcon";
export const NavIcons: NavIcon[] = [
  {
    id: "home",
    href: "/",
    icon: HomeIcon,
    exact: true,
  },
  {
    id: "meetups",
    href: "/meetups",
    icon: CalendarIcon,
  },
  {
    id: "podcasts",
    href: "/podcasts",
    icon: HeadphonesIcon,
  },
  {
    id: "groups",
    href: "/groups",
    icon: GroupsIcon,
  },
  {
    id: "create",
    href: "/create",
    icon: CreateIcon,
  },
];
export const NavModalIcons: ModalIcon[] = [
  {
    id: "search",
    icon: SearchIcon,
  },
  {
    id: "notifications",
    icon: NotificationIcon,
  },
];
