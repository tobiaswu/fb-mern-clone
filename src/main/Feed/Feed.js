import React from "react";
import StoryReel from "../StoryReel/StoryReel";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://avatars1.githubusercontent.com/u/66420306?s=460&u=e2dd24f9a8214eec47b6d23d5cc1018c18f29c8f&v=4"
        message="this is a message"
        timestamp="time"
        imgName="imgName"
        username="Tobias"
      />

      {/* {postsData.map((entry) => (
        <Post
          profilePic={entry.avatar}
          message={entry.text}
          timestamp={entry.timestamp}
          imgName={entry.imgName}
          username={entry.user}
        />
      ))} */}
    </div>
  );
}

export default Feed;
