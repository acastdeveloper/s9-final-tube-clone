import React, { Fragment, useContext } from "react";

import { GlobalContext } from "./context/GlobalSettings";

const VideoItem = (props) => {
  const { setSelectedVideo, setMode, mode } = useContext(GlobalContext);

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
      <div className="container-fluid mb-4">
        <div className="row">
          <div
            className={mode === "list" ? "col-4" : mode === "play" && "col-6"}
          >
            <img
              src={thH}
              alt={description}
              width="100%"
              className="cursor rounded-3"
              onClick={() => {
                setSelectedVideo(n);
                setMode("play");
              }}
            />
          </div>
          <div
            className={
              mode === "list" ? "col-8 fs-5" : mode === "play" && "col-6 fs-6"
            }
          >
            <div
              className="fw-bold cursor"
              onClick={() => {
                setSelectedVideo(n);
                setMode("play");
              }}
            >
              {title}
            </div>
            {mode === "list" && <p>{description}</p>}
            <small className="small">
              <strong>Canal</strong>: {chTitle}
            </small>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VideoItem;
