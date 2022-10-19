import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
const Video = (props) => {
  return (
    <>
      <div className="rounded-lg p-2 z-1 overflow-hidden ">
        <div className={`z-1 rounded-lg overflow-hidden ${props.width}`}>
          <LiteYouTubeEmbed
            className="rounded-xl m-2 z-1"
            aspectHeight={9}
            aspectWidth={16}
            id={props.id}
            title={props.title}
            poster="hqdefault"  
          />
        </div>
      </div>
    </>
  );
};

export default Video;
