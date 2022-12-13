import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
const Check = ({data, deleteData}) => {


  return (
<>
{data.map ((user) => {
          return (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">
                   Subject: {user.subject}
                  </p>
  <div className="col-3 d-flex align-items-start">
    <button>
      <Link to={`/studentdetail/${user.id}`}>View Detail</Link>
    </button>
  </div>
  <div className="col-3">
    <button className="btn btn-secondary">
      <Link to={`/studentdetail/${user.id}`}>Edit</Link>
    </button>
  </div>
  <div className="col-md-3">
    <button className="btn btn-danger" onClick={()=>deleteData(user.id)}>Delete</button>
  </div>
</div>
                </div>
              </div>
          );
        })}
</>
  );
};

export default Check;