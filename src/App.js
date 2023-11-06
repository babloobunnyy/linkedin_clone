import React, { useEffect } from 'react';
import './App.css';
import Heading from './Heading';
import Sidebar from './Sidebar';
import Login from './Login';
import Feed from './Feed';
import Widgets from './Widgets';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';


function App() {
  const user = useSelector(selectUser);
  const dispatch=useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        //loggedin
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoUrl:userAuth.photoURL,
        }))
      }else{
        //loggedout
        dispatch(logout());
      }
    })
  },[])


  return (
    <div className="app">
    
      {/* header */}
      <Heading />

      {!user?<Login/>:(  
        <div className="app__body">
          <Sidebar />
          {/* feed */}
          <Feed />
          {/* wid */}
          <Widgets />

        </div>)
        }
       
      
    </div>
  );
}

export default App;
