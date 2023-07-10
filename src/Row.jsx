import { useEffect, useState } from "react"
import axios from './axios'
import './Row.css'
const base_URL = "https://image.tmdb.org/t/p/original"
const Row = ({title , fetchUrl , isLarge}) => {

  const [movies , setMovies] = useState([])

  useEffect(()=>{

    async function fetchData(){
      const request = await axios.get(fetchUrl)
      // console.log(request.data.results)
      setMovies(request.data.results)
      // console.log(request.data.results[1].original_name)
      return request
    }
    fetchData()
  } , [fetchUrl])
  
  console.log(movies);
  return (
    <div className="row">
      <h1 className="title">{title}</h1>
      <div className="row_posters">
        {movies.map(movie => {
          return <img key={movie.id} className={`row_poster${isLarge? "Large" : ""}`} src={isLarge? base_URL+movie.poster_path : base_URL+movie.backdrop_path}/>
        })}
      </div>
    </div>
  )
}
export default Row