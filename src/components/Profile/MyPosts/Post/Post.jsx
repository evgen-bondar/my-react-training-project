import React from 'react';
import classes from './Post.module.css'
const Post = () => {
  return (
    <div className={classes.item}>
      <img src='https://klike.net/uploads/posts/2019-03/1551511793_14.jpg'></img>
      post 1
      <span> like</span>
    </div>

  )
}

export default Post;