import axios from "axios";

const KEY = "AIzaSyD8Tz0s9lEl0YT9Tl_SeeaOHAVbhXvrSRw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
  },
});
