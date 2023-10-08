
import React, {useState}  from 'react';
import Paths from './components/paths.js';
import Login from './components/login.js';

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loadPaths = () => {
    if (isLoggedIn) return (<Paths/>)
    else return (<Login setIsLoggedIn={setIsLoggedIn}/>)
  }

  return (
    <div>
      {loadPaths()}
    </div>
  );

}
  