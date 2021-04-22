import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function ProjectsTemplate(props) {
    //destructuring props so I don't have to use props every time I call a variable.
    const { title, link, imageLink, projectDescription, technologiesUsed, _id } = props;
  
  return (
    <Container>
      <Row>
        <Col>Project Title: {title}</Col>
      </Row>

      <Row>
        <Col>Project Link: {link}</Col>
      </Row>

      <Row>
        <Col>Project Image: <Image src={imageLink} alt={title} thumbnail/></Col>
      </Row>

      <Row>
        <Col>Project Description: {projectDescription}</Col>
      </Row>

      <Row>
        <Col>Project Technologies Used: {technologiesUsed}</Col>
      </Row>
      <br/>
    </Container>
  );
}

export default ProjectsTemplate;