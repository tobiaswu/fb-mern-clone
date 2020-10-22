import React from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarRow.css";

function SidebarRow({ src, Icon, title }: { src: any; Icon: any; title: any }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}

      <p>{title}</p>
    </div>
  );
}

export default SidebarRow;
