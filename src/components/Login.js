import React, { useState } from 'react';
import kaku from "../logoImage/kaku.png"
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/Main')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };
  return (
    <div className='body-login'>
      
      <div className="signup">
      
      <div className='form' >
      <div className='kaku-logo'>
  <img src={kaku} alt="logo" className="logo-sign"/>
  </div>
      <form className='form-main' onSubmit={handleSubmit}>
        <input className='border p-3' onChange={(e) => setEmail(e.target.value)} type='email' placeholder="Email..."/>
        <input className='border p-3' onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
        <button className='sign-btn'>Sign In</button>
        <p className='already'> Don't have an account yet?
          <Link to='/signup'>
            <span className="already-sign"><em>Sign up</em></span>
          </Link>
        </p>
       </form>
       </div>
    </div>
    </div>
  )
}