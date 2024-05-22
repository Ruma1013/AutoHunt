import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Basic form validation
      if (!name || !email || !password) {
        throw new Error('All fields are required');
      }

      // Make a POST request to your backend endpoint (/signup) with the form data
      await axios.post('http://localhost:3000/api/signup', { name, email, password }); // Change the URL to '/api/signup'
      // Optionally, you can redirect the user to another page after successful signup.
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || 'Failed to sign up');
    }
  };

  return (
    <div className='signup'>
      <div className="signup-container">
       <h1>Sign Up</h1>
       <form onSubmit={handleSubmit}>
         <div className="signup-fields">
            <input type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
         </div>
         <button type="submit">Continue</button>
       </form>
       <p className="signup-signup">Already have an account? <span>signup here</span></p>
        <div className="signup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & Policy</p>
        </div>
        {error && <p className="signup-error">{error}</p>}
      </div>
    </div>
  );
};

export default Signup;
