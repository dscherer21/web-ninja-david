import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SocialMediaLinks() {
  
  return (
    <Container>
      <Row>
        <Col lg='4' md='6'>
          <a href='https://www.linkedin.com/in/david-scherer-odell/' target='_blank' rel="noopener noreferrer">
            <img src='./../media/linkedinicon.png' alt="LinkedIn Icon"/>
          </a>
        </Col>

        <Col lg='4' md='6'>
          <a href='https://www.facebook.com/david.scherer.77' target='_blank' rel="noopener noreferrer">
            <img src='./../media/facebookicon.png' alt="Facebook Icon"/>
          </a>
        </Col>
        
        <Col lg='4' md='12'>
          <a href='https://github.com/dscherer21' target='_blank' rel="noopener noreferrer">
            <img src='./../media/githubicon.png' alt="Github Icon"/>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default SocialMediaLinks;