import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
function Signup() {
    return (<div className="form-container border border-primary rounded">
    <form>
      <fieldset>
      <center>
         <legend className="text-primary"><b>Signup Form</b></legend>
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
        <button type="submit" className="btn btn-primary">Signup</button>
        <Link to="/Login" className="logbtn"><button type="submit" className="btn btn-primary">Login Form</button></Link>
    </fieldset>
    </form>
  </div>)
}

export default Signup
