import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import collegram from "../../Assets/Projects/collegram.png";
import candycrush from "../../Assets/Projects/candycrush.png";
import gallerie from "../../Assets/Projects/gallerie.png";
import food from "../../Assets/Projects/food.png";
import exmell from "../../Assets/Projects/exmell.png";
import speel from "../../Assets/Projects/speel.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={collegram}
              isBlog={false}
              title="Collegram"
              description="Social Network web app created using React.Js and typeScript, styled with Tailwind CSS. Fully connected to backend and deployed by Docker"
              ghLink="https://github.com/aliyamanii/collegram"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={candycrush}
              isBlog={false}
              title="JavaFX Candy Crush"
              description="Implementation of the Candy Crush game using javaFX (Uni advanced programming project)"
              ghLink="https://github.com/aliyamanii/javafx-candy-crush"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gallerie}
              isBlog={false}
              title="Gallerie"
              description="Gallerie app using React.JS and typescript. Kept up with the backend using Postman and Node.JS endpoints"
              ghLink="https://github.com/aliyamanii/rahnema-gallerie"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Self menu"
              description="Tailwind Practice using raw html/css/javascript Hand-made components made from super basic Front-End concepts. Still in progress (No backend)"
              ghLink="https://github.com/aliyamanii/Food"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exmell}
              isBlog={false}
              title="Exmell"
              description="XML Automata extraction/ String derivation checking. Created using python and TKinter, both versions (with GUI and without). (Uni Formal Languages and Automata Theory project)"
              ghLink="https://github.com/aliyamanii/exmell"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={speel}
              isBlog={false}
              title="Speel"
              description="Notepad app with built-in spell checking. No libraries used in the process, Basic Levenshtein edit-distance algorithm and dynamic programming used. Functions in both English and Persian languages. (Uni Algorithm Design project) "
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
