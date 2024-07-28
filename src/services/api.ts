import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "de9cfe21f2ba44bfa193ed9551745c1f",
  },
});
