import React, { useState, useEffect } from 'react';
//Importing react-google-recaptcha for Captcha to prevent spambots.
import ReCAPTCHA from "react-google-recaptcha";
//Importing emailjs for client-side email form sending.
import emailjs from 'emailjs-com';

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
    <form onSubmit={onFormSubmit}>
        <label htmlFor="from_name">Name:</label><br/>
        <input type="text" id="name" name="from_name" placeholder='John Doe' required/><br/>

        <label htmlFor="email_from">Email:</label><br/>
        <input type="email" id="email" name="email_from" placeholder='example@email.com' required/><br/>

        <label htmlFor="message">Message:</label><br/>
        <textarea type="text" id="message" name="message" placeholder='Type your message here!' required/><br/>

        <ReCAPTCHA
          sitekey={REACT_APP_CAPTCHA_SITE_KEY}
          onChange={captchaSubmit}
        /><br/>

        <button type='submit' value='Send'>Send</button>
    </form>
  );
}

export default EmailForm;