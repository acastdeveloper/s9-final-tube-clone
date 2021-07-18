import React, { Fragment, useContext, useEffect } from "react";

import { SearchBar, VideoDetail, VideoList } from "./";

import youtube from "../api/youtube";

import { GlobalContext } from "./context/GlobalSettings";

const App = () => {
  const { term, videos, setVideos } = useContext(GlobalContext);

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
        setVideos(
          response.data.items.map((e, i) => {
            return [
              " / / / / /  -> INDEX: (" + i + ") ",
              " / TITLE: " + e.snippet.title,
              " / DESCRIPTION: " + e.snippet.description,
              " / ID: " + e.id.videoId,
              " / THUMBNAIL_DEFAULT: " + e.snippet.thumbnails.default.url,
              " / THUMBNAIL_MEDIUM: " + e.snippet.thumbnails.medium.url,
              " / THUMBNAIL_HIGH: " + e.snippet.thumbnails.high.url,
              " / CHANNEL_ID: " + e.snippet.channelId,
              " / CHANNEL_TITLE: " + e.snippet.channelTitle,
              " / PUBLISHED AT: " + e.snippet.publishedAt,
            ];
          })
        );
      });
  };

  const handleVideoSelect = async (sel) => {};

  useEffect(() => {
    handleSubmit(term);
  }, []);

  return (
    <Fragment>
      <div>
        <strong> q </strong>: {term}
      </div>
      <div>
        <strong> videos </strong>: {videos}
      </div>{" "}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 bg-warning">
            <SearchBar />
          </div>{" "}
        </div>{" "}
        <div className="row">
          <div className="col-9 bg-secondary">
            <VideoDetail />
          </div>{" "}
          <div className="col-3 bg-danger">
            <VideoList />
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </Fragment>
  );
};

export default App;
