import React, { useRef } from "react";
import "./style.scss";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { BsBootstrap } from "react-icons/bs";

import { Row, Container, Col } from "react-bootstrap";
import CircleRating from "../circleRating/CircleRating";

const base_UR = "https://image.tmdb.org/t/p/original";
const Carousel = ({ data, loading, endpoint, title }) => {
  const carouselContainer = useRef();

  const navigate = useNavigate();

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <div className="carousel">
        {title && <div className="carouselTitle">{title}</div>}
        <div class="arrow1">
          <BsFillArrowLeftCircleFill
            className="carouselLeftNav arrow"
            onClick={() => navigation("left")}
          />
        </div>
        <div class="arrow2">
          <BsFillArrowRightCircleFill
            className="carouselRighttNav arrow"
            onClick={() => navigation("right")}
          />
        </div>

        <div className="carouselItems card-container" ref={carouselContainer}>
          {data?.map((item) => {
            const posterURL = base_UR + item.poster_path;
            console.log(item.poster_path);
            return (
              <div class="example-card">
                <div
                  key={item.id}
                  className="carouselItem"
                  onClick={() =>
                    navigate(`/${item.media_type || endpoint}/${item.id}`)
                  }
                >
                  <div className="posterBlock">
                    <img src={posterURL} class="rowing poster" />
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                  </div>
                  <div className="textBlock">
                    <span className="title">{item.title || item.name}</span>
                    <span className="date"></span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Carousel;
