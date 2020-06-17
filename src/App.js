import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { GlobalProvider } from "./context/GlobalState";
import { LoginPage } from "./components/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/home" component={Home} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
