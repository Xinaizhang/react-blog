// Login.jsx
import {
  Link,
} from "react-router-dom";
import React from 'react'

const Login = () => {
  return (
    <div className="auth">
        <h1>Login</h1>
        <form>
            <input required type="text" placeholder='username' />
            <input required type="text" placeholder='password' />
            <button>Login</button>
            <p>This is an error!</p>
            <span>Don't you have an account? <Link to="/register">Register</Link></span>
        </form>
    </div>
  )
}

export default Login