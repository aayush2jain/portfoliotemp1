import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import NavBar from "../Navbar";
function Projects() {
   const { id } = useParams(); 
    console.log("userId",id)// Get userId from URL
    const [projectData, setprojectData] = useState(null);
  
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await axios.get(`https://portfolioback-kappa.vercel.app/project/${id}`);
          setprojectData(response.data);
          console.log("User data:", response.data);

          const skillsetResponse = await axios.get(`http://localhost:4000/skillset/${id}`);
          console.log("Skillset:", skillsetResponse);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);
  
    if (!projectData) {
      return <h2>Loading...</h2>;
    }
  return (
    <Container fluid className="project-section">
      <Particle />
      <NavBar id = {id}/>
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectData.map((project) => {
            return (
              <Col md={4} className="project-card">
              <ProjectCard
                imgPath={project.image}
                title= {project.projectname}
                description={project.description}
                demoLink={project.demoLink}
              />
              </Col>  
            );
          })}
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
