import React from 'react';
import EmailForm from './emailForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContactPage() {
  
  return (
    <Container>
      <Row>
        <Col>
          <h1>Contact</h1>
        </Col>
      </Row>

      <Row className='whiteBackground'>
        <Col>Welcome to the Contact Page. If you would like to send a message to David, you may do so here, or feel free to use one of the social media links below to contact him. David is always open to listening to new project opportunities.</Col>
      </Row>

      <Row>
        <Col>
          <EmailForm/>
        </Col>
      </Row>

    </Container>
  );
}

export default ContactPage;