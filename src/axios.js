import axios from "axios";

const instance = axios.create({
  baseURL: "https://fb-mern-demo-live.herokuapp.com",
});

export default instance;
