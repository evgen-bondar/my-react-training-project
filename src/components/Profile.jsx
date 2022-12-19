import React from 'react';
import classes from './Profile.module.css'
const Profile = () => {
    return <div className={classes.profile}>
    <div>
    {/* <img src={require('./img/profile.jpg').default} alt='mops'/> */}
    <img src="https://onbog.com/wp-content/uploads/2019/08/mountain-summit-landscape-horizon-sky-stars-b470-1200x480.jpg"alt=""></img>
    </div>
    <div>
      ava + description
      {/* <img src='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'></img> */}
    </div>
    <div>
      my posts
      <div>new post</div>
    </div>
    <div>
      <div>post 1</div>
      <div>post 2</div>
    </div>
  </div>
}

export default Profile