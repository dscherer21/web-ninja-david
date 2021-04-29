import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button'

function ProjectsTemplate(props) {
    //destructuring props so I don't have to use props every time I call a variable.
    const { title, link, imageLink, projectDescription, technologiesUsed, codeRepo } = props;
  
  return (
    <Container >
      <Accordion>
        {/*Accordion will only display the project title. Then when clicked on, will expand to show the project details. */}
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
                  <Col lg='6' xs='12'>
                    <div>
                      <h3>Description: </h3>
                      <p>{projectDescription}</p>
                    </div>

                    <div>
                      <h3>Technologies Used: </h3>
                      <p>{technologiesUsed}</p>
                    </div>

                    <div>
                      <h3>Demo it live at: </h3>
                      <a href={link} target='_blank'>{link}</a>
                    </div>

                    <div>
                      <h3>Check out the code at: </h3>
                      {/*Ternary expression to display the code repo or a message if one doesn't exist.*/}
                      {codeRepo ? <a href={codeRepo} target='_blank'>{codeRepo}</a> : 'Sorry! There is no code repository available for this project.'}
                      
                    </div>
                  </Col>

                  <Col lg='6' xs='12' className='projectImage'>
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