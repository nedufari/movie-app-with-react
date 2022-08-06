import React  from "react";

const MovieCard =({movie}) => {
    return ( 
        
    <div classname="container">
        <div className="movie">
            <div> 
                <p>{movie.year}</p>
            </div>
            <div>
                <img src={ movie.poster  !== "N/A" ? movie.poster : "https://via.placehodlder.com/400"} alt={movie.title}/>
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
        </div>
    );
}

export default MovieCard;