import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import {logout, selectUser} from './features/userSlice';
import { auth } from './firebase';



function Heading() {

  const dispatch=useDispatch();
  const user = useSelector(selectUser);

  const loggedout=()=>{
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div class="header">
    <div className='header__left'>
    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="">
    </img>
    <div className='header__search'>
    <SearchIcon />
    <input type="text" />

    </div>

    </div>
        <div className='header__right'>
        <HeaderOption title="Home"
        Icon={HomeIcon} />
        <HeaderOption title="Network" 
        Icon={PeopleIcon}/>
        <HeaderOption title="Jobs" 
        Icon={WorkIcon}/>
        <HeaderOption title="Message" 
        Icon={MessageIcon}/>
        <HeaderOption title="Notification" 
        Icon={NotificationsIcon}/>
        <HeaderOption avatar={true} 
        title="Me"
        onClick={loggedout} />

        </div>
    </div>
  )
}

export default Heading