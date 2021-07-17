import React, { Fragment } from "react";
import VideoItem from "./VideoItem";

const VideoList = () => {
  return (
    <Fragment>
      <h3>Videolist</h3>
      <div>
        <VideoItem>Video ITem 1</VideoItem>
      </div>
      <div>
        <VideoItem>Video ITem 2</VideoItem>
      </div>
      <div>
        <VideoItem>Video ITem 3</VideoItem>
      </div>
    </Fragment>
  );
};

export default VideoList;
