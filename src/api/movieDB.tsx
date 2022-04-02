import axios from "axios";

const movieDB = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params: {
        api_key: "c112658dd872fb8170534f44af1e5755",
        language: "es-ES"
    }
});

export default movieDB;