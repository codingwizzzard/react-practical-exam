import axios from "axios";

const apiInstance = axios.create({
    baseURL: "http://localhost:3000/students"
})
export default apiInstance