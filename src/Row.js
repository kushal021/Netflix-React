import moment from "moment";
import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import "./Row.css";

const img_base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      // const newDate = moment(movie?.first_air_date).format("YYYY");
      // console.log("YEAAARR", newDate);
      console.log(
        "TTTTTT",
        movie?.name,
        "mmmmmmm",
        movie?.title,
        "name",
        movie
      );
      if (movie?.name) {
        movieTrailer(movie?.name || "")
          .then((url) => {
            console.log("URLL PARAMS", url);
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          })
          .catch((err) => {
            console.log("EERRRR", err);
          });
      } else {
        movieTrailer(movie?.title || "")
          .then((url) => {
            console.log("URLL PARAMS", url);
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          })
          .catch((err) => {
            console.log("EERRRR", err);
          });
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    };
    fetchData();
  }, [fetchUrl]);
  console.log("Response", movies);
  // console.table(movies);
  return (
    <div className="row">
      <h2>
        <div></div>
        {title}
      </h2>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <>
            <img
              key={index}
              onClick={() => {
                setTrailerUrl("");
                handleTrailer(movie);
              }}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${img_base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          </>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
