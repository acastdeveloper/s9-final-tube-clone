import React, { useState } from "react";

export const GlobalContext = React.createContext();

const GlobalSettings = (props) => {
  const [term, setTerm] = useState("bach");
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        term,
        setTerm,
        videos,
        setVideos,
        selectedVideo,
        setSelectedVideo,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalSettings;
