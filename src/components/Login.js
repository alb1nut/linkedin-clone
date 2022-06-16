import React from 'react'
import'../styles/Login.css'

const Login = () => {

const register =()=>{

}

const loginToApp =()=>{}

  return (
    <div className='login'>
      <img  src='' alt='linkedin logo'/>

      <form>
        <input type="text" placeholder='Full name (required if registering)' />
        <input type="text" placeholder='Profile pic URl (optional)' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <button type='submit' onClick={loginToApp}>Sign In</button>
      </form>
      <p>Not a member? {" "}

        <span className='login__register' onClick={register}>Register Now</span>
      </p>
    </div>
  )
}

export default Login ;
