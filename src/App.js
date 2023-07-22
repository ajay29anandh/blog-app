import Topbar from "./topbar/TopBar";
import Homepage from "./components/header/pages/home/home";
import Single from "./components/header/pages/single/Single";
import Write from "./components/header/pages/write/write";
import Settings from "./components/header/pages/settings/settings";
import Login from "./components/header/pages/login/login";
import Register from "./components/header/pages/register/register";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
      </Switch>
    </Router>

  );
}

export default App;