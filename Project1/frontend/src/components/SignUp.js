import React, { useState} from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import '../styles/Signup.css';
import Login from './Login';

import axios from 'axios';

function SignUp() {

    // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState();
  

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    
    //Prevent page reload
    event.preventDefault();

    var { username, password, firstname, lastname } = document.forms[0];

    let userInfo ={
        username: username.value,
        password: password.value,
        firstname: firstname.value,
        lastname : lastname.value,
        role: 'user'
    };


        axios.post(`http://localhost:3001/registeruser`,userInfo).then((response)=>{
            setIsSubmitted(true);

        })
    }

    const renderForm = (
        <div>
            <h1>Sign Up for an account</h1>

            <form id='signUpForm' onSubmit={handleSubmit}>
                <label for='firstname'>First Name</label>
                <br/>
                <input type='text' id='firstname' placeholder='Jane' required />
                <br/>

                <label for='lastname'>Last Name</label>
                <br/>
                <input type='text' id='lastname' placeholder='Doe' required/>
                <br/>
                <label for='username'>Username</label>
                <br/>
                <input type='email' id='username' placeholder='name@email.com' required/>
                <br/>
                <label for='password'>Password</label>
                <br/>
                <input type='password' id='password' placeholder='Password' required/>
                <br/>
                <label for='repassword'>Re-enter Password</label>
                <br/>
                <input type='password' id='repassword' placeholder='Re-enter Password'/>

                <br/><br/>
                    Already have an account? <Link to="/login">Login here!</Link>
                <br/><br/>
                <button id='signupBtn'>Register</button>
            </form>
        </div>
      );
    return(

    <div className="app">
      <div className="login-form">
        {isSubmitted ? 
                     <div>
                         <h1>User registration successful!</h1>
                         You may return to the <Link to="/login">login page</Link> and login.
                    </div>   
        : renderForm}
      </div>
    </div>
    );

}

export default SignUp;