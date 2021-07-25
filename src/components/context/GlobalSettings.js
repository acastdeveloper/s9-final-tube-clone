import React, { useState } from "react";

export const GlobalContext = React.createContext();

const GlobalSettings = (props) => {
  const [term, setTerm] = useState("");
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [mode, setMode] = useState("default"); // default, list, play

  return (
    <GlobalContext.Provider
      value={{
        term,
        setTerm,
        videos,
        setVideos,
        selectedVideo,
        setSelectedVideo,
        mode,
        setMode,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalSettings;
