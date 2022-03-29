import {React, useEffect, useState} from "react";
import Category from "../components/Category";
import Header from "../components/Header";
import LoadMovies from "../components/LoadMovies";
import Search from "../components/Search";

const MOVIE_API_URL = `https://www.omdbapi.com/?s=day&apikey=${process.env.REACT_APP_AK}`;
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        // console.log(jsonResponse);
        // console.log(jsonResponse.Search);
        setMovies(jsonResponse.Search);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  }, []);

  // sole.log(movies);

  // console.log(Header("us").props);
  return (
    <div>
      <LoadMovies
        movies={movies}
        loading={loading}
        errorMessage={errorMessage}
      />
    </div>
  );
}

export default Home;
