import { BiConversation, BiHome } from "react-icons/bi";
import { GoPeople } from "react-icons/go";
import { CgProfile } from "react-icons/cg";

interface SidebarLink {
    imgURL: React.ReactNode;  // Replace with your own icon component
    route: string;
    label: string;
};

export const sidebarLinks: SidebarLink[] = [
    {
      imgURL: <BiHome size={28}/>,
      route: "/",
      label: "Home",
    },
    {
      imgURL: <GoPeople  size={28}/>,
      route: "/community",
      label: "Community",
    },
    {
      imgURL: <BiConversation  size={28}/>,
      route: "/jobs",
      label: "Find Jobs",
    },
    {
      imgURL: <CgProfile size={28} />,
      route: "/profile",
      label: "Profile",
    },
  ];