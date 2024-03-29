import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

function SocialMediaLinks() {
  
  return (
    <Container>
      <Row>
        <Col sm='3' xs='3'>
          <a 
            href='https://www.linkedin.com/in/david-scherer-odell/' 
            target='_blank' 
            rel="noopener noreferrer"
            aria-describedby='newTab'
          >
            <Image 
              src='./../media/linkedinicon.png' 
              alt="David's LinkedIn" 
              fluid
            />
          </a>
        </Col>

        <Col sm='3' xs='3'>
          <a 
            href='https://www.facebook.com/david.scherer.77' 
            target='_blank' 
            rel="noopener noreferrer"
            aria-describedby='newTab'
          >
            <Image 
              src='./../media/facebookicon.png' 
              alt="David's Facebook" 
              fluid
            />
          </a>
        </Col>
        
        <Col sm='3' xs='3'>
          <a 
            href='https://github.com/dscherer21' 
            target='_blank' 
            rel="noopener noreferrer"
            aria-describedby='newTab'
          >
            <Image 
              src='./../media/githubicon.png' 
              alt="David's Github" 
              fluid
            />
          </a>
        </Col>

        <Col sm='3' xs='3'>
          <a 
            href='https://docs.google.com/document/d/1Lzl-3lVk9ChzMVunPTL7ergAAoqLURrm2jWo64zKcWY/export?format=pdf'
            download='David Scherer-ODell Resume'
            aria-describedby='downloadPDF'
            role='button'
          >
            <Image 
              id='resumeLink'
              src='./../media/resumeIcon.png' 
              alt="Download David's Resume" 
              fluid
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default SocialMediaLinks;