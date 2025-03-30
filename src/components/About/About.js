import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import NavBar from "../Navbar.js";
import { CgCPlusPlus } from "react-icons/cg";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function About() {
  const { id } = useParams(); 
    console.log("userId",id)// Get userId from URL
    const [userData, setUserData] = useState(null);
    const [hobbyData, sethobbyData] = useState(null);
  
    useEffect(() => {
      if (id) {
        axios
          .get(`http://localhost:4000/about/${id}`) // Pass userId to API
          .then((response) => {
            setUserData(response.data); 
            
            console.log("User data:", response);
          })
          .catch((error) => console.error("Error fetching user data:", error));
          axios
          .get(`https://portfolioback-kappa.vercel.app/hobby/${id}`) // Pass userId to API
          .then((response) => {
           sethobbyData(response.data);
            console.log("Userhobby data:", response.data);
          })
          .catch((error) => console.error("Error fetching user data:", error));
      }
    }, [id]);
  
    if (!userData) {
      return <h2>Loading...</h2>;
    }
  return (
    <Container fluid className="about-section">
      <Particle />
      <NavBar id = {id}/>
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {userData.intro}
          </p>
          <ul>
          {hobbyData ?(
hobbyData.map((hobby) => {
  return (
    <li className="about-activity">
      <ImPointRight /> {hobby.hobby}
    </li>
  );
})
          ):(
            <p>wait it's loading</p>
          )
            
          }
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "{userData.quote}"{" "}
          </p>
          <footer className="blockquote-footer">{userData.name}</footer>
        </blockquote>
      </Card.Body>
    </Card>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        {/* <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
              <Col xs={4} md={2} className="tech-icons">
                <CgCPlusPlus />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <TbBrandGolang />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiReact />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiSolidity />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiMongodb />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiNextdotjs />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiGit />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiFirebase />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiRedis />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiPython />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiJava />
              </Col>
            </Row>

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
              <Col xs={4} md={2} className="tech-icons">
                <SiMacos />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiPostman />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiSlack />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiVercel />
              </Col>
            </Row> */}
      </Container>
    </Container>
  );
}

export default About;
