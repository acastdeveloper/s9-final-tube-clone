import React, { Fragment, useContext } from "react";

import { SearchBar, VideoDetail, VideoList } from "./";

import youtube from "../api/youtube";

import { GlobalContext } from "./context/GlobalSettings";

const App = () => {
  const { term, videos, setVideos, selectedVideo, mode, setMode } =
    useContext(GlobalContext);

  const desHtml = (str) => {
    return str
      .replace("&ntilde;", "ñ")
      .replace("&Ntilde;", "Ñ")
      .replace("&amp;", "&")
      .replace("&Ntilde;", "Ñ")
      .replace("&ntilde;", "ñ")
      .replace("&Ntilde;", "Ñ")
      .replace("&Agrave;", "À")
      .replace("&Aacute;", "Á")
      .replace("&Acirc;", "Â")
      .replace("&Atilde;", "Ã")
      .replace("&Auml;", "Ä")
      .replace("&Aring;", "Å")
      .replace("&AElig;", "Æ")
      .replace("&Ccedil;", "Ç")
      .replace("&Egrave;", "È")
      .replace("&Eacute;", "É")
      .replace("&Ecirc;", "Ê")
      .replace("&Euml;", "Ë")
      .replace("&Igrave;", "Ì")
      .replace("&Iacute;", "Í")
      .replace("&Icirc;", "Î")
      .replace("&Iuml;", "Ï")
      .replace("&ETH;", "Ð")
      .replace("&Ntilde;", "Ñ")
      .replace("&Ograve;", "Ò")
      .replace("&Oacute;", "Ó")
      .replace("&Ocirc;", "Ô")
      .replace("&Otilde;", "Õ")
      .replace("&Ouml;", "Ö")
      .replace("&Oslash;", "Ø")
      .replace("&Ugrave;", "Ù")
      .replace("&Uacute;", "Ú")
      .replace("&Ucirc;", "Û")
      .replace("&Uuml;", "Ü")
      .replace("&Yacute;", "Ý")
      .replace("&THORN;", "Þ")
      .replace("&szlig;", "ß")
      .replace("&agrave;", "à")
      .replace("&aacute;", "á")
      .replace("&acirc;", "â")
      .replace("&atilde;", "ã")
      .replace("&auml;", "ä")
      .replace("&aring;", "å")
      .replace("&aelig;", "æ")
      .replace("&ccedil;", "ç")
      .replace("&egrave;", "è")
      .replace("&eacute;", "é")
      .replace("&ecirc;", "ê")
      .replace("&euml;", "ë")
      .replace("&igrave;", "ì")
      .replace("&iacute;", "í")
      .replace("&icirc;", "î")
      .replace("&iuml;", "ï")
      .replace("&eth;", "ð")
      .replace("&ntilde;", "ñ")
      .replace("&ograve;", "ò")
      .replace("&oacute;", "ó")
      .replace("&ocirc;", "ô")
      .replace("&otilde;", "õ")
      .replace("&ouml;", "ö")
      .replace("&oslash;", "ø")
      .replace("&ugrave;", "ù")
      .replace("&uacute;", "ú")
      .replace("&ucirc;", "û")
      .replace("&uuml;", "ü")
      .replace("&yacute;", "ý")
      .replace("&thorn;", "þ")
      .replace("&yuml;", "ÿ");
  };

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
            desHtml(e.snippet.title),
            desHtml(e.snippet.description),
            e.id.videoId,
            e.snippet.thumbnails.default.url,
            e.snippet.thumbnails.medium.url,
            e.snippet.thumbnails.high.url,
            e.snippet.channelId,
            e.snippet.channelTitle,
            e.snippet.publishedAt,
            e.snippet.tags,
          ];
        });

        setVideos(vMM);
        setMode("list");
      });
  };

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-12 p-2 bg-dark">
            <SearchBar
              passSearch={() => {
                handleSubmit(term);
              }}
            />
          </div>
        </div>

        <div className="row p-5 d-flex justify-content-around">
          {mode === "play" && (
            <div className="col-9">
              <VideoDetail />
            </div>
          )}

          {mode !== "default" && (
            <div
              className={
                mode === "play"
                  ? "col-3"
                  : mode === "list" && "col-6 self-align-center px-0"
              }
            >
              <VideoList />
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default App;
