import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import { Routes, Route } from "react-router-dom";
// import { SignUp } from './components/SignUp';
// import { Login } from './components/Login';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedPath from './components/ProtectedPath';

export default function App(){
    return (
      <AuthContextProvider>
      <Routes>
      {/* <Route path="" element={<Login />}/>
      <Route path="/SignUp" element={<SignUp/>}/> */}
      <Route path="/" element={
      <ProtectedPath>
      <Main />
      </ProtectedPath>
      }/>
      
     
      </Routes>
      </AuthContextProvider>
 
      
    
)}
