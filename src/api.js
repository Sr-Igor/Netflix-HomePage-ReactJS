const API_KEY = "e50c47262530bec5989fcc4936bc543a"
const BASE_URL = "https://api.themoviedb.org/3"


const basicFetch = async (endpoint) => {
    let response = await fetch(`${BASE_URL}${endpoint}`);
    let json = await response.json();
    return json;
}


 export const Api = {
    getAllMovies: async () => {
        return [
            {
                slug: "original",
                title: "Originais Netflix",
                item: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "trending",
                title: "Recomendados para você",
                item: await basicFetch(`/trending/all/week?&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "toprated",
                title: "Em alta",
                item: await basicFetch(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "action",
                title: "Ação",
                item: await basicFetch(`/discover/movie?with_genres=288&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "comedy",
                title: "Comédia",
                item: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "horror",
                title: "Terror",
                item: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "romance",
                title: "Romance",
                item: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "documentary",
                title: "Documentário",
                item: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    },

    getMovieInfo: async (movieId, type) => {
        let info = {}
            switch(type) {
                case 'tv': 
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                    break;
                case 'movie': 
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                    break;
                default:
                    info = null
                    break;
            }
        return info
    }
}



