import React, {useState} from 'react';
import {axiosInstance} from '../RequestMethod';
import Nvabar from './Nvabar';

const  Newpost= () => {
  const [name, setUsername] = useState ('');
  const [subject, setSubject] = useState ('');
  const [rollno, setRoll] = useState ();

  console.log(rollno)
  const Newuser = async e => {
    e.preventDefault ();
    try {
      const response = await axiosInstance.post (
        `http://127.0.0.1:8000/student/`,
        {name, rollno, subject}
      );
      alert("user Created")
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
            placeholder="subject"
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
          onClick={ Newuser}
        >
          post new Data
        </button>
      </form>
    </div>
   </>
  );
};

export default Newpost;