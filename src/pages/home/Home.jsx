import React from "react";
import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Populars from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import Trending from "./trending/Trending";
const Homes = () => {
  return (
    <div>
      <HeroBanner />
      <Populars />
      <TopRated />
      <Trending />
    </div>
  );
};

export default Homes;
