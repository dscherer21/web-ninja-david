import React from 'react';
import { Link } from "react-router-dom";
import AudioPlayer from './audioPlayer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Header() {
  
  return (
    <Container className='robotoCondensed'>
      <hr/>
      <Row>
        <Col lg='2' md='6'>
          <Link to='/' className='link'>Home</Link>
        </Col>

        <Col lg='2' md='6'>
          <Link to='/about' className='link'>About David</Link>
        </Col>

        <Col lg='4' md='12'>
          <a 
            href='https://docs.google.com/document/d/1Lzl-3lVk9ChzMVunPTL7ergAAoqLURrm2jWo64zKcWY/export?format=pdf'
            download='David Scherer-ODell Resume'
            role='button'
            aria-describedby='downloadPDF'
            aria-label='Davids Resume'
          >
            <Image 
              src='./websitelogo.png' 
              alt='Web Ninja David Homepage Logo' 
              className='websiteLogo' 
              thumbnail
            />
          </a>
        </Col>

        <Col lg='2' md='6'>
          <Link to='/projects' className='link'>Projects</Link>
        </Col>

        <Col lg='2' md='6'>
          <Link to='/contact' className='link'>Contact</Link>
        </Col>
      </Row>

      <Row>
        <Col xs='12'>
          <AudioPlayer/>
        </Col>
      </Row>
      <hr/>
    </Container>
  );
}

export default Header;