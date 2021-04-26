import React from 'react';
import projects from './projects';
import ProjectsTemplate from './projectsTemplate';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProjectsPage() {
  
  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome to the Projects Page!</h1>
        </Col>
      </Row>

      <Row>
        <Col className='whiteBackground'>
          <p>Here is a list of some of David's deployed projects. Most of them are personal projects that David has built by himself. Just click on each name to view the details about that project and where you can demo it live.</p>
        </Col>
      </Row>

      <Row>
        <Col>
          {/*using the spread operator (...) to push all the project props into the projectsTemplate.*/}
          {projects.map((project) => (
            <ProjectsTemplate {...project} key={project._id}/>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectsPage;