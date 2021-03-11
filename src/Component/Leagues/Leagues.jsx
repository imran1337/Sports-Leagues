import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Leagues.css";
import CardImg from "./../CardImg/CardImg";
const Leagues = () => {
  const [leagues, setLeagues] = useState([]);

  const loadLeagues = async () => {
    try {
      const baseUrl =
        "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
      const result = await axios.get(baseUrl);
      setLeagues(result.data.leagues);
    } catch (error) {
      console.log({ loadLeagues: error });
    }
  };

  useEffect(() => {
    loadLeagues();
  }, []);


  return (
    <>
      {(leagues.length && (
        <div className="d-flex flex-wrap justify-content-center container-fluid">
          {leagues.slice(0,700).map((league) => {
            const {
              idLeague,
              strLeague,
              strSport,
              strLeagueAlternate,
            } = league;

            return (
              <Card
                style={{ width: "16rem" }}
                className="text-center m-3 bg-danger card_hover_style"
                key={idLeague.toString()}
              >
                <CardImg leagueId={idLeague} />
                <Card.Body>
                  <Card.Title className="cardTitle">
                    {strLeagueAlternate ? strLeagueAlternate : strLeague}
                  </Card.Title>
                  <Card.Text className="font-weight-bold text-success">
                    Sports type: {strSport}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to={`/details/${idLeague}`}>
                    <Button className="font-weight-bold" variant="primary">
                      Explore{" "}
                      <FontAwesomeIcon
                        className="pt-1"
                        icon={faArrowRight}
                        size="lg"
                      />
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>
            );
          })}
        </div>
      )) || (
        <div className="text-center">
          <div className="display-1 mt-5">
            <div
              className="spinner-grow text-danger"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Leagues;