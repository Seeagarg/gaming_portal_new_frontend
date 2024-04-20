import React from 'react'
import classes from './SubLayout.module.css'

const SubLayout = ({children}) => {
  return (
    <div className={classes.container}>
    <div className={classes.box}>
    {children}
    </div>
    </div>
  )
}

export default SubLayout
