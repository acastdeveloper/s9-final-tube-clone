import axios from "axios";

const KEY = "AIzaSyCKQ3LgfQeIaJNzSGSqGtyLHcrwEI-r-kc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
  },
});
