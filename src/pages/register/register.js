import './register.css';
import {useRef} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Register () {
  const userRef = useRef ();
  const passwordRef = useRef ();
  const conpasswordRef = useRef ();

  const handleSubmit = async e => {
    e.preventDefault ();
    try {
      const res = await axios.post ('http://127.0.0.1:8000/signup/', {
        username: userRef.current.value,
        password: passwordRef.current.value,
        confirm_password: conpasswordRef.current.value,
      });
      alert(res.data)
      window.location.replace("/login");
    } catch (err) {
      console.log (err);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={conpasswordRef}
        />

        <button className="registerButton" onClick={handleSubmit}>Register</button>
      </form>
      <button className="registerLoginButton" >
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
}
