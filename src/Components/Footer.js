import React from 'react'
import classes from './Footer.module.css'
import {useDispatch} from 'react-redux';
import { setCategory } from '../Slices/categorySlice';

const Footer = () => {

  const dispatch = useDispatch();

  return (
    <div className={classes.container}>
    <div className={classes.sub_container}>
   <div className={classes.buttons}>
   <button className={classes.button} onClick={()=>{dispatch(setCategory("All Games"))}}>
   <img src="/assets/all.png" alt="" />
    All 
    </button>
    <button className={classes.button} onClick={()=>{dispatch(setCategory("New"))}}>
    <img src="/assets/new.png" alt="" />
  New
    </button>
    <button className={classes.button} onClick={()=>{dispatch(setCategory("Quiz"))}}>
    <img src="/assets/quiz.png" alt="" />
   Quiz
    </button>
    <button className={classes.button} onClick={()=>{dispatch(setCategory("Fantasy Sports"))}}>
    <img src="/assets/fantasy.png" alt="" />
   Fantasy
    </button>
    <button className={classes.button} onClick={()=>{dispatch(setCategory("Games"))}}>
    <img src="/assets/games.png" alt="" />
   Games
    </button>
    <button className={classes.button} onClick={()=>{dispatch(setCategory("Videos"))}}>
    <img src="/assets/video.png" alt="" />
   Videos
    </button>
    
   </div>
    </div>
    </div>
  )
}

export default Footer
