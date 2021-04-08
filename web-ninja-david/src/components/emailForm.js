import React, { useState, useEffect } from 'react';
//Importing react-google-recaptcha for Captcha to prevent spambots.
import ReCAPTCHA from "react-google-recaptcha";
//Importing emailjs for client side email form sending.
import { SMTPClient } from 'emailjs';

const { REACT_APP_CAPTCHA_SITE_KEY, REACT_APP_SENDING_EMAIL, REACT_APP_SENDING_EMAIL_PASSWORD } = process.env;

function EmailForm() {
  const[captchaValue, setCaptchaValue] = useState();
  const[messageField, setMessageField] = useState();
  const[nameField, setNameField] = useState();
  const[emailField, setEmailField] = useState();

  const client = () => new SMTPClient({
    //setting up email client that sends the message
    user: REACT_APP_SENDING_EMAIL,
    password: REACT_APP_SENDING_EMAIL_PASSWORD,
    host: 'smtp.outlook.com',
    ssl: true,
  });

  function onFormSubmit(e) {
    //Prevents the page from refreshing after a form submission.
    e.preventDefault();
    if(captchaValue == undefined || null){
      alert('Please check the Captcha box to ensure you are not a spambot. The Captcha times out after a certain amount of time, so you may need to recheck it.');
    } else {
      alert("This component is still under construction");
      
      client.send(
        // send the message and get a callback with an error or details of the message that was sent
        {
		      from: {REACT_APP_SENDING_EMAIL},
		      to: 'dscherer21@gmail.com',
		      subject: 'Form Submission from Web-Ninja-David',
          text: "From: " + {nameField} + "\nName: " + {emailField} + "\nMessage: " +{messageField},
	      },
	      (err, message) => {
		      console.log(err || message);
	      }
      );
    };
    
  };

  function captchaSubmit(value) {
    setCaptchaValue(value);
    console.log("Captcha value: ", value);
  };

  useEffect(() => {
    console.log(messageField);
  }, [messageField]);

  useEffect(() => {
    console.log(emailField);
  }, [emailField]);

  useEffect(() => {
    console.log(nameField);
  }, [nameField]);
  
  return (
    <form onSubmit={onFormSubmit}>
        <label htmlFor="name">First name:</label><br/>
        <input type="text" id="name" name="name" placeholder='John Doe' onChange={(e) => setNameField(e.target.value)} required/><br/>

        <label htmlFor="email">Email:</label><br/>
        <input type="text" id="email" name="email" placeholder='example@email.com'  onChange={(e) => setEmailField(e.target.value)} required/><br/>

        <label htmlFor="message">Message:</label><br/>
        <input type="text" id="message" name="message" placeholder='Type your message here!' onChange={(e) => setMessageField(e.target.value)} required/><br/>

        <ReCAPTCHA
          sitekey={REACT_APP_CAPTCHA_SITE_KEY}
          onChange={captchaSubmit}
        />

        <button type='submit' value='submit'>Send</button>
    </form>
  );
}

export default EmailForm;