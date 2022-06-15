import { Avatar } from '@mui/material'
import React from 'react'
import '../styles/SideBar.css'

const SideBar = () => {

    // function to repeatrecent items hashs instead of using a component
 const recentitem =(topic) =>(
    <div className='sidebar__recentItem'>
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>
 )

  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1655255170695-dbd0495fb59e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            <Avatar className='sidebar__avatar' />
            <h2>Albert Dovlo</h2>
            <h4>albert@gmail.com</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">
                    2,450
                </p>
            </div>
            <div className="sidebar__stat">
            <p>Views on Post</p>
                <p className="sidebar__statNumber">
                    2,100
                </p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentitem('reactjs')}
            {recentitem('frontend')}
            {recentitem('programming')}
            {recentitem('tech')}
            {recentitem('startups')}
            {recentitem('react-devs')}
        </div>

    </div>
  )
}

export default SideBar
