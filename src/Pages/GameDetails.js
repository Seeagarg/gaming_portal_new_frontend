import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import classes from './GameDetails.module.css'
import {fetchDataFromBackend} from '../Services/api'
import GameModal from '../Components/GameModal';
import {useSelector} from 'react-redux';

const GameDetails = () => {

  const {view} = useSelector((state)=>state.viewSlice)
  // console.log(view)

    const params = useParams();
    const [url,setUrl] = useState();
    const [open,setOpen] = useState(true)
    console.log(open)


    const handleClose=()=>{
        setOpen(false);
    }


    const fetchData =async()=>{
        const data = await fetchDataFromBackend();
        // console.log(data.data);
        const Games = data.data;
        // console.log(Games)

        const game = Games.filter((item)=>item.id == params.gameId)
        console.log(game)
            setUrl(game[0].game_url)
      }
  
      useEffect(()=>{
        fetchData();
        console.log(url)
      })

    
  return (
    <>
    <div className={classes.main}>
    <div className={`${view == "DesktopView" ? classes.container : classes.mobile_container}`}>
    <Link to="/" className={classes.close}>  
    <button className={classes.button}>
    close
    </button>
    </Link>
    {
        !open &&
        <>
        <iframe src={url} frameborder="0" className={`${classes.frame}`}></iframe>
    </>
    }
    </div>
    
    </div>
    <GameModal open={open} close={handleClose}/>
    </>
  )
}

export default GameDetails
