import React, { useState } from 'react';
//Importing react-dotenv to load environment variables.
import env from "react-dotenv";
//Importing react-google-recaptcha for Captcha to prevent spambots.
import ReCAPTCHA from "react-google-recaptcha";

function EmailForm() {
  const[captchaValue, setCaptchaValue] = useState();

  function onFormSubmit(e) {
    //Prevents the page from refreshing after a form submission.
    e.preventDefault();
    if(captchaValue == undefined || null){
      alert('Please check the Captcha box to ensure you are not a spambot. The Captcha times out after a certain amount of time, so you may need to recheck it.');
    } else {
      alert("This component is still under construction");
    };
    
  };

  function captchaSubmit(value) {
    setCaptchaValue(value);
    console.log("Captcha value:", value);
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
          sitekey={env.CAPTCHA_SITE_KEY}
          onChange={captchaSubmit}
        />

        <button type='submit' value='submit'>Send</button>
    </form>
  );
}

export default EmailForm;