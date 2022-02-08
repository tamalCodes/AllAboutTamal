import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tamal Das </span>
            from <span className="purple"> UEMK, India.</span>
            <br />
            I'm a sophomore pursuing Computer Science and Engineering from UEMk
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Stalking twitter
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "You can make it happen!"{" "}
          </p>
          <footer className="blockquote-footer">Tamal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
