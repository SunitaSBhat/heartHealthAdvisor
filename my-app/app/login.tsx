import React from 'react'
import "./create.css";
export default function create() {
  return (
    <div>
      <form className="form">
        <h2>Please login to continue</h2>
        <label>Email</label>
        <input type="text" placeholder='Enter your email address'></input>
        <label>Password</label>
        <input type="text" placeholder='Enter your password'></input>
        <button>Create an account</button>
      </form>
      <p>No account yet<a href="">Create one</a></p>
    </div>
  )
}