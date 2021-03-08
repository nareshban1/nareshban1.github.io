import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './components.css';
function Home(){

    useEffect(()=> {
    fetchMovies();
    },[]);

    const [trends, setTrends] = useState([]);

    const fetchMovies = async () => {
        const trending = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=c95a6dccccd66a359cf6e9a0a7d8c665');
        const trends = await trending.json();
        console.log(trends);
        setTrends(trends.results);
    }

    return (
        <div>
            <h1> Trending Movies</h1>
            <div className="trending">
                {trends.map( trend =>(
                    <Link to={`/details/${trend.id}`}>
                        <div className="movieCard">
                            <img className="movieimg"src={"https://image.tmdb.org/t/p/w500/"+ trend.poster_path} alt={trend.title}/>
                            <p key={trend.id}>
                                {trend.title}
                            </p>

                        </div>
                    </Link>

                ))}
            </div>
        </div>
    )
}

export default Home