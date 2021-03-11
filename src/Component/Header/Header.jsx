import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import bg from './../../Resorces/bg.png'
import './Header.css'
export const Header = () => {
  return (
    <Jumbotron fluid style={{background: `url(${bg})`, height: '500px'}}>
      <Container fluid className="text-center header_text_center">
        <h1 className="font-weight-bold text-white">Sports Leagues</h1>
      </Container>
    </Jumbotron>
  );
};
