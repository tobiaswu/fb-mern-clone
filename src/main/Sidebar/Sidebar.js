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

function Sidebar() {
  return (
    <div>
      <SidebarRow
        src="https://avatars1.githubusercontent.com/u/66420306?s=460&u=e2dd24f9a8214eec47b6d23d5cc1018c18f29c8f&v=4"
        title="Tobias"
      />

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
