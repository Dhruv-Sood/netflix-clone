import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Row from './Row'
import viteLogo from '/vite.svg'
import request from './requests'
import Banner from './Banner'
import Nav from './Nav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals} isLarge />
      <Row title="Trending" fetchUrl={request.fetchTrending} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Comedies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </>
  )
}

export default App
