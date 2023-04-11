import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MyContext } from '../context/MyContext'

const Detalles = () => {


  const { infoPokemon } = useContext(MyContext)

  const { id } = useParams();
  const pokeDetalle = infoPokemon.find(item => item.id == id)


  return (
    
    <div className='container d-flex'>
      <h1>{pokeDetalle.name}</h1>     

      <div className='container row d-flex justify-content gap-3 mt-5'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={pokeDetalle.sprites.front_shiny} className="card-img-top" alt="..." />
        </div>
        <div className="card row" style={{ width: "18rem" }}>
          <h3>Detalles</h3>
          <p>Base experience: {pokeDetalle.base_experience}</p>
          <p>Weight: {pokeDetalle.weight}</p>
        </div>

      </div>

    </div>








  )
}

export default Detalles
