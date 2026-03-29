
import { Suspense } from 'react';
import './App.css'
import Banner from './components/Banner/Banner'
import NavBar from './components/NavBar/NavBar'
import Players from './components/Players/Players';


const fetchPlayers = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {

  const playersPromies = fetchPlayers();

  return (
   <>
    <NavBar></NavBar>
    <Banner></Banner>
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <Players playersPromies={playersPromies}></Players>
    </Suspense>
   
   </>
  )
}

export default App
