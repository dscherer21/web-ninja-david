import React, { useState } from 'react';
//Importing react-dotenv to load environment variables.
//import env from "react-dotenv";
//Importing react-google-recaptcha for Captcha to prevent spambots.
import ReCAPTCHA from "react-google-recaptcha";
//Importing emailjs for client side email form sending.
import { SMTPClient } from 'emailjs';

const { REACT_APP_CAPTCHA_SITE_KEY, REACT_APP_SENDING_EMAIL, REACT_APP_SENDING_EMAIL_PASSWORD } = process.env;

function EmailForm() {
  
  const[captchaValue, setCaptchaValue] = useState();

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
		      text: 'i hope this works',
		      from: 'you <username@your-email.com>',
		      to: 'someone <someone@your-email.com>, another <another@your-email.com>',
		      cc: 'else <else@your-email.com>',
		      subject: 'testing emailjs',
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
  
  return (
    <form onSubmit={onFormSubmit}>
        <label htmlFor="name">First name:</label><br/>
        <input type="text" id="name" name="name" placeholder='John Doe' required/><br/>

        <label htmlFor="email">Email:</label><br/>
        <input type="text" id="email" name="email" placeholder='example@email.com' required/><br/>

        <label htmlFor="message">Message:</label><br/>
        <input type="text" id="message" name="message" placeholder='Type your message here!' required/><br/>

        <ReCAPTCHA
          sitekey={REACT_APP_CAPTCHA_SITE_KEY}
          onChange={captchaSubmit}
        />

        <button type='submit' value='submit'>Send</button>
    </form>
  );
}

export default EmailForm;