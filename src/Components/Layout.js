import React from 'react'
import classes from './Layout.module.css'
import Sidebar from './Sidebar'
// import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div className={classes.container}>
      {children}
      {/* <Sidebar/> */}
    </div>
  )
}

export default Layout
