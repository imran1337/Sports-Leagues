import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";

const CardImg = ({ leagueId }) => {
  const [img, setImg] = useState(0);
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`
    )
      .then((res) => res.json())
      .then((data) => setImg(data.leagues[0].strBadge));
  }, [leagueId]);
  return (
    <>
      {(img && (
        <Card.Img variant="top" className="img-fluid p-3" src={img} />
      )) || (
        <div
          className="spinner-border text-primary mx-auto mt-4"
          role="status"
        ></div>
      )}
    </>
  );
};

export default CardImg;
