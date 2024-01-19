import React, { useState } from "react";

import Carousel from "../../subComponents/carousel/Carousel";

import SwitchTabs from "../../subComponents/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";

const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/top_rated`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carouselSection">
      <span className="carouselTitle d-flex justify-content-center pt-5">
        Top Rated
      </span>
      <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />

      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default TopRated;
