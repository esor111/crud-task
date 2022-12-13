import axios from 'axios';
import {useRef} from 'react';
import {Link} from 'react-router-dom';
import {loginfaliure, loginStart, loginSuccess} from '../../redux/userRedux';
import {useDispatch} from 'react-redux';
import './login.css';

export default function Login () {
  const dispatch = useDispatch ();
  const userRef = useRef ();
  const passwordRef = useRef ();
  const handleSubmit = async e => {
    e.preventDefault ();
    dispatch (loginStart ());
    try {
      const res = await axios.post ('http://127.0.0.1:8000/login/', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch (loginSuccess (res.data));

      localStorage.setItem ('refresh', res.data.tokens.refresh);
      localStorage.setItem ('access', res.data.tokens.access);
      alert ('user login sucessfully');
      window.location.replace ('/');
    } catch (err) {
      alert (err);
      console.log (err);
      dispatch (loginfaliure ());
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
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
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
