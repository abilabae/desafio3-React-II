import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import Pokemon from './Pokemon'
import { useNavigate } from 'react-router-dom'

const Pokemones = () => {

  const { infoPokemon, setInfoPokemon } = useContext(MyContext)


  return (
    <div className='container mt-5'>
      <div className='row d-flex justify-content-between gap-3'>
        {infoPokemon.map(pokem => <Pokemon key={pokem.id} pokem={pokem} />)}
      </div>

    </div>

  )
}

export default Pokemones
