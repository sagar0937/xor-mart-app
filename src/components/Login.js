import React, { useState, useEffect } from 'react';
import { Link , Redirect } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'
import './Login.css'; 



export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [helperText, setHelperText] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'AA' && password === 'AAA') {
      return  <Redirect to='/home' />
    } else {
      setError(true);
      setHelperText('Incorrect username or password')
    }
  };

	return (
		<>
			  <div className="d-flex justify-content-center h-100">
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
			{/* <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form> */}
		</>
	)
}

//  class Login1 extends Component {
//     render() {
//         return (
//           <>
// 	  <div class="d-flex justify-content-center h-100">
//               <div class="card">
//                 <div class="card-header">
//                   <h3>Sign In</h3>
//                   <div class="d-flex justify-content-end social_icon">
//                     <span>
//                       <i class="fab fa-facebook-square"></i>
//                     </span>
//                     <span>
//                       <i class="fab fa-google-plus-square"></i>
//                     </span>
//                     <span>
//                       <i class="fab fa-twitter-square"></i>
//                     </span>
//                   </div>
//                 </div>
//                 <div class="card-body">
//                   <form>
//                     <div class="input-group form-group">
//                       <div class="input-group-prepend">
//                         <span class="input-group-text">
//                           <i class="fas fa-user"></i>
//                         </span>
//                       </div>
//                       <input
//                         type="text"
//                         class="form-control"
//                         placeholder="username"
//                       />
//                     </div>
//                     <div class="input-group form-group">
//                       <div class="input-group-prepend">
//                         <span class="input-group-text">
//                           <i class="fas fa-key"></i>
//                         </span>
//                       </div>
//                       <input
//                         type="password"
//                         class="form-control"
//                         placeholder="password"
//                       />
//                     </div>
//                     <div class="row align-items-center remember">
//                       <input type="checkbox" />
//                       Remember Me
//                     </div>
//                     <div class="form-group">
//                       <input
//                         type="submit"
//                         value="Login"
//                         class="btn float-right login_btn"
//                       />
//                     </div>
//                   </form>
//                 </div>
//                 <div class="card-footer">
//                   <div class="d-flex justify-content-center links">
//                     Don't have an account?<a href="#">Sign Up</a>
//                   </div>
//                   <div class="d-flex justify-content-center">
//                     <a href="#">Forgot your password?</a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//         );
//     }
// }

