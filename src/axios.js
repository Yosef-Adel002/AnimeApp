import axios from "axios";

const instace =axios.create({
    baseURL:"https://kitsu.io/api/edge",
});
export default instace