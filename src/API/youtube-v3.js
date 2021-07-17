import axios from "axios";
const PRIVATE_API_KEY = "AIzaSyBoB-Boj-ZmzHuSaBqu3hgAUa9tF5Y_Qsg";

export default axios.create({
  baseURL: "https://googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: PRIVATE_API_KEY,
  },
});
