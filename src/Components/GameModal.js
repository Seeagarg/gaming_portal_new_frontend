import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Layout from './Layout'
import classes from './GameModal.module.css'
import {useDispatch} from 'react-redux'
import { setView } from '../Slices/viewSlice';
// import Layout from './Layout.module.css'

const GameModal = ({open,close}) => {

    // const style = {
    //     position: 'absolute',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
    //     width: 400,
    //     bgcolor: 'background.paper',
    //     border: '2px solid #000',
    //     boxShadow: 24,
    //     p: 4,
    //   };

      const dispatch = useDispatch();

      const handleMobileClick=()=>{
        close()
        dispatch(setView("MobileView"))
        window.scrollTo(0,0);
      }

      const handleDesktopClick=()=>{
        close()
        dispatch(setView("DesktopView"))
        window.scrollTo(0,0);
      }


  return (
    <>
    {

    open &&
   
       <Modal
        open={open}
        // onClose={()=>close()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={classes.main}
      >
        <Box  className={classes.card}>
  <div class={classes.card__border}></div>
  <div class={classes.card_title__container}>
    <span class={classes.card_title}>Do You Want to Play in which view?</span>
   
  </div>
  
  <button class={classes.button} onClick={handleMobileClick}>Mobile View</button>
  <button class={classes.button} onClick={handleDesktopClick}>Desktop View</button>
 

        </Box>
      </Modal>
 
    }
    </>
  )
}

export default GameModal
