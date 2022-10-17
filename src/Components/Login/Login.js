import React from 'react';
import {useContext, useState} from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';

import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const [password ,setPassword] = useState('');
  const [email ,setEmail] = useState('');
  const {firebase} = useContext(FirebaseContext)

  const handleSubmit =(e)=>{  
    e.preventDefault()
  
  firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{

    alert('Logged In')
  }).catch((error)=>{

    alert(error.message)
  })

  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
