import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import LoadMovies from "../components/LoadMovies";
import Search from "../components/Search";

function Searched() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  let params = useParams();
  useEffect(() => {
    search(params.search);
  }, [params.search]);

  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);

    fetch(
      `https://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_AK}`
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };

  return (
    <div>
      {/* <Search search={search} /> */}

      <LoadMovies
        movies={movies}
        loading={loading}
        errorMessage={errorMessage}
      />
    </div>
  );
}

export default Searched;
