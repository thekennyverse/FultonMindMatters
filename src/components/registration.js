// Registration.js
import React, { useState } from 'react';
import './registration.css';


const Registration = ({setIsLoggedIn, setToggleLogin}) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleOnClick = () => {
    setToggleLogin(true);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = "POST";
    const body = JSON.stringify(formData);
    const url = 'http://localhost:4000/register';
    const headers = {
      'Content-Type': 'application/json',
    };

    const response = await fetch(url, {
      method,
      headers,
      body
    });

    console.log("register res: ", response)
    const data = await response.json();
    setIsLoggedIn(data.authenticated)
  }

  return (
    <div className="registration-page">         
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
      <button onClick={handleOnClick} className="signup">Have an account? Sign in</button>
    </div>
  );
};

export default Registration;
