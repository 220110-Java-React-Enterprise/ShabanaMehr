import React, {useState} from 'react';
import '../styles/Login.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Signup from './SignUp';

import axios from 'axios';

function Login() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState();
    const [isAdminUser, setIsAdminUser] = useState();
  
    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };
  
    const handleSubmit = (event) => {
      
      event.preventDefault();
  
      var { uname, pass } = document.forms[0];
      let userData = null;
      let roleData = null;

      let username = uname.value;
    let password = pass.value;

      console.log(username, password);
    
    const baseURL =`http://localhost:3001/username/${username.value}`;
  
    axios.get(baseURL).then((response) => {
          userData=response.data[0];
          console.log(userData);
      if (userData) {
        if (userData.password !== password.value) {
          setErrorMessages({ name: "password", message: errors.password });
        } else {
            axios.get(`http://localhost:3001/role/${userData.role}`).then((res)=>{
                  roleData= res.data[0];
                  if(roleData){
                      if(roleData.roletype == 'admin'){
                          setIsAdminUser(true);
                      }
                  }
                  
            })
           
            setIsSubmitted(true);
        }
      } else {
        setErrorMessages({ name: "username", message: errors.username });
      }
      });
    };
  
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
    );
  
    const renderForm = (
      <div>
              <h1>Login or Sign Up</h1>
  
              <form id='loginForm' onSubmit={handleSubmit}>
                  <label for='uname'>Username</label>
                  <br/>
                  <input type='email' id='uname' placeholder='name@email.com' required/>
                  {renderErrorMessage("uname")}
                  <br/>
                  <label for='pass'>Password</label>
                  <br/>
                  <input type='password' id='pass' placeholder='Password' required/>
                  {renderErrorMessage("pass")}
                  <br/><br/>
                      Don't have an account? <Link to='/signup'>Sign up today!</Link>
                  <br/><br/>
                  <button className='loginBtn'>Login</button>
              </form>
          </div>
    );
  
    return (
      <div className="app">
        <div className="login-form">
          {isSubmitted ? 
                        (isAdminUser ? <h1>Admin user is successfully logged in </h1> : <h1>User is successfully logged in</h1>)  
          : renderForm}
        </div>
      </div>
    );
  }
  
  export default Login;