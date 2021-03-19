import React from 'react';
import './App.css';
//Importing React-Router-Dom for client-side routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Header from './components/header';
import LandingPage from './components/landingPage';
import Footer from './components/footer';
import ProjectsPage from './components/projectsPage';
import ContactPage from './components/contactPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/'>
            <LandingPage/>
          </Route>
          <Route path='/projects'>
            <ProjectsPage/>
          </Route>
          <Route path='/contact'>
            <ContactPage/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
