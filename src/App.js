import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import {Login}  from "./components/Login";
import { Home } from "./components/Home";
import { AddProduct } from "./components/AddProduct";
//import { EditProduct } from "./components/EditProduct";
import { ModalExample1 } from "./components/EditModal";
import { GlobalProvider } from "./context/GlobalState";
import Logout from './components/Logout'
// import {Form} from './components/Form';
import {LoginPage} from './components/LoginPage';
// import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div >
      <GlobalProvider>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={() => <Home users={users} setUsers={setUsers} />} /> */}
            <Route exact path="/" component={LoginPage} />
            <Route  path="/home" component={Home} />
            <Route path="/add" component={AddProduct} />
            <Route path="/add" component={ModalExample1} />
            {/* <Route path="/edit/:id"  component={EditProduct} /> */}
            <Route path="/logout" component={Logout} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
