import axios from 'axios'

const blogFetch = axios.create({
    baseURL: "https://672e45cf229a881691ef9103.mockapi.io/api/v1",
    headers: {
        "Content-Type": "application/json",
    }
});

export default blogFetch