import React, { Fragment, useContext, useEffect } from "react";
import { GlobalContext } from "./context/GlobalSettings";

import VideoItem from "./VideoItem";

const VideoList = () => {
  const { videos, setMode } = useContext(GlobalContext);

  return (
    <Fragment>
      <div className="p-4 pe-5">
        {videos.map((e, i) => {
          return (
            <VideoItem
              key={i}
              n={e[0]}
              title={e[1].replace(/&quot;/g, '"')}
              description={e[2].replace(/&quot;/g, '"')}
              videoId={e[3]}
              th={e[4]}
              thM={e[5]}
              thH={e[6]}
              chId={e[7]}
              chTitle={e[8]}
              publishedAt={e[9]}
              className="p-4 pe-5"
            ></VideoItem>
          );
        })}
      </div>
    </Fragment>
  );
};

export default VideoList;
