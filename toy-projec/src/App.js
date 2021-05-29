import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";

function App() {
  const [userName, setUserName]=useState('');
  const onLogin=(userName)=>{
    setUserName(userName)
  }
  console.log(userName)

  return (
    <div className="App">
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/">home</Link>
          </li>
        </ul>
         
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.
        */}
        <Switch>
          <Route exact path="/login">
            <Login onLogin={onLogin}/>
          </Route>
          <Route exact path="/">
            <Home userName={userName}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
