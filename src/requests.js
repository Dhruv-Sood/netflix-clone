const TOKEN = "ENTER YOUR API KEY HERE";



const requests = {
    fetchTrending: `/trending/all/week?api_key=${TOKEN}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${TOKEN}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${TOKEN}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${TOKEN}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${TOKEN}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${TOKEN}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${TOKEN}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${TOKEN}&with_genres=99`,

}

export default requests;

