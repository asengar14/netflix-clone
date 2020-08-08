import axios from "axios";

const axiosBaseRequest = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  responseType: "json",
});

export default axiosBaseRequest;
