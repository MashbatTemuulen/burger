import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-de15b-default-rtdb.firebaseio.com/",
});

export default instance;
