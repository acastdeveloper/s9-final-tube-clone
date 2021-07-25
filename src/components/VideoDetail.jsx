import React, { Fragment, useContext } from "react";
import { GlobalContext } from "./context/GlobalSettings";
import YoutubeEmbed from "./YoutubeEmbed";

const VideoDetail = (props) => {
  const { videos, selectedVideo } = useContext(GlobalContext);

  const title = selectedVideo !== null && videos[selectedVideo][1];
  const description = selectedVideo !== null && videos[selectedVideo][2];
  const videoId = selectedVideo !== null && videos[selectedVideo][3];
  const canalId = selectedVideo !== null && videos[selectedVideo][7];
  const canalTitle = selectedVideo !== null && videos[selectedVideo][8];

  const embedUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://localhost`;

  return (
    <Fragment>
      <br />
      {embedUrl}
      <div className="row">
        <div className="col-12 bg-light p-5">
          <YoutubeEmbed embedId={videoId} />
          {/* <iframe
            id="ytplayer"
            type="text/html"
            src={embedUrl}
            className="col-12"
          ></iframe> */}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h1>{title}</h1>
          <small>{canalTitle}</small>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p>{description}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default VideoDetail;
