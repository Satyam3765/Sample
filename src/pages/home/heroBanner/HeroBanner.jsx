import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./style.scss";

import useFetch from "../../../hooks/useFetch.jsx";

import { base_url } from "../../../App.jsx";
//import { base } from "../../../App.jsx";
const Base1 = "https://image.tmdb.org/t/p/original";
const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { data, loading } = useFetch("/movie/upcoming");
  const bas = base_url;
  useEffect(() => {
    const bg =
      Base1 + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
    console.log(bg);
    console.log(data);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <img src={background} />
        </div>
      )}

      <div className="opacity-layer"></div>

      <div className="heroBannerContent">
        <span className="title">
          <span className="mr-2">welcome </span>

          {JSON.parse(localStorage.getItem("userData"))["name"]}
        </span>

        <span className="subTitle">
          Millions of movies, TV shows and people to discover. Explore now.
        </span>
        <div className="searchInput">
          <input
            type="text"
            placeholder="Search for a movie or tv show...."
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
          />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
