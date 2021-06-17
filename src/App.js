import './App.css';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Header/>
        <ul>
          <li>
            <Link to="login">Login</Link>
          </li>
        </ul>
        <Switch>
        <Route path="/home">
            <Home />
          </Route>
          <Route path="/orders">
          <Login/>
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
