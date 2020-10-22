import React from "react";
import "./Sidebar.css";
import SidebarRow from "../SidebarRow/SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
import { selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";

function Sidebar() {
  const user = useSelector(selectUser);
  return (
    <div>
      <SidebarRow src={user.photoURL} Icon="" title={user.displayName} />

      <SidebarRow
        src=""
        Icon={LocalHospitalIcon}
        title="COVIDIOT Informationszentrum"
      />
      <SidebarRow src="" Icon={EmojiFlagsIcon} title="Seiten" />
      <SidebarRow src="" Icon={PeopleIcon} title="Freunde" />
      <SidebarRow src="" Icon={ChatIcon} title="Messenger" />
      <SidebarRow src="" Icon={StorefrontIcon} title="Marketplace" />

      <SidebarRow src="" Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow src="" Icon={ExpandMoreOutlined} title="Mehr anzeigen" />
    </div>
  );
}

export default Sidebar;
