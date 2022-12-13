import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Nvabar from '../../component/Nvabar';
import {deleteuserSuccess} from '../../redux/crudUser';
import {axiosInstance} from '../../RequestMethod';
import {refreshToken} from '../../RequestMethod';
import Studentpage from '../Studentpage/Studentpage';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {
  getProductfaliure,
  getProductStart,
  getProductSuccess,
} from '../../redux/productRedux';
import './home.css';
const Home = () => {
  const dispatch = useDispatch ();
  const dataaa = useSelector (state => state.product.products);

  const [data, setData] = useState ([]);
  const [error, setError] = useState (null);
  const [query, setQuery] = useState ('');
  const keys = ['name', 'rollno', 'subject'];

  useEffect (() => {
    setData (dataaa);
  }, []);

  const forGetData = () => {
    setData (dataaa);
  };

  useEffect (
    () => {
      forGetData ();
    },
    [dataaa]
  );
  const searchHere = () => {
    setData (data => data.filter (item => item['name'].includes (query)));
  };

  useEffect (
    () => {
      if (query === '') {
        setData (dataaa);
      }
    },
    [query]
  );

  const submitHnadler = e => {
    e.preventDefault ();
  };

  const sortHere = () => {
    const sortedData = data.sort ((a, b) => {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    });
    alert ('hello');
  };

  const fetchData = async () => {
    dispatch (getProductStart ());
    try {
      const response = await axiosInstance.get (
        'http://127.0.0.1:8000/student',
        {refreshToken}
      );
      dispatch (getProductSuccess (response.data));
      console.log (response.data);
    } catch (error) {
      dispatch (getProductfaliure ());

      setError (error);
    }
  };

  useEffect (() => {
    fetchData ();
  }, []);

  const deleteData = async id => {
    const res = await axiosInstance.delete (
      `http://127.0.0.1:8000/student/${id}`
    );
    window.location.reload ('/');
    dispatch (deleteuserSuccess (id));
  };

  return (
    <div>
      <Nvabar />
      <form onSubmit={submitHnadler}>
        <div
          class="form-row mt-3 ml-8"
          style={{margin: 'auto', width: '500px'}}
        >
          <div class="col-5">
            <input
              type="text"
              className="form-control"
              placeholder="search by your name"
              onChange={e => setQuery (e.target.value.toLowerCase ())}
            />
          </div>
          <button onClick={searchHere}>search</button>
        </div>
      </form>

      <div className="container mt-5">
        <div className="row ">
          <Studentpage data={data} deleteData={deleteData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
