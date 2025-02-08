import React, { useRef } from 'react'; // Import useRef
import './join.css';
import emailjs from '@emailjs/browser';

const Join = () => { // Capitalize the component name
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_db522a6',
        'template_1gtyemp',
        form.current,
        'FDVSS8CeKfGG5PHIn' // Public key goes here directly
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };
  return (
    <div className="join" >
      <div className="left-j">


        <hr /><span className='number'>
          +91 9351020114
        </span>
        <div>

          <span className="stock-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR GAME</span>
          <span className="stock-text">WITH US !</span>
        </div>
      </div>

      <div className="right-j">
        <form ref={form} onSubmit={sendEmail} className="email-container"> {/* Corrected onSubmit location */}
          <input type="email" name="from_name" placeholder="Enter your email" />
          <button type="submit" className="btn btn-j">Join NOW</button> {/* Ensure button type is submit */}
        </form>
      </div>
    </div>
  );
};

export default Join;
