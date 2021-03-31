import React from 'react';

function EmailForm() {

    function onFormSubmit(e) {
        e.preventDefault();
        alert("This component is still under construction");
    };
  
  return (
    <form onSubmit={onFormSubmit}>
        <label for="name">First name:</label><br/>
        <input type="text" id="name" name="name" placeholder='John Doe' required/><br/>

        <label for="email">Email:</label><br/>
        <input type="text" id="email" name="email" placeholder='example@email.com' required/><br/>

        <label for="message">Message:</label><br/>
        <input type="text" id="message" name="message" placeholder='Type your message here!' required/><br/>

        <button type='submit' value='submit'>Send</button>
    </form>
  );
}

export default EmailForm;