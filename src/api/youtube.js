import axios from "axios";
// const KEY = "AIzaSyBoB-Boj-ZmzHuSaBqu3hgAUa9tF5Y_Qsg";
const KEY = "AIzaSyDWsv9sqE3OvslhPki5Ur2Y7o6Ux19a3fM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
  },
});
