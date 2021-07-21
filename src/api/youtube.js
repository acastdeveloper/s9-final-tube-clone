import axios from "axios";

const KEY = "XXXXXX";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
  },
});
