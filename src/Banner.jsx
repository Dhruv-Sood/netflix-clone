import { useEffect } from "react"
import { useState } from "react"
import axios from './axios'
import requests from "./requests"
import './Banner.css'
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
const Banner = () => {

    const [movie , setMovie] = useState([])
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)])
            
            return request
        }
        fetchData()
    }, [])
    console.log(movie)

    


  return (
    <header className="banner"
    style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        height: "448px",
        backgroundSize: "cover",

    }}
    >
        {/* Background image */}
        {/* Title */}
        {/* Div with 2 btns */}
        {/* Description */}

        <div className="banner_content">
            <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>

            <div className="banner_buttons">
                  <button className="banner_button">Play</button>
                  <button className="banner_button">My List</button>
            </div>

            <h1 className="banner_description">
                {truncate(movie?.overview , 250)}
            </h1>
        </div>

        <div className="fade-bottom">
            
        </div>


    </header>
  )
}
export default Banner