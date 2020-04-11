import React from 'react';
import classes from './Header.module.css'

const Header = () => {
  return (
    <div className = {classes.header}>
      <img src='https://cdn3.f-cdn.com//files/download/70016655/Logo%202.png'/>
      <div className={classes.header_info}>
        <a href='#'>Companies</a>
        <button>Log out</button>
      </div>
    </div>
  )
}

export default Header;