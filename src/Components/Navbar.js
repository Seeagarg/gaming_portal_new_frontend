import React from 'react'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.container} >
    <div className={classes.box}>
    <div className={classes.logo}>
    <img src="/assets/logo.png" alt="" className={classes.logo} />
    </div>
    <div className={classes.sidebar}>
    <h2>Gaming Galaxy</h2>
    </div>
    </div>
    </div>
  )
}

export default Navbar
