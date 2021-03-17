import React from 'react';
import './App.css';
import Header from './components/header';
import LandingPage from './components/landingPage';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
