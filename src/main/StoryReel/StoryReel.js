import React from "react";
import Story from "../Story/Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="../images/hiking.jpg"
        profileSrc="https://avatars1.githubusercontent.com/u/66420306?s=460&u=e2dd24f9a8214eec47b6d23d5cc1018c18f29c8f&v=4"
        title="Tobias Wupperfeld"
      />
      <Story
        image="../images/indian.jpg"
        profileSrc="../images/ai-face1.jpg"
        title="Ashkar Mubasa"
      />
      <Story
        image="../images/cake.jpg"
        profileSrc="../images/ai-face4.jpg"
        title="Pete Stanson"
      />
      <Story
        image="../images/flowers.jpg"
        profileSrc="../images/ai-face7.jpg"
        title="Lena Meier"
      />
    </div>
  );
}

export default StoryReel;
