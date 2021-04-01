import React from 'react';
import { Link } from "react-router-dom";
import AudioPlayer from './audioPlayer';

function Header() {
  
  return (
    <header>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='/about'>About David</Link>
          </li>

          <li>
            <a href='https://docs.google.com/document/d/1Lzl-3lVk9ChzMVunPTL7ergAAoqLURrm2jWo64zKcWY/edit?usp=sharing' target='_blank' rel="noopener noreferrer"><img src='./media/websitelogo.png' alt='Website Logo'/></a>
          </li>

          <li>
            <Link to='/projects'>Projects</Link>
          </li>

          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        <AudioPlayer/>
    </header>
  );
}

export default Header;