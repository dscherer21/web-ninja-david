import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

function SocialMediaLinks() {
  
  return (
    <Container>
      <Row>
        <Col sm='4' xs='4'>
          <a href='https://www.linkedin.com/in/david-scherer-odell/' target='_blank' rel="noopener noreferrer">
            <Image src='./../media/linkedinicon.png' alt="LinkedIn Icon" fluid/>
          </a>
        </Col>

        <Col sm='4' xs='4'>
          <a href='https://www.facebook.com/david.scherer.77' target='_blank' rel="noopener noreferrer">
            <Image src='./../media/facebookicon.png' alt="Facebook Icon" fluid/>
          </a>
        </Col>
        
        <Col sm='4' xs='4'>
          <a href='https://github.com/dscherer21' target='_blank' rel="noopener noreferrer">
            <Image src='./../media/githubicon.png' alt="Github Icon" fluid/>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default SocialMediaLinks;