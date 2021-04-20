import React from 'react';
import SocialMediaLinks from './socialMediaLinks';
import Row from 'react-bootstrap/Row';

function Footer() {
  
  return (
    <Row>
        <SocialMediaLinks/>
        <div>Copyright ©2021</div>
    </Row>
  );
}

export default Footer;