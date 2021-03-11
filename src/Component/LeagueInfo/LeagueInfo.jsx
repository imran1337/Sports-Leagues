import React from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import male from "./../../Resorces/Photo/male3.png";
import female from "./../../Resorces/Photo/female2.png";
import genderMixed from "./../../Resorces/Photo/genderMixed.png";
import bg from "./../../Resorces/bg.png";
import "./LeagueInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faWeebly,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMars,
  faFlag,
  faFutbol,
  faSmileWink,
  faVenus,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import { faSmileWink as farSmileWink } from "@fortawesome/free-regular-svg-icons";
import foundIcon from "./../../Resorces/Icon/found 1.png";
import logoAlternative from "./../../Resorces/Photo/logoAlternative_200x200.png";
const LeagueInfo = () => {
  const { idLeague } = useParams();

  const [leagueInfo, setLeagueInfo] = useState({});

  useEffect(() => {
    const loadLeague = async () => {
      const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
      const result = await axios.get(url);
      setLeagueInfo(result?.data?.leagues[0]);
    };
    loadLeague();
  }, [idLeague]);

  const genderMale = <FontAwesomeIcon icon={faMars} />;
  const genderFemale = <FontAwesomeIcon icon={faVenus} />;
  const mixGender = <FontAwesomeIcon icon={faVenusMars} />;
  const flagIcon = <FontAwesomeIcon icon={faFlag} />;
  const sportsTypeIcon = <FontAwesomeIcon icon={faFutbol} />;
  const alternativeLogo = <FontAwesomeIcon icon={farSmileWink} />;

  const {
    strLogo,
    strLeague,
    strLeagueAlternate,
    intFormedYear,
    strGender,
    strSport,
    strCountry,
    strFacebook,
    strTwitter,
    strYoutube,
    strWebsite,
    strBanner,
    strDescriptionEN,
  } = leagueInfo;

  const infoImg =
    strGender === "Male" ? male : strGender === "Female" ? female : genderMixed;

  const infoImgAlt =
    strGender === "Male" ? "Male Footballer" : "Female Footballer";

  const genderInfo =
    strGender === "Male"
      ? genderMale
      : strGender === "Female"
      ? genderFemale
      : mixGender;

  return (
    <>
      {(Object.keys(leagueInfo).length !== 0 && (
        <div>
          <section style={{ height: "400px", position: "relative" }}>
            <div
              style={{
                background: `url(${strBanner || bg}) `,
                backgroundColor: "#d3d3",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPositionX: "center",
                filter: "blur(4px)",
                height: "350px",
              }}
            ></div>

            <div className="logo_img">
              <img
                className="img-fluid "
                src={strLogo || logoAlternative}
                alt=""
              />
            </div>
          </section>

          <div
            className="container bg-danger"
            style={{
              backgroundColor: "#3A42FF",
              borderRadius: "15px",
              padding: "10px 20px",
            }}
          >
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center my-3">
              <div className="league_info align-self-start align-self-sm-center">
                <h3 className="text-center mb-3">
                  {alternativeLogo} {strLeagueAlternate || strLeague}
                </h3>
                <div className="row m-auto">
                  <div className="col-6 col-md-12">
                    <p className="">
                      <img
                        style={{ width: "20px", height: "20px" }}
                        src={foundIcon}
                        alt="Found"
                      />{" "}
                      Founded: {intFormedYear}
                    </p>
                  </div>
                  <div className="col-6 col-md-12">
                    <p className="">
                      {flagIcon} Country: {strCountry}
                    </p>
                  </div>
                  <div className="col-6 col-md-12">
                    <p className="">
                      {sportsTypeIcon} Sport Type: {strSport}
                    </p>
                  </div>
                  <div className="col-6 col-md-12">
                    <p className="">
                      {genderInfo} Gender: {strGender}
                    </p>
                  </div>
                </div>
              </div>
              <img className="img-fluid" src={infoImg} alt={infoImgAlt} />
            </div>
          </div>
          <div className="container mt-5">
            <p className="lead">{strDescriptionEN}</p>
            <div className="icons_list d-flex justify-content-center">
              {strFacebook && (
                <a
                  href={`http://${strFacebook}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2x"
                    style={{ color: "#3B5998" }}
                    className="social_icon_style"
                  ></FontAwesomeIcon>
                </a>
              )}

              {strYoutube && (
                <a
                  href={`http://${strYoutube}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    size="2x"
                    style={{ color: "#FF0000" }}
                    className="social_icon_style"
                  ></FontAwesomeIcon>
                </a>
              )}

              {strTwitter && (
                <a
                  href={`http://${strTwitter}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="2x"
                    style={{ color: "#1DA1F2" }}
                    className="social_icon_style"
                  ></FontAwesomeIcon>
                </a>
              )}

              {strWebsite && (
                <a
                  href={`http://${strWebsite}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2"
                >
                  <FontAwesomeIcon
                    icon={faWeebly}
                    size="2x"
                    style={{ color: "#1DA444" }}
                    className="social_icon_style"
                  ></FontAwesomeIcon>
                </a>
              )}
            </div>
          </div>
        </div>
      )) || (
        <div className="spiner_class">
          <span
            className="spinner-border display-1 spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
        </div>
      )}
    </>
  );
};

export default LeagueInfo;

/**
 * first banner
 * 
 * <Jumbotron fluid style={{ padding: "0" }}>
            <div
              style={{
                background: `url(${strBanner}) `,
                backgroundColor: "#d3d3",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPositionX: "center",
              }}
            >
              <Container fluid className="text-center img_bg">
                <img
                  src={strLogo || logoAlternative}
                  className={`img-fluid w-50 p-3 rounded ${
                    !strLogo && "infoImg"
                  }`}
                  alt="logo"
                />
              </Container>
            </div>
          </Jumbotron>
 */
