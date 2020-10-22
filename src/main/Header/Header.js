import { IconButton, Avatar } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FlagIcon from "@material-ui/icons/Flag";
import HomeIcon from "@material-ui/icons/Home";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./Header.css";
import { selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector(selectUser);

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
          alt="Facebook logo"
        />
      </div>

      <div className="header__input">
        <SearchIcon />
        <input placeholder="Search Facebook" type="text" />
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontsize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontsize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontsize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontsize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>

        <IconButton>
          <ForumIcon />
        </IconButton>

        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>

        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
