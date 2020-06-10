import React, { useState } from 'react';
// import { Link , Redirect } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'
import './Login.css'; 



export const Login = (props) => {
  const [username, setUsername] = useState('TestUser');
  const [password, setPassword] = useState('Aa1@@');
  // const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  // const [helperText, setHelperText] = useState('');
  // const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'TestUser' && password === 'Aa1@@') {
      return props.history.push("/home");
      // return  <Redirect to='/home' />
    } else {
      // setError(true);
      // setHelperText('Incorrect username or password')
    }
  };

	return (
		<>
			  <div className="d-flex justify-content-center custom-login-wrp">
              <div className="card">
                <div className="card-header">
                  <h3>Sign In</h3>
               
                </div>
                <div className="card-body">
                  <form onSubmit={handleLogin}>
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
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
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
                      value={password}
                        onChange={(e)=>setPassword(e.target.value)}
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
	)
}


