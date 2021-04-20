import React from 'react';
import { Link } from "react-router-dom";
import AudioPlayer from './audioPlayer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Header() {
  
  return (
    <Container className='shojumaru'>
      <Row>
        <Col>
          <Link to='/'>Home</Link>
        </Col>

        <Col>
          <Link to='/about'>About David</Link>
        </Col>

        <Col>
          <a href='https://docs.google.com/document/d/1Lzl-3lVk9ChzMVunPTL7ergAAoqLURrm2jWo64zKcWY/edit?usp=sharing' target='_blank' rel="noopener noreferrer">
            <Image src='./media/websitelogo.png' alt='Website Logo' className='websiteLogo' thumbnail/>
          </a>
        </Col>

        <Col>
          <Link to='/projects'>Projects</Link>
        </Col>

        <Col>
          <Link to='/contact'>Contact</Link>
        </Col>
      </Row>

      <Row>
        <AudioPlayer/>
      </Row>
    </Container>
  );
}

export default Header;