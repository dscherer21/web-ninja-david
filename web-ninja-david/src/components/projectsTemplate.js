import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button'

function ProjectsTemplate(props) {
    //destructuring props so I don't have to use props every time I call a variable.
    const { title, link, imageLink, projectDescription, technologiesUsed, _id } = props;
  
  return (
    <Container >
      <Accordion>
        <Row>
          <Col>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <h2 className='whiteBackground'>{title}</h2>
            </Accordion.Toggle>
          </Col>
        </Row>

        <Row>
          <Col>
            <Accordion.Collapse eventKey="0">
              <Container className='whiteBackground'>
                <Row>
                  <Col>
                    <div><h3>Description: </h3>{projectDescription}</div>
                    <div><h3>Technologies Used: </h3>{technologiesUsed}</div>
                    <div>
                      <h3>Demo it live at: </h3>
                      <a href={link} target='_blank'>{link}</a>
                    </div>
                  </Col>

                  <Col>
                    <Image 
                      src={imageLink} 
                      alt={title} 
                      thumbnail
                    />
                  </Col>
                </Row>
              </Container>
            </Accordion.Collapse>
          </Col>
        </Row>
      </Accordion>
      <br/>
    </Container>
  );
}

export default ProjectsTemplate;