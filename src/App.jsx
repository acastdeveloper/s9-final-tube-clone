import React from "react";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

import ThemeContext from "./context/ContextoGeneral";

const App = () => {
  return (
    <ThemeContext>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 bg-warning">
            <SearchBar />
          </div>
        </div>
        <div className="row">
          <div className="col-9 bg-secondary">
            <VideoDetail />
          </div>
          <div className="col-3 bg-danger">
            <VideoList />
          </div>
        </div>
      </div>
    </ThemeContext>
  );
};

export default App;
