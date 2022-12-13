import axios from 'axios';
import Login from './pages/Login/Login';
import Register from './pages/register/register';
import Studentpage from './pages/Studentpage/Studentpage';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import StudetDetail from './pages/StudentDetail/StudetDetail';
import Home from './pages/home/Home';
import Updateuser from './component/Updateuser';
import Make from './check/Make';
import Newpost from './component/Newpost';
import { useSelector } from 'react-redux';
const App = () => {

  const Accesstoken = useSelector(state=>state.user?.currentUser?.tokens?.access)
  const token = useSelector(state=>state.user?.currentUser?.tokens)


  return (
    <div>

      <Router>

        <Switch>



          <Route exact path={"/"} component={Home}>
    {token ? <Home/>: <Redirect to="/register"/>}
    </Route>


          <Route exact path="/update/:id">
          {Accesstoken ? <Updateuser/>: <Redirect to="/register"/>}

          </Route>

          <Route exact path="/newpost">
          {Accesstoken ? <Newpost/>: <Redirect to="/register"/>}
          </Route>

          <Route exact path="/register">
            {!Accesstoken ? <Register />: <Home/> } 
          </Route>

          <Route exact path="/student">
            <Studentpage />
          </Route>

          <Route exact path="/make">
            <Make />
          </Route>

          <Route exact path="/studentdetail/:id">
            <StudetDetail />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

        </Switch>
      </Router>
    </div>
  );
};

export default App;
