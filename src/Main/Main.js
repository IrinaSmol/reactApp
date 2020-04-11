import React from 'react';
import classes from './Main.module.css'
import MyPost from './MyPosts/MyPosts';

const Main = () => {
  return (
    <div className = {classes.main_content}>
      <div className={classes.profile_info}>
      <MyPost/>
      </div>
    </div>
  )
}

export default Main;