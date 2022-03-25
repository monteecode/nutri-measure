import React from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Registration from "./components/forms/Registration";
import Login from "./components/forms/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Registration />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
