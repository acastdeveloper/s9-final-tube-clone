import React, { Fragment, useContext, useEffect } from "react";

import { SearchBar, VideoDetail, VideoList } from "./";

import youtube from "../api/youtube";

import { GlobalContext } from "./context/GlobalSettings";

const App = () => {
  const { term, videos, setVideos, selectedVideo } = useContext(GlobalContext);

  const handleSubmit = async (searchTerm) => {
    const response = await youtube
      .get("search", {
        params: {
          q: searchTerm,
          part: "snippet",
          maxResults: 5,
          ...youtube.params,
        },
      })
      .then((response) => {
        const vMM = response.data.items.map((e, i) => {
          return [
            i,
            e.snippet.title,
            e.snippet.description,
            e.id.videoId,
            e.snippet.thumbnails.default.url,
            e.snippet.thumbnails.medium.url,
            e.snippet.thumbnails.high.url,
            e.snippet.channelId,
            e.snippet.channelTitle,
            e.snippet.publishedAt,
          ];
        });

        setVideos(vMM);
      });
  };

  return (
    <Fragment>
      <div className="container-fluid p-0">
        <div className="row p-0">
          <div className="col-12  px-0 py-2  bg-dark">
            <SearchBar
              passSearch={() => {
                handleSubmit(term);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-9 bg-secondary">
            <div>
              <strong>Selected: </strong> {selectedVideo}
              <VideoDetail />
            </div>
          </div>
          <div className="col-3 bg-danger">
            <VideoList />
          </div>
        </div>
      </div>
      <div>
        <strong> q: </strong> {term}
      </div>
      <div>
        <strong> Videos: </strong> {videos}
      </div>
      <div>
        <strong>Search:</strong> {term}
      </div>
    </Fragment>
  );
};

export default App;
