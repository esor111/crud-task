import React from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {logoutSuccess} from '../redux/userRedux';

const Nvabar = () => {
  const dispatch = useDispatch ();
  const handleClick = e => {
    e.preventDefault ();
  };

  const handleLogOut = () => {
    dispatch (logoutSuccess ());
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Home</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">

              <button
                className="btn btn-success my-2 my-sm-0 ml-4"
                type="submit"
              >
                   <Link className="nav-link " to="/newpost">
                  Add new Post
                </Link>       
              </button>
            
              

            </li>

            <button
              className="btn btn-success my-2 my-sm-0 ml-4"
              type="submit"
              onClick={handleLogOut}
            >
              Logout
            </button>

          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={handleClick}
            >
              Search
            </button>
          </form>
        </div>
      </nav>

    </div>
  );
  //   In the above example
};

export default Nvabar;
