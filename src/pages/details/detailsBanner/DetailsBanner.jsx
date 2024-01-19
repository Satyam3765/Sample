import useFetch from "../../../hooks/useFetch.jsx";
import PosterFallback from "../../../assets/no-poster.png";
import { Row, Container, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { commonURL } from "../../../Variable/commonURL.js";
import CircleRating from "../../subComponents/circleRating/CircleRating.jsx";
import "./style.scss";
import Video from "../../subComponents/videoPopup/VideoPop.jsx";

const v = "https://image.tmdb.org/t/p/original";
const DetailsBanner = ({ vid }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);

  return (
    <div className="detailsBanner">
      <Row className="content">
        <Col md={6} sm={12} className="card left border-0">
          {data?.poster_path ? (
            <img className="posterImg" src={commonURL + data?.poster_path} />
          ) : (
            <img className="posterImg" src={PosterFallback}></img>
          )}
        </Col>
        <Col className="right">
          <div className="title">{`${data?.original_title} `}</div>
          <div className="subtitle">{data?.tagline}</div>
          <div className="row">
            <CircleRating rating={data?.vote_average.toFixed(1)} />
            <div
              className="playbtn"
              onClick={() => {
                setShow(true);
                setVideoId(vid?.results[0].key);
              }}
            >
              <button className="btn btn-primary">Watch Trailor</button>
            </div>
          </div>
        </Col>
      </Row>
      <Video
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};
export default DetailsBanner;
