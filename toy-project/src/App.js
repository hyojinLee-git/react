
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

  const [name, setName]=useState('');
  //setName(name)
  const nameChange=(name)=>{
    setName(name)
  }

  return (
    <div className="App">
      <Router>
      <div>
        {/* <ul>
          <li>
            <Link to="/">login</Link>
          </li>
          <li>
            <Link to="/main">home</Link>
          </li>
        </ul>
         */}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/main" component={Home}/>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
