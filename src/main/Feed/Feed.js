import React, { useEffect, useState } from "react";
import StoryReel from "../StoryReel/StoryReel";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";
import axios from "../../axios";
import Pusher from "pusher-js";

const pusher = new Pusher("169efe3ca2722eee0502", {
  cluster: "eu",
});

function Feed() {
  const [profilePic, setProfilePic] = useState("");
  const [postsData, setPostsData] = useState([]);

  const syncFeed = () => {
    axios.get("/retrieve/posts").then((res) => {
      console.log(res.data);
      setPostsData(res.data);
    });
  };

  useEffect(() => {
    const channel = pusher.subscribe("posts");
    channel.bind("inserted", function (data) {
      syncFeed();
    });
  }, []);

  useEffect(() => {
    syncFeed();
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {postsData.map((entry) => (
        <Post
          profilePic={entry.avatar}
          message={entry.text}
          timestamp={entry.timestamp}
          imgName={entry.imgName}
          username={entry.user}
        />
      ))}
      <div style={{ fontSize: "10px" }}>
        <a href="https://wupperfeld.org/impressum">Impressum</a>
        <a href="https://wupperfeld.org/datenschutz">Datenschutz</a>
      </div>
    </div>
  );
}

export default Feed;
