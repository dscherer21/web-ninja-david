import React from 'react';
import { Link } from "react-router-dom";
import AudioPlayer from './audioPlayer';

function Header() {
  
  return (
    <header>
        <div>Web-Ninja David</div>
        <div>This is the Header!</div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
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