import React from 'react';
import './App.css';
//Importing React-Router-Dom for client-side routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Header from './components/header';
import LandingPage from './components/landingPage';
import Footer from './components/footer';
import ProjectsPage from './components/projectsPage';
import ContactPage from './components/contactPage';
import AboutDavid from './components/aboutDavid';

function App() {
  return (
    <Router>
      <Container className="App" fluid>
        <span id='newTab' style={{ display: 'none' }}>Opens In a New Tab</span>
        <span id='downloadPDF' style={{ display: 'none' }}>Downloads a PDF</span>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <LandingPage/>
          </Route>

          <Route exact path='/about'>
            <AboutDavid/>
          </Route>

          <Route path='/projects'>
            <ProjectsPage/>
          </Route>

          <Route path='/contact'>
            <ContactPage/>
          </Route>
        </Switch>
        <Footer/>
      </Container>
    </Router>
  );
}

export default App;
