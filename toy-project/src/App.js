
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";



function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route path="/login">
              <Login/>
          </Route>
          <Route path="/">
              <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
