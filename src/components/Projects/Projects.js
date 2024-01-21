import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import T_T from "../../Assets/Projects/T-T1.png";
import employeePortal from "../../Assets/Projects/Employee-Portal-Crud.png";
import tindog from "../../Assets/Projects/tindog.png";
import reactChatBot from "../../Assets/Projects/React-Chat-Bot1.png";
import jumboMart from "../../Assets/Projects/jumboMart2.png";
import blogCrud from "../../Assets/Projects/blog-crud.png";
import navBot from "../../Assets/Projects/NavBot.png";

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
              imgPath={T_T}
              isBlog={false}
              title="THREAD-TREADS"
              description="I have designed a sleek and user-friendly front-end for a clothing brand's e-commerce website using HTML, CSS, and JavaScript. The site provides an engaging platform for customers to explore and purchase clothing items effortlessly."
              ghLink="https://github.com/Khnusman4562/T-T"
              demoLink="https://khnusman4562.github.io/T-T/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jumboMart}
              isBlog={false}
              title="Jumbo Mart"
              description="Jumbo Mart is an e-commerce platform with HTML, CSS, JavaScript, PHP, and MySQL. It's responsive, allowing smooth browsing and purchasing on different devices. The backend uses PHP and MySQL for dynamic content and database management, ensuring a user-friendly experience."
              ghLink="https://github.com/Khnusman4562/Jumbo-Mart/"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={navBot}
              isBlog={false}
              title="NavBot"
              description="NavBot is a voice-based bot using Python that navigates users to shops within a mall. This innovative solution leverages voice commands for a seamless and hands-free shopping experience, enhancing user convenience and accessibility."
              ghLink="https://github.com/Khnusman4562/NavBot/"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactChatBot}
              isBlog={false}
              title="React-Chat-Bot"
              description="React-Chat-Bot a straightforward React chatbot, providing users with an interactive and engaging conversational experience. This user-friendly application utilizes React for the front-end, allowing for dynamic and responsive interactions with the bot."
              ghLink="https://github.com/Khnusman4562/React-Chatbot-App"
              demoLink="#"              
            />
          </Col>

 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogCrud}
              isBlog={false}
              title="Blog-CRUD"
              description="This is a simple blog project developed using PHP Laravel 9 and Vue.js. It allows users to perform CRUD (Create, Read, Update, Delete) operations on blog posts.."
              ghLink="https://github.com/Khnusman4562/Blog-v9"
              demoLink="#" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employeePortal}
              isBlog={false}
              title="Employee-Portal-CRUD"
              description="I have  developed a robust web application that performs CRUD operations using HTML, CSS, and JavaScript. The implementation includes thoughtful validation to enhance data accuracy and integrity. This ensures a seamless user experience, allowing for easy interaction with the application while maintaining a visually appealing and responsive design"
              ghLink="https://github.com/Khnusman4562/Employee-Portal"
              demoLink="#"  
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tindog}
              isBlog={false}
              title="Tindog"
              description="i have  built a fun and visually appealing static clone of Tinder, tailored for dogs, using HTML, CSS, Bootstrap, and JavaScript. The project offers a playful and user-friendly platform for dog enthusiasts, complete with a responsive design for accessibility across devices. Welcome to the canine world of online connections! 🐾💕"
              ghLink="https://github.com/Khnusman4562/Tindog"
              demoLink="https://tindog-jet-nu.vercel.app/"  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
