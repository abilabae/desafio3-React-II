import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AppRouter from './components/AppRouter'
import { MyContext } from './context/MyContext'

function App() {
  const [infoPokemon, setInfoPokemon] = useState([])


  //** Llamar Api */


  const getPokemon = async (cantidad = 151) => {
    const url = 'https://pokeapi.co/api/v2/pokemon'
    const res = await fetch(`${url}?limit=${cantidad}&offset=0`)
    const data = await res.json()

    const promises = data.results.map(async (poke) => {
    const res = await fetch(poke.url);
    const data = await res.json();
   
    
    return data;

    });

    const data2= await Promise.all(promises)
    setInfoPokemon(data2)
  

  }

  useEffect(() => {
    getPokemon()
  }, [])


  return (
    <div>

      <MyContext.Provider value={{ infoPokemon, setInfoPokemon }}>
        <Navbar />
        <AppRouter />
      </MyContext.Provider>


    </div>
  )
}

export default App
