// LoginSignup.jsx

import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import axios from 'axios'; // Import Axios for making HTTP requests

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your backend endpoint (/signup) with the form data
      await axios.post('http://localhost:3000/signup', { name, email, password });
      // Optionally, you can redirect the user to another page after successful signup.
    } catch (error) {
      console.error(error);
      setError('Failed to sign up');
    }
  };
  

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
       <h1>Sign Up</h1>
       <form onSubmit={handleSubmit}>
         <div className="loginsignup-fields">
            <input type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
         </div>
         <button type="submit">Continue</button>
       </form>
       <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & Policy</p>
        </div>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default LoginSignup;
