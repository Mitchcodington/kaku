import { Link, useNavigate } from 'react-router-dom';
import kaku from "../logoImage/kaku.png"
import { UserAuth } from '../context/AuthContext';
import React , {useState} from 'react';
export const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/Main')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    
    <div className="signup">
      
      <div className='form' >
      <div className='kaku-logo'>
  <img src={kaku} alt="logo" className="logo-sign"/>
  </div>
       
       <form  className='form-main' onSubmit={handleSubmit}>
       
        <input onChange={(e) => setEmail(e.target.value)}
            className='border p-3'
            type='email' placeholder="Email..."/>
        <input  onChange={(e) => setPassword(e.target.value)}
            className='border p-3'
            type='password' placeholder="Password"/>
        
        
        <button className='sign-btn'> Sign Up</button>
        <p className='already'>Already have an account? 
        <Link style={{textDecoration: 'none',"cursor" : "pointer",color:"#635fc7"}} to="/">
          <span className='already-sign'><em>Sign In</em></span>
        </Link></p>
       </form>
       </div>
        </div>
  )
}