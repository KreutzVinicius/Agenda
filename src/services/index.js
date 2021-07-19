import axios from "axios";

axios.create({
    baseURL: '',
    headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    }
})

export default axios;