import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import NavBar from "../Navbar.js";
import { CgCPlusPlus } from "react-icons/cg";
import { FaGithub } from "react-icons/fa6";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandCpp } from "react-icons/tb";

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
  console.log("userId", id); // Get userId from URL

  const [userData, setUserData] = useState(null);
  const [hobbyData, setHobbyData] = useState(null);
  const [skillData,setskillData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const userResponse = await axios.get(`https://portfolioback-kappa.vercel.app/about/${id}`);
          setUserData(userResponse.data);
          console.log("User data:", userResponse.data);

          const hobbyResponse = await axios.get(`https://portfolioback-kappa.vercel.app/hobby/${id}`);
          setHobbyData(hobbyResponse.data);
          console.log("User hobby data:", hobbyResponse.data);

          const skillsetResponse = await axios.get(`http://localhost:4000/skillset/${id}`);
          console.log("Skillset:", skillsetResponse.data);
          setskillData(skillsetResponse.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        
        {skillData.length > 0 ? (
            skillData.map((skill, index) => (
              <Col key={index} xs={4} md={2} className="tech-icons">
                {skill.skill === "Javascript" && <DiJavascript1 />}
                {skill.skill === "C++" && <CgCPlusPlus />}
                {skill.skill === "Github" && <FaGithub />}
                {skill.skill === "NodeJs" && <DiNodejs />}
                {skill.skill === "React" && <DiReact />}  
                {skill.skill === "Html" && <TiHtml5 />}
                {skill.skill === "MongoDb" && <DiMongodb />}
                {skill.skill === "CSS" && <IoLogoCss3 />}
                {skill.skill === "MySQL" && <SiPostgresql />}
                {skill.skill === "Python" && <DiPython />}
              </Col>
            ))
          ) : (
            <p>Loading skills...</p>
          )}

              {/* <Col xs={4} md={2} className="tech-icons">
                <CgCPlusPlus />
              </Col>
              
              <Col xs={4} md={2} className="tech-icons">
                <FaGithub />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiReact />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                < TiHtml5/>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiMongodb />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <IoLogoCss3 />
              </Col> */}
              {/* <Col xs={4} md={2} className="tech-icons">
                <DiGit />
              </Col> */}
              {/* <Col xs={4} md={2} className="tech-icons">
                <SiFirebase />
              </Col> */}
              {/* <Col xs={4} md={2} className="tech-icons">
                <TbBrandCpp />
              </Col> */}
              {/* <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiPython />
              </Col> */}
              {/* <Col xs={4} md={2} className="tech-icons">
                <DiJava />
              </Col> */}
            </Row>

        {/* <h1 className="project-heading">
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
