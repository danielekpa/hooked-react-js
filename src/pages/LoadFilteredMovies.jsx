import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import LoadMovies from "../components/LoadMovies";

function LoadFilteredMovies() {
  // const [catValue, setCatValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  let params = useParams();

  useEffect(() => {
    filterByCategory(params.category);
  }, [params.category]);

  const filterByCategory = async function (category) {
    const data = await fetch(
      `https://www.omdbapi.com/?s=time&type=${category}&apikey=${process.env.REACT_APP_AK}`
    );
    const response = await data.json();

    if (response.Response === "True") {
      // console.log(response);
      // console.log(response.Search);
      setMovies(response.Search);
      setLoading(false);
    } else {
      setErrorMessage(response.Error);
      setLoading(false);
    }
  };
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

export default LoadFilteredMovies;
