import React from 'react';

function SocialMediaLinks() {
  
  return (
    <section>
        <ul>
          <li>
            <a href='https://www.linkedin.com/in/david-scherer-odell/' target='_blank' rel="noopener noreferrer">
              <img src='./../media/linkedinicon.png' alt="LinkedIn Icon"/>
            </a>
          </li>
          <li>
            <a href='https://www.facebook.com/david.scherer.77' target='_blank' rel="noopener noreferrer">
              <img src='./../media/facebookicon.png' alt="Facebook Icon"/>
            </a>
          </li>
          <li>
            <a href='https://github.com/dscherer21' target='_blank' rel="noopener noreferrer">
              <img src='./../media/githubicon.png' alt="Github Icon"/>
            </a>
          </li>
        </ul>
    </section>
  );
}

export default SocialMediaLinks;