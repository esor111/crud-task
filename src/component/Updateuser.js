import React, {useState} from 'react';
import {axiosInstance} from '../RequestMethod';
import {useLocation} from 'react-router-dom';
import Nvabar from './Nvabar';

const Updateuser = () => {
  const location = useLocation ();
  const [name, setUsername] = useState ('');
  const [subject, setSubject] = useState ('');
  const [rollno, setRoll] = useState ();
  const userId = location.pathname.split ('/')[2];

  console.log (rollno);
  const UpdateUser = async e => {
    e.preventDefault ();
    try {
      const response = await axiosInstance.put (
        `http://127.0.0.1:8000/student/${userId}/`,
        {name, rollno, subject}
      );
window.location.replace("/")
    } catch (err) {
      console.log (err);
    }
  };

  return (

<>
<Nvabar/>
<div className="container-fluid mt-5">
      <form className="">

        <label>
          name
        </label>
        <div className="input-group mb-2 mr-sm-2" style={{width: '25%'}}>
          <input
            type="text"
            className="form-control"
            id="inlineFormInputGroupUsername2"
            placeholder="Username"
            onChange={e => setUsername (e.target.value)}
          />
        </div>

        <label>
          Subject
        </label>
        <div className="input-group mb-2 mr-sm-2" style={{width: '25%'}}>

          <input
            type="text"
            className="form-control"
            id="inlineFormInputGroupUsername2"
            placeholder="Username"
            onChange={e => setSubject (e.target.value)}
          />
        </div>

        <label>
          rollno
        </label>
        <div className="input-group mb-2 mr-sm-2" style={{width: '25%'}}>

          <input
            type="text"
            className="form-control"
            id="inlineFormInputGroupUsername2"
            placeholder="rollno"
            onChange={e => setRoll (e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mb-2"
          onClick={UpdateUser}
        >
          Update
        </button>
      </form>
    </div>

</>
  );
};

export default Updateuser;
