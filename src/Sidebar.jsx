import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Sidebar() {

    const user = useSelector(selectUser)

    const recent = (topic)=>(
    <div className='sidebar__recentItems'>
        <span className="hashtag">#</span>
        <p>{topic}</p>
    </div>)

  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1631631480669-535cc43f2327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" />
            <Avatar src={user.photoUrl} className="sidebar__avatar">
                {user.email[0]}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you.?</p>
                <p className="sidebar__statnum">2,123</p>
            </div>
            <div className="sidebar__stat">
                <p>Who viewed your posts.?</p>
                <p className="sidebar__statnum">2,223</p>
            </div>
        </div>
        <div className="sidebar__bottom">
                <p>Recent</p>
                {recent('ReactJS')}
                {recent('Python')}
                {recent('HTML')}
                {recent('Babloo')}
                {recent('SUP')}
        </div>


    </div>
  )
}

export default Sidebar