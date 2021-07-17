import React, { useState } from "react";
export const ThemeContext = React.createContext();

const ContextoGeneral = (props) => {
  const [urlCurrentVideo, setURLCurrentVideo] = useState("");
  const [titleCurrentVideo, setTitleCurrentVideo] = useState("");
  const [descCurrentVideo, setDescCurrentVideo] = useState("");

  return (
    <ThemeContext.Provider
      value={{
        urlCurrentVideo,
        setURLCurrentVideo,
        titleCurrentVideo,
        setTitleCurrentVideo,
        descCurrentVideo,
        setDescCurrentVideo,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ContextoGeneral;
