import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3600",
    headers: {
        "Content-type": "application/json"
    }
});