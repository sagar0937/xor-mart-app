import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Login} from "./components/Login";
import { Home } from "./components/Home";
import { AddProduct } from "./components/AddProduct";
import { EditProduct } from "./components/EditProduct";
import { GlobalProvider } from "./context/GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div >
      <GlobalProvider>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={() => <Home users={users} setUsers={setUsers} />} /> */}
            <Route exact path="/" component={Login} />
            <Route  path="/home" component={Home} />
            <Route path="/add" component={AddProduct} />
            <Route path="/edit/:id" component={EditProduct} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
