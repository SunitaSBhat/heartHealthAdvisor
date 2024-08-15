import React from 'react'
import "./create.css";
export default function create() {
  return (
    <div>
      <form className="form">
        <h2>Signup form for an account</h2>
        <label>Email</label>
        <input type="text" placeholder='Enter your email address'></input>
        <label>Password</label>
        <input type="text" placeholder='Enter your password'></input>
        <button>Create an account</button>
      </form>
      <p>Already have an account <a href="">Login</a></p>
    </div>
  )
}
