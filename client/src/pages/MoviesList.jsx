import React, { useState, useEffect } from "react";
import api from "../api";

import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovieList();
  });

  const getMovieList = async () => {
    await api.getAllMovies().then(movies => {
      setMovies(movies.data.data);
      setIsLoading(false);
    });
  };

  console.log("TCL: MoviesList -> render -> movies", movies);

  return <Wrapper>{!isLoading && <p>!{movies[0]["name"]}</p>}</Wrapper>;
}

export default MoviesList;
