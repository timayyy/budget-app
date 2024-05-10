import {
  BudgetIcon,
  ChatIcon,
  HomeIcon,
  ProfileIcon,
  ReportIcon,
} from "../components/icons";

export type NavItem = {
  to: string;
  isActive: boolean;
  label: string;
  icon: JSX.Element;
};

export const NavLinksData: NavItem[] = [
  {
    to: "!#",
    isActive: false,
    label: "Home",
    icon: <HomeIcon width="2rem" height="2rem" />,
  },
  {
    to: "!#",
    isActive: false,
    label: "Reports",
    icon: <ReportIcon width="2rem" height="2rem" />,
  },
  {
    to: "!#",
    isActive: false,
    label: "Chat",
    icon: <ChatIcon width="2rem" height="2rem" />,
  },
  {
    to: "!#",
    isActive: true,
    label: "Budget",
    icon: <BudgetIcon width="2rem" height="2rem" />,
  },
  {
    to: "!#",
    isActive: false,
    label: "Profile",
    icon: <ProfileIcon width="2rem" height="2rem" />,
  },
];
