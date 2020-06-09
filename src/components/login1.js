import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "./Login.css";

class Login1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      submitted: false,
      error: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    const { username, password, submitted } = this.state;

    if (submitted === true) {
      window.location.href = "/home";
    }

    return (
      <>
        {/* <form name="form" class="container1" onSubmit={this.handleSubmit}>
                 

                    <div class="form-group custom-form-group-login">
						<input type="text"  className="form-control custom-input-box" name="username" placeholder="Username" value={username} onChange={this.handleChange} placeholder="Username"/>
                       
                    </div>
                
                    <div class="form-group custom-form-group-login">
						<input type="password"  className="form-control custom-input-box" name="password" value={password} onChange={this.handleChange}  placeholder="Password"/>
                       
                    </div>

                    <button type="submit" class="btn login">LOGIN</button>
                    <div class="forget-pass">Forgot Username / Password?</div>
                   
                </form> */}

        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-block login_btn"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username === "ABC" && password === "ABC") {
      this.setState({ submitted: true });
      localStorage.setItem("token", "ewfdfdfdfdsfsdfsdfdsfds");
      return <Redirect to="/home" />;
      //this.props.history.push('/home')
    } else {
      // login check with the API

      fetch("http://localhost:3000/mockjson/dblist.json")
        .then((response) => response.json())
        .then(
          // handle the result
          (result) => {
            alert(result.responseContent);
          },
          // Handle error
          (error) => {
            alert("error");
          }
        );
    }
  }
}

export default Login1;
