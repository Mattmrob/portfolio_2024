import { useState } from 'react';
import { validateEmail } from '../utils/helpers.js';


export default function ContactPage() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'text') {
      setText(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    if (!name) {
      setErrorMessage(
        'Please enter your name!'
      );
      return;
    }
    if (!text) {
      setErrorMessage(
        'Please enter a message!'
      );
      return;
    }

    setName('');
    setText('');
    setEmail('');

    setErrorMessage(
      'My server is not online at the moment, but thank you for the interest!'
    );

  };

    return (
      <div className="container pt-4">

        <h1 className="title">Contact Me</h1>

        <div className="cf-container">

          <h2>I am best reached through email or phone call!</h2>
          <h3>matthew@mmroberts.com • 925-350-1818 • mmroberts.com</h3>


          <form className="form" onSubmit={handleFormSubmit}>

            <input 
            id="name"
            value={name}
            name="name"
            onChange={handleInputChange}
            type="name"
            placeholder="Name"
            />


            <input 
            id="email"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
            />


            <input 
            id="text"
            value={text}
            name="text"
            onChange={handleInputChange}
            type="text"
            placeholder="Your Message"
            />


            <button id="submit" type="submit">
              Submit!
            </button>

          </form>

          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}

        </div>


      </div>
    );
  }