import React from 'react';
import SocialMediaLinks from './socialMediaLinks';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  
  return (
    <Container>
      <hr/>
      <Row>
        <Col>
          <SocialMediaLinks/>
          <br/>
        </Col>
      </Row>

      <Row>
        <Col className='robotoCondensed'>Copyright ©2021</Col>
      </Row>
      <br/>
    </Container>
  );
}

export default Footer;