import React, { useState } from "react";
import { Avatar, Input } from "@material-ui/core";
import { SettingsInputAntenna } from "@material-ui/icons";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function MessageSender() {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    console.log("submitting");
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src="https://avatars1.githubusercontent.com/u/66420306?s=460&u=e2dd24f9a8214eec47b6d23d5cc1018c18f29c8f&v=4" />
        <form>
          <input
            type="text"
            className="messageSender__input"
            placeholder={`Was machst du gerade, $?`}
            value={input}
            onChange={(e) => SettingsInputAntenna(e.target.value)}
          />
          <Input
            type="file"
            className="messageSender__fileSelector"
            onChange={handleChange}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live-Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Foto/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Gefühl/Aktivität</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
