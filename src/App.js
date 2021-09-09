import { useEffect, useState } from "react";

import Movie from "./components/Movie";

const TRENDING_API = `https://imdb-api.com/en/API/MostPopularMovies/${process.env.REACT_APP_API_KEY}`
const SEARCH_API = `https://imdb-api.com/en/API/SearchMovie/${process.env.REACT_APP_API_KEY}/`


function App() {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [title, setTitle] = useState('Trending movies')

  useEffect(()=> {
      getTrendingMovies(TRENDING_API);

  }, [])

  const getTrendingMovies = (API) => {
    fetch(API).then(res => res.json()).then(data => {
      console.log(data)
      setMovies(data.items)
    })
  }

  const getSearchedMovies = (API) => {
    fetch(API).then(res => res.json()).then(data => {
      console.log(data)
      setMovies(data.results)
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
      getSearchedMovies(SEARCH_API+searchTerm);
      setTitle(searchTerm);
    }
    else{
      getTrendingMovies(TRENDING_API);
      setTitle("Trending movies");
    }
    setSearchTerm('');
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <header>
        <h1>
          {title}
        </h1>
        <form onSubmit={handleOnSubmit}>
          <input className="search" type="search" placeholder="Search" value = {searchTerm} onChange = {handleOnChange}/>
        </form>
      </header>
      <div className = "movieContainer"> 
       {movies.length > 0 && movies.map(movie =>
         <Movie key={movie.id} {...movie} />
         )}
     </div>
    </>
  );
}

export default App;
