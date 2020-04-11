import React from 'react';
import classes from './Navbar.module.css';
import { Route, Router } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <ul className={classes.list}>
        {/*<Router>
          <Route />
          <Route />
          <Route />
          <Route />
        </Router>*/}
        <li><a href='/profile'>Home</a></li>
        <li><a href='/messages'>Messages</a></li>
        <li><a href='/news'>News</a></li>
        <li><a href='/settings'>Settings</a></li>
      </ul>
    </div>
  )
}

export default Navbar;