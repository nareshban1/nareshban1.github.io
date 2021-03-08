import React, {useState, useEffect} from 'react';

function MovieDetail({match}){
    useEffect(()=> {
        fetchMovie();
        console.log(match);
    },[]);

    const [movies, setMovie] = useState([]);

    const fetchMovie = async () => {
        const moviedata = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=c95a6dccccd66a359cf6e9a0a7d8c665&language=en-US`);
        const movie = await moviedata.json();
        setMovie(movie);
    }

    return (
        <div className="details">
            <div className="movieD" style={{ background:`url(https://image.tmdb.org/t/p/w500/${movies.backdrop_path})`, backgroundSize:`cover`, }} key={movies.id}>
                <div className="movieDetail">
                    <div className="image">
                        <img className="moviedimg"src={"https://image.tmdb.org/t/p/w500/"+ movies.poster_path} alt={movies.title}/>
                    </div>
                    <div className="detailTitle">
                        <h2>{movies.title}</h2>
                        <h5>{movies.overview}</h5>
                    </div>
                </div>       
            </div>
        </div>
    )
}

export default MovieDetail