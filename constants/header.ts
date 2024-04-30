import CalendarIcon from "@/components/shared/Icons/CalendarIcon";
import CreateIcon from "@/components/shared/Icons/CreateIcon";
import GroupsIcon from "@/components/shared/Icons/GroupsIcon";
import HeadphonesIcon from "@/components/shared/Icons/HeadphonesIcon";
import HomeIcon from "@/components/shared/Icons/HomeIcon";
import NotificationIcon from "@/components/shared/Icons/NotificationIcon";
import SearchIcon from "@/components/shared/Icons/SearchIcon";
export const NavIcons: NavIcon[] = [
  {
    id: "home",
    href: "/",
    icon: HomeIcon,
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
