import React, { useState, useEffect } from 'react';
//Importing react-google-recaptcha for Captcha to prevent spambots.
import ReCAPTCHA from "react-google-recaptcha";
//Importing emailjs for client-side email form sending.
import emailjs from 'emailjs-com';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

//Destructuring process.env
const { REACT_APP_CAPTCHA_SITE_KEY, REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_USER_ID } = process.env;

function EmailForm() {
  const[captchaValue, setCaptchaValue] = useState();

  function onFormSubmit(e) {
    //Prevents the page from refreshing after a form submission.
    e.preventDefault();
    if(captchaValue == undefined || null){
      alert('Please check the Captcha box to ensure you are not a spambot. The Captcha times out after a certain amount of time, so you may need to recheck it.');
    } else {
      emailjs.sendForm(REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, e.target, REACT_APP_EMAILJS_USER_ID)
      .then((result) => {
          document.getElementById('form').reset();
          console.log('Email Status: ', result.text);
          alert('Thank you! Your message was sent.');
      }, (error) => {
          console.log('Email Status: ', error.text);
          alert('Unfortunately, your message failed to send for some reason. If you would still like to contact David, you can do so at dscherer21@gmail.com.');
      });
      
    };
    
  };

  function captchaSubmit(value) {
    setCaptchaValue(value);
  };
  
  return (
    <form onSubmit={onFormSubmit} id='form'>
      <Container>
        <Row>
          <Col>
            <label htmlFor="from_name">Name:</label>
            <br/>
            <input 
              type="text" 
              id="name" 
              name="from_name" 
              placeholder='John Doe' 
              required
            />
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <label htmlFor="email_from">Email:</label>
            <br/>
            <input 
              type="email" 
              id="email" 
              name="email_from" 
              placeholder='example@email.com' 
              required
            />
            <br/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <label htmlFor="message">Message:</label>
            <br/>
            <textarea 
              type="text" 
              rows='10'
              id="message" 
              name="message" 
              placeholder='Type your message here!'
              required
            />
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <ReCAPTCHA
              sitekey={REACT_APP_CAPTCHA_SITE_KEY}
              onChange={captchaSubmit}
              style={{
                textAlign: 'center',
                display: 'inline-block'
              }}
            />
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Button 
              type='submit' 
              value='Send' 
              size='lg'
              variant="danger"
            >Send Message</Button>
          </Col>
        </Row>
      </Container>
    </form>
  );
}

export default EmailForm;