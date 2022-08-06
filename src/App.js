import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from './search.svg'
import MovieCard from "./moviecard";


// b960ec96 my api key

const API_URL= "http://www.omdbapi.com?apikey=b960ec96";


const movie={
    "Title":"Amazing spiderman syndrome",
    "year":"2021",
    "poster":"N/A",
    "Type":"Movie",
    "imdbID": "tt2586634"
    

}


const App=()=>{

    const [movies, setMovies]=useState([]);
    const [searchTerm, setSearchTerm]=useState([]);

    const searchMovie = async(title)=> {
        const response = await fetch("${API_URL}&s=${title}")
        const data= await response.json();

        setMovies(data.Search);

    }

    useEffect(()=>{
        searchMovie("spiderman")

    }, []);


    return (
        <div className="app">
            <h1>CINEPAL</h1>
            <div className="search">
                <input placeholder="search for movie communities"
                value={searchTerm}
                onChange={(e)=>{setSearchTerm(e.target.value)}}/>
                <img src={SearchIcon} alt="search"
                onClick={()=>{searchMovie(searchTerm)}}/>
            </div>

            {
                movies?.length > 0
                ?(
                    <div className="container">
                        {movies.map((movies)=>(
                            <MovieCard movie={movies}/>
                        ))}
                    {/* <MovieCard movie1={movies[0]}/> */}
                </div>

                ):(
                    <div className="empty">
                        <h2> no movies found </h2>
                    </div>
                )

            }

           



            
        </div>

    );
}

export default App;