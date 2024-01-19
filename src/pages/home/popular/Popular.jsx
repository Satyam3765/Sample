import React, { useState } from "react";

import Carousel from "../../subComponents/carousel/Carousel";

import SwitchTabs from "../../subComponents/switchTabs/SwitchTabs";
import "./style.scss";
import useFetch from "../../../hooks/useFetch";
import "bootstrap/dist/css/bootstrap.min.css";
const Populars = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/popular`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carouselSection">
      <span className="carouselTitle d-flex justify-content-center pt-5">
        What's Popular
      </span>
      <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />

      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default Populars;
