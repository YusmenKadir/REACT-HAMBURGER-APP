import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-app-654e0-default-rtdb.firebaseio.com/",
});

export default instance;
