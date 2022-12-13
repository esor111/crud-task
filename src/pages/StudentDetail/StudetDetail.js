import React, {useEffect, useState} from 'react';
import {axiosInstance} from '../../RequestMethod';
import {refreshToken} from '../../RequestMethod';
import {Link, useLocation} from 'react-router-dom';
const StudetDetail = () => {
  const location = useLocation ();
  const [data, setData] = useState ([]);
  const [error, setError] = useState (null);
  const id = location.pathname.split ('/')[2];
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get (
        `http://127.0.0.1:8000/student/${id}`,
        {refreshToken}
      );
      setData (response.data);
      console.log (response.data);
    } catch (error) {
      setError (error);
    }
  };

  useEffect (() => {
    fetchData ();
  }, []);

  return (
    <div className="container">
      <div className="card mx-auto mt-5" style={{marginRight: '1em'}}>

        <div className="card-body text-center">
          <h5 className="card-title">Name:  {data.name}</h5>
          <p className="card-text">
          Subject:  {data.subject}
          </p>

          <p className="card-text">
         Rollno:  {data.rollno}
          </p>
          <Link to="/" className="btn btn-primary">Go back</Link>
        </div>
      </div>
    </div>
  );
};

export default StudetDetail;