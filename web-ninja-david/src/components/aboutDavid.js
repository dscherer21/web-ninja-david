import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function AboutDavid() {
  
  return (
    <Container>
      <Row className='whiteBackground'>
        <Col lg='6' md='12' id='paddingFix'>
          <h1>David </h1>
          <h1>Scherer-ODell</h1>
        </Col>

        <Col lg='6' md='12'>
          <Image 
            src='./../media/davidsheadshot.jpg' 
            alt="David's Headshot" 
            className='profileImage' 
            thumbnail
          />
        </Col>
      </Row>
      <br/>
      
      <Row className='whiteBackground'>
        <Col>
          <h2>Education and Work Experience</h2>
          <br/>
          <h3>Northwestern Web Development Program</h3>
          <p>David attended the Northwestern University Full Stack Web Development training program in 2018, a 3 month non-degree program, where he learned MERN stack(MongoDB, ExpressJS, ReactJS, and NodeJS) development.</p>
          <br/>
          <h3>The Difference Engine</h3>
          <p>After the Northwestern program, David worked at <a href='https://www.thedifferenceengine.io/' target='_blank' rel="noopener noreferrer">The Difference Engine</a>(TDE). At TDE, David was assigned to a project called "Women in Comedy", a social media site for aspiring and professional female comedians to connect with one another. The orginal site was built in WordPress, however, the client wanted something different, so the site was rebuilt from scratch. The technologies that were used on this project were: ReactJS, Ruby on Rails, Redux, Heroku, Bootstrap, Docker, and PostGreSQL.</p>
          <br/>
          <h3>Tata Consultancy Services</h3>
          <p>After TDE, David worked at Tata Consultancy Services(TCS), where he was contracted out to another client. David was brought on to help the client with an internal software application. The application was being upgraded from React v15 to React v16. The tech stack for the application was: ReactJS, Java, Maven/Gradle, Flux, and MongoDb.</p>  
          <br/>
          <h3>AudioEye</h3>
          <p>After TCS, David worked at AudioEye, where he helped clients make their website more accessible using WAI-ARIA standards. David daily tasks would inclue performing a WCAG(Web Content Accessibility Guidelines) scan to identify any issues in the client's site where accessibility improvements could be made and implemented those changes. David also assited his co-workers with other debugging issues. jQuery was the primary language used for all the implementation.</p> 
        </Col>
        <br/>
      </Row>
      <Row className='whiteBackground'>
        <Col>
          <h2>David's Start</h2>
          <p>David's interest in technology started when he was a teenager. He was continually surrounded by tech-savvy friends. He started off with building gaming PC's to play video games. Later, a friend of David's did a coding project for a local University's Spanish course, and David sat in and watched him do a lot of the coding. That is how David became interested in coding as a profession. In 2018, with the encouragement of his wife, David decided to begin his career in definite, by enrolling in the training course at Northwestern University. Since then, David has been pursuing a career as a web developer.</p>
        </Col>
        <br/>
      </Row>
      <Row className='whiteBackground'>
        <Col>
          <h2>David's Hobbies and Interests</h2>
          <p>David's hobbies and interests are very wide and varied. David is a big gamer, he enjoys a lot of different types of music, movies and tv shows, and other things.</p>
          <br/>
          <h3>Games</h3>
          <p>David enjoys playing party games, video games, card games, and Role-playing games. Some of his favorite games are Magic: The Gathering, Dungeons & Dragons, The Legend of Zelda games, and Super Mario Brothers games.</p>
          <br/>
          <h3>Movies and TV shows</h3>
          <p>David likes comedies, action & adventure, fantasy, anime, and sci-fi. Some of his favorite shows and movies are The Matrix, Star Wars, Futurama, Dragon Ball Z, and Lord of The Rings.</p>
          <br/>
          <h3>Music</h3>
          <p>David enjoys a pretty wide variety of music: Rock, Hard Rock, Punk, Grunge, Easy Listening, Hiphop, Rap, R&B, video game music, etc. If he had to pick a genre that he most listened to, it would probably be Punk music.</p>
          <br/>
          <h3>Other Interests</h3>
          <p>Also in his spare time, David enjoys volunteering his time at different NPO's(Non-profit Organizations) and doing personal coding projects, and going to coding meetup events.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutDavid;