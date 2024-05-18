import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">Ali Yamani </span>
            from <span className="purple"> Tehran</span>
            <br />
            <br />
            Skilled software engineer with a year of experience in front-end
            <br />
            development, specializing in <span className="purple">React </span>
            and <span className="purple">TypeScript </span>. Known for
            <br />
            meticulous attention to detail and a strong passion for crafting
            <br />
            high-performance user interfaces for web applications using React.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
