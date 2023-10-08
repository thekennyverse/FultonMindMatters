// Login.js

import React, {useState} from 'react'

function Login({setIsLoggedIn}) {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })


  const handleOnChange = (e) => {
    const name = e.target.placeholder.toLowerCase();
    const value  = e.target.value;
    
    setFormData((previousState) => ({
      ...previousState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      loginObj: formData
    };

    const result = fakeFetchCall("local:hostkjvdkfjhkdj", body)
    setIsLoggedIn(result)
  }


  const fakeFetchCall = (url, body) => {
    const fakeDatabase = {
      username: 'abc',
      password: 'abc'
    }

    const { loginObj } = body
    return fakeDatabase.username === loginObj.username &&
      fakeDatabase.password === loginObj.password
  }
  

  return (
    <div className="login-page">
      <h1>Welcome to Fulton Mind Matters</h1>
      <p>Fulton County #1 source for Resources</p>
      
      <form onSubmit={handleSubmit}>
        <input type="username" placeholder="Username" value={formData.username} onChange={handleOnChange}/>
        <input type="password" placeholder="Password" value={formData.password} onChange={handleOnChange}/>
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default Login