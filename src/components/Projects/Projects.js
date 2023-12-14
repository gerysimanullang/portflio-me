import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/dlo.jpeg";
import emotion from "../../Assets/Projects/dental.jpeg";
import editor from "../../Assets/Projects/mic.jpeg";
import chatify from "../../Assets/Projects/ttris.jpeg";
import suicide from "../../Assets/Projects/docc.jpeg";
import bitsOfCode from "../../Assets/Projects/mole.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Tetris Game"
              description="This project is a game project that I made just for entertainment and to increase my value in learning programming , This game is an offline game."
              ghLink="https://github.com/gerysimanullang/GAMETETRIS/tree/main/tetris-js-master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Mole Master Game"
              description="This project is a game project that I made just for entertainment and to increase my value in learning programming , This game is an offline game."
              ghLink="https://github.com/gerysimanullang/GameMOLEMASTER"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Micro Event"
              description="This project is a music event project that really helps users in creating big events."
              ghLink="https://github.com/gerysimanullang/Webmicro"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Doodle Game"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants , I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/gerysimanullang/DoodleGame-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="We Sehat DOC"
              description="This project is a healthy project that we function to help users chat with doctors and find out complaints and the location of the nearest hospital, not only that, users can also see medicines that can cure the disease."
              ghLink="https://github.com/gerysimanullang/we_sehat"            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Dental Clinic"
              description="This project is a dental clinic project to provide services to the community regarding disease and healthy living."
              ghLink="https://github.com/gerysimanullang/dentalweb"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
