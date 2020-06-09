import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login1 from "./components/Login1";
import { Home } from "./components/Home";
import { AddProduct } from "./components/AddProduct";
import { EditProduct } from "./components/EditProduct";
import { GlobalProvider } from "./context/GlobalState";
import Logout from './components/Logout'

import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div >
      <GlobalProvider>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={() => <Home users={users} setUsers={setUsers} />} /> */}
            <Route exact path="/" component={Login1} />
            <Route  path="/home" component={Home} />
            <Route path="/add" component={AddProduct} />
            <Route path="/edit/:id" component={EditProduct} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
