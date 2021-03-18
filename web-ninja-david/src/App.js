import React from 'react';
import './App.css';
import Header from './components/header';
import LandingPage from './components/landingPage';
import Footer from './components/footer';
import ProjectsPage from './components/projectsPage';
import ContactPage from './components/contactPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      <ProjectsPage/>
      <ContactPage/>
      <Footer/>
    </div>
  );
}

export default App;
