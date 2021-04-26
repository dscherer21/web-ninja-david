import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LandingPage() {
  
  return (
    <Container>
      <Row>
        <Col>
          <h1>Web Ninja David</h1>
          <br/>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Welcome!</h2>
        </Col>
      </Row>

      <Row>
        <Col className='whiteBackground'>
          <p>David Scherer-ODell is a web developer from Chicago, IL. He can build and deploy websites that can run across mutliple platforms and devices of various scale. David has worked in different industries and with different technologies, and loves innovating and solving people's problems. David is always on the lookout for new opportunities. If you would like to get in touch with him, feel free to contact him through one of the social media links down below or send a message through the contact page.</p>
          <br/>
          <p>You can view a copy of David's resume by clicking on the logo at the top of the screen.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default LandingPage;