import React, { useEffect, useState } from 'react';
import axios from "../../utils/axios";
import requests from '../../utils/requests';
import RowProps from '../../props/rowprops';
function HorrorMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const request = await axios.get(requests.fetchHorrorMovies);
                setMovies(request.data.results);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchMovies();
    }, []);
  return (
    <div>
    <h1 className='hone'>HorrorMovies</h1>
    <div className="flex-container">
        {movies.map((movie, index) => (
            <RowProps
                key={index}
                bgpath={movie.backdrop_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : ''}
            />
        ))}
        </div>
    </div>
  )
}

export default HorrorMovies