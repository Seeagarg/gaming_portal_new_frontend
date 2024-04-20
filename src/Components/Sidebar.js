import React from 'react'
import classes from './Sidebar.module.css'
import SubLayout from './SubLayout'
import {useDispatch} from 'react-redux';
import { setCategory } from '../Slices/categorySlice';

const Sidebar = () => {

  const dispatch = useDispatch();


  return (
    <>
      <div className={classes.container}>
      <div className={classes.box}>
      <div className={classes.icon} onClick={()=>{dispatch(setCategory("All Games"))}}>
      <img src="/assets/all.png" alt="" className={classes.icon_img} />
      <p>All</p>
      </div>
      <div className={classes.icon} onClick={()=>{dispatch(setCategory("New"))}}>
      <img src="/assets/new.png" alt="" className={classes.icon_img} />
      <p>New</p>
      </div>
      <div className={classes.icon} onClick={()=>{dispatch(setCategory("Games"))}}>
      <img src="/assets/games.png" alt="" className={classes.icon_img} />
      <p>Games</p>
      </div>
      <div className={classes.icon} onClick={()=>{dispatch(setCategory("Quiz"))}}>
      <img src="/assets/quiz.png" alt="" className={classes.icon_img} />
      <p>Quizes</p>
      </div>
      <div className={classes.icon} onClick={()=>{dispatch(setCategory("Fantasy Sports"))}}>
      <img src="/assets/fantasy.png" alt="" className={classes.icon_img} />
      <p>Fantasy Sports</p>
      </div>
      <div className={classes.icon} onClick={()=>{dispatch(setCategory("Videos"))}}>
      <img src="/assets/video.png" alt="" className={classes.icon_img} />
      <p>Videos</p>
      </div>
     
      </div>
      </div>
    </>
  )
}

export default Sidebar
