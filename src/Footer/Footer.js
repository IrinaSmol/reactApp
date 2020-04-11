import React from 'react';
import classes from './Footer.module.css'



const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerContacts}>
        <p>Contacts:</p>
        <p>City: </p>
        <p>Street:</p>
        <p>Tel: 098-111-22-33</p>
      </div>
      <div className={classes.footerCopyrights}>
        <p>Made in ...</p>
        <p>Copyrights 2020</p>
      </div>
    </div>
  )
}

export default Footer;
