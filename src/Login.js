import React, { useState } from 'react'
import './login.css'
import {auth} from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[photo,setPhoto]=useState('');
    const dispatch=useDispatch();


    
    const register = ()=>{
        if (!name){
           return alert("Please Enter the full name")
        }

        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:photo,
            })
            .then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    photoUrl:photo,
                    displayName:name,
                    
                }))

            })
        }).catch(error=>alert(error));
    };


    const loginToApp =(e)=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                photoUrl:userAuth.user.photoURL,
            }))

        }).catch(error=>alert(error));





    };
    return (
    <div className='login'>
        <img src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2003.png"
        alt="logo" />

        <form>
            <input value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Full name (requried if regestering)' type="text" />
            <input value={photo} onChange={(e)=>{setPhoto(e.target.value)}} placeholder='PhotoURl' type="text" />
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='E-mail' type="email" />
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' type="password" />
            <button type="submit" onClick={loginToApp}>SignIn</button>
        </form>
        <p>Not a Member?{"  "}
        <span className='login__register' onClick={register}>Please Register</span></p>

    </div>
  )
}

export default Login