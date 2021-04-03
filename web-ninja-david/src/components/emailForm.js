import React from 'react';
//Importing react-dotenv to load environment variables.
import env from "react-dotenv";

function EmailForm() {

    function onFormSubmit(e) {
        e.preventDefault();
        alert("This component is still under construction");
    };
  
  return (
    <form onSubmit={onFormSubmit}>
        <label htmlFor="name">First name:</label><br/>
        <input type="text" id="name" name="name" placeholder='John Doe' required/><br/>

        <label htmlFor="email">Email:</label><br/>
        <input type="text" id="email" name="email" placeholder='example@email.com' required/><br/>

        <label htmlFor="message">Message:</label><br/>
        <input type="text" id="message" name="message" placeholder='Type your message here!' required/><br/>

        <div sitekey={env.CAPTCHA_KEY}>Hello!</div>

        <button type='submit' value='submit'>Send</button>
    </form>
  );
}

export default EmailForm;