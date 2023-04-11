import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

const Home = () => {
const {infoPokemon, setInfoPokemon}=useContext(MyContext)


  return (
    <div className='container mx-auto d-block'>
      <div className='mx-auto d-block text-center'>
        <img src="https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/6420b-pikachu-sentado-png.png?resize=450%2C450&ssl=1" alt="pikachu" />
      </div>
      <div className='container text-center'>
        <h1>Bienvenido a tu página Pokemon!</h1>
      </div>
      
    </div>
  )
}

export default Home
