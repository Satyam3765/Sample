import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { useState } from "react";

import DetailsBanner from "./detailsBanner/DetailsBanner";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  const { bannerData, setBannerData } = useState(null);

  useEffect(() => {
    console.log(data);
    console.log(id);
  });

  return (
    <div>
      <DetailsBanner vid={data} />
    </div>
  );
};

export default Details;
