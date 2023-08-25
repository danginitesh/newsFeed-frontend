import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import Protected from './components/Protected'

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)

  const signout = () => {
    setIsSignedIn(false)
  }
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  // here save "token" in localStorage of Http Cokkie accordingly your choice i am not handeling this part

  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          {isSignedIn && (
          <div className="d-grid mt-5">
            <button className="btn-danger" onClick={signout}>
              Sign out
            </button>
          </div>
        )}
        </nav>

        <Routes>
          <Route path="/signup" element={<SignUp email={email} setEmail={setEmail} username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>}/>
          <Route path="/login" element={<Login setIsSignedIn={setIsSignedIn} setToken={setToken} email={email} password={password} setEmail={setEmail} setPassword={setPassword}/>}/>
          <Route path="/" element={<Protected isSignedIn={isSignedIn}><Home /></Protected>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
