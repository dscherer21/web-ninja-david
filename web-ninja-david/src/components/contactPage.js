import React from 'react';
import EmailForm from './emailForm';
import Row from 'react-bootstrap/Row';

function ContactPage() {
  
  return (
    <Row>
        <h1>Contact</h1>
        <p>Welcome to the Contact Page. If you would like to send a message to David, you may do so here, or feel free to use one of the social media links below to contact him. David is always open to listening to new project opportunities.</p>
        <EmailForm/>

    </Row>
  );
}

export default ContactPage;