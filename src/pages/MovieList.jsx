import React, { useEffect, useState } from 'react';
import axios from 'axios';  

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const token = localStorage.getItem('token'); 

        const response = await axios.get('http://localhost:8000/api/movies/', {
          headers: {
            'Authorization': `Bearer ${token}`, 
          },
        });

        setMovies(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching movies:', err);
        setError('Error fetching movies');
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Movies</h2>
      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie._id}>{movie.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;
