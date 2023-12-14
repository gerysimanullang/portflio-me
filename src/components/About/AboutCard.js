import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gery Audia Simanullang </span>
            from <span className="purple"> Bandung, Indonesia.</span>
            <br />
            Currently I have completed my education at Telkom University.
            The major I took during my education was D3 INFORMATION SYSTEMS.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking in Nature & Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If today you don't walk then prepare for the next day you will run!"{" "}
          </p>
          <footer className="blockquote-footer">Gery Simanullang</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
