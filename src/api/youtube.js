import axios from "axios";

const KEY = "AIzaSyDW6g5KwWGRKTWdDsz64QJr4cgLUQ9DqS8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
  },
});
