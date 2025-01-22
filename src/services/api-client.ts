import axios from 'axios';

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "e13ad6625c7a463b85ec4953db8f97f6"
    }
})