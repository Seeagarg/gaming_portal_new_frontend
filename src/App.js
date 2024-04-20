import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Sidebar from './Components/Sidebar';
import GameDetails from './Pages/GameDetails';

function App() {
  return (
    <>
    {/* <Sidebar/> */}
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/game/:gameId" element={<GameDetails/>}/>
    </Routes>
    </>
  );
}

export default App;
