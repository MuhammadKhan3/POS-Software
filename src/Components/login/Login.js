import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css'
function Login() {
    return (
  <div className="form-container border border-primary rounded">
    <form>
      <fieldset>
      <center>
         <legend className="text-primary"><b>Login Form</b></legend>
      </center>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
       <Link to='/Signup' className="signupbtn"><button type="submit" className="btn btn-primary">Create Account Form</button></Link>
      </fieldset>
    </form>
  </div>)
}
export default Login;
