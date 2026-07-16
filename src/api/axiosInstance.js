import axios from "axios";

let axiosInstance = axios.create({
    baseURL:  "http://localhost:4000/api/auth",
    headers : {
        "Content-Type" : 'application/json',
    }
})

export default axiosInstance