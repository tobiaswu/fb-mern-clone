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
      <SidebarRow src={user.photoURL} title={user.displayName} />

      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVIDIOT Informationszentrum"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Seiten" />
      <SidebarRow Icon={PeopleIcon} title="Freunde" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />

      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Mehr anzeigen" />
    </div>
  );
}

export default Sidebar;
