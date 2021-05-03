import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID nXM5RZSzRKW3KKv2tn6oZ1-Wz9zdoXg29MGz9JPY8ys"
    }
})