import React, { Fragment, useContext } from "react";

import { GlobalContext } from "./context/GlobalSettings";

const VideoItem = (props) => {
  const { setSelectedVideo, setMode } = useContext(GlobalContext);

  const {
    n,
    title,
    description,
    videoId,
    th,
    thM,
    thH,
    chId,
    chTitle,
    publishedAt,
  } = props;

  return (
    <Fragment>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-6">
            <img
              src={thH}
              alt={description}
              width="100%"
              className="cursor"
              onClick={() => {
                setSelectedVideo(n);
                setMode("play");
              }}
            />
          </div>
          <div className="col-6">
            <h6
              className="fw-bold small cursor"
              onClick={() => {
                setSelectedVideo(n);
              }}
            >
              {title}
            </h6>
            <small className="small">{chTitle}</small> <br />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VideoItem;
