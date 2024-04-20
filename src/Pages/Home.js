import React,{useState,useEffect} from 'react'
import SubLayout from '../Components/SubLayout'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useSelector } from 'react-redux';
import { fetchDataFromBackend } from '../Services/api';
import categorySlice from '../Slices/categorySlice';
import classes from './Home.module.css'
import Sidebar from '../Components/Sidebar';
import {useNavigate} from 'react-router-dom';
import Layout from '../Components/Layout';

const Home = () => {

  const navigate = useNavigate();
    
//   const {open} = useSelector((state)=>state.sideBarSlice)
  const {category} = useSelector((state)=>state.categorySlice);

  const [arr,setArr] = useState([])
  const [newData,setNewData] = useState([]);

  console.log(category)

    const fetchData =async()=>{
      const data = await fetchDataFromBackend();
      // console.log(data.data);
      const Games = data.data;

      const arr_data = Games.filter((item)=>item.status == "new")
      setNewData(arr_data);

      if(category=="All Games"){
        setArr(Games);
      }
      else if(category == "New"){
        const arr = Games.filter((item)=>item.status == "new")
        setArr(arr);
      }
      else if(category == "Quiz"){
        const arr = Games.filter((item)=>item.category == "Quiz")
        setArr(arr);
      }
      else if(category == "Games"){
        const arr = Games.filter((item)=>item.category == "Games")
        setArr(arr);
      }
      else if(category == "Fantasy Sports"){
        const arr = Games.filter((item)=>item.category == "Fantasy Portal")
        setArr(arr);
      }
      else if(category == "Videos"){
        const arr = Games.filter((item)=>item.category == "Videos")
        setArr(arr);
      }
      
    }

    useEffect(()=>{
      fetchData();
    },[category])

    // console.log(handlePlay)
    const handlePlay=(id)=>{
      console.log(id)
      navigate(`/game/${id}`)
    }



  return (
    <>
    <Layout>
    <Navbar/>
    <Sidebar/>
    <SubLayout>
    <div className={classes.container}>



    {category=="All Games" &&
    <>
<div className={classes.title_div}><img src="/assets/new.png" alt="" className={classes.img} /><h1 className={classes.title}>New</h1></div>
    
    <div className={classes.games}>
    {
        newData.map((item,idx)=>(
            <div class={classes.card}>
  <div class={classes.card__border}></div>
  <div className={classes.card_container}>
   <img src={item.img_url} alt="" className={classes.game_img} />
  <span class={classes.card_title}>{item.game_name.slice(0,18)}</span>
  <button class={classes.button} onClick={()=>handlePlay(item.id)}>play</button>
  </div>
</div>
        ))
    }
   
    
    </div>
    <br /><br /><br /><br />
    </>

}


    
    <div className={classes.title_div}><img src={`${category == 'New' ? `/assets/new.png`: category == 'All Games' ? `/assets/all.png`:category == 'Fantasy Sports' ? `/assets/fantasy.png`: category == 'Games' ? `/assets/games.png`:category == 'Quiz' ? `/assets/quiz.png`: category == 'Videos' ? `/assets/video.png` :""}`} alt="" className={classes.img} /><h1 className={classes.title}>{category}</h1></div>
    
    <div className={classes.games}>
    {
        arr.map((item,idx)=>(
            <div class={classes.card}>
  <div class={classes.card__border}></div>
  <div className={classes.card_container}>
   <img src={item.img_url} alt="" className={classes.game_img} />
  <span class={classes.card_title}>{item.game_name.slice(0,18)}</span>

  <button class={classes.button} onClick={()=>handlePlay(item.id)}>play</button>
  </div>
</div>
        ))
    }
   
    
    </div>

    </div>
    </SubLayout>
    <Footer/>
    </Layout>
    </>
  )
}

export default Home
