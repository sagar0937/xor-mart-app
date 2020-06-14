import React from "react";
import { Formik } from "formik";
//import { Link , Redirect,useHistory  } from 'react-router-dom';
// import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import 'font-awesome/css/font-awesome.min.css'
import './Validate.css'
import './Login.css'; 


 export const ValidatedLoginForm = (props) => (
    
  <Formik
    initialValues={{ username: "", password: "" }}
    
    onSubmit={(values, { setSubmitting }) => {
        console.log(values)
        console.log(props)
    //   setTimeout(() => {
    //     console.log("Logging in", values);
    //     //return <Redirect to='/home' />
    //     //return props.history.push('/home')
    //     //setSubmitting(false);
    //   }, 500);
    localStorage.setItem('username',values.username)
     return props.name.push('/home')
   

    }}
    //********Handling validation messages yourself*******/
    // validate={values => {
    //   let errors = {};
    //   if (!values.email) {
    //     errors.email = "Required";
    //   } else if (!EmailValidator.validate(values.email)) {
    //     errors.email = "Invalid email address";
    //   }

    //   const passwordRegex = /(?=.*[0-9])/;
    //   if (!values.password) {
    //     errors.password = "Required";
    //   } else if (values.password.length < 8) {
    //     errors.password = "Password must be 8 characters long.";
    //   } else if (!passwordRegex.test(values.password)) {
    //     errors.password = "Invalida password. Must contain one number";
    //   }

    //   return errors;
    // }}
    //********Using Yum for validation********/

    validationSchema={Yup.object().shape({
        username: Yup.string()
       
        .required("No Username provided"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 6 chars minimum.")
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/, "Password must contain atleast small,capital letter and special symbol.")
        //let pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
          <>
        <div className="d-flex justify-content-center custom-login-wrp">
        <div className="card-login">
          <div className="card-header">
            <h3>Sign In</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <input
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-control ${errors.username} && ${touched.username} && "error"`}
                />
              </div>
              {errors.username && touched.username && (
            <div className="input-feedback">{errors.username}</div>
          )}
              {/* {errors.username && <p className="error">{errors.username}</p>} */}
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-key"></i>
                  </span>
                </div>
                <input
                  //     type="password"
                  //     className="form-control"
                  //     placeholder="password"
                  //     value={values.password}
                  //   onChange={handleChange}
                  name="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={` form-control ${errors.password} && ${touched.password} && "error"`}
                />
              </div>
              {/* {errors.password && <p className="error">{errors.password}</p>} */}
              {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}

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
    }}
  </Formik>
);


