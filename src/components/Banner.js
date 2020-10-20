import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./banner.css";
import requests from "../request"

function Banner() {
  const [movie, setMovie] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[Math.floor(Math.random() * 20)]);
        
      return request;
    }
    fetchdata();
  }, []);

  function truncate(source, size) {
    return source?.length > size ? source.slice(0, size - 1) + "…" : source;
  }
  //{`${baseURL}${movie.poster_path}`}<img src={`${baseURL}${movie.backdrop_path}`} alt="bannerr.jpg" className="banner"/>
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseURL}${movie.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.original_name || movie?.name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <p className="banner_description">{truncate(movie?.overview, 150)}</p>
        
      </div><div className="banner_fade"></div>
    </header>
  );
}

export default Banner;
