import CalendarIcon from "@/components/shared/icons/CalendarIcon";
import CreateIcon from "@/components/shared/icons/CreateIcon";
import GroupsIcon from "@/components/shared/icons/GroupsIcon";
import HeadphonesIcon from "@/components/shared/icons/HeadphonesIcon";
import HomeIcon from "@/components/shared/icons/HomeIcon";
import NotificationIcon from "@/components/shared/icons/NotificationIcon";
import SearchIcon from "@/components/shared/icons/SearchIcon";
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
