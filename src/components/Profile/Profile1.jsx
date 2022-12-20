import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
    return <div className={classes.profile}>
    <div>   
    <img src="https://onbog.com/wp-content/uploads/2019/08/mountain-summit-landscape-horizon-sky-stars-b470-1200x480.jpg"alt=""></img>
    </div>
    <div>
      ava + description     
    </div>
       <MyPosts />
  </div>
}

export default Profile