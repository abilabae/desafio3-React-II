import React from 'react'
import { useNavigate } from 'react-router-dom'

const Pokemon = ({ pokem }) => {

  const navigate = useNavigate()


  const HandleClick = () => {
    navigate(`pokemon/${pokem.id}`)
  }



  return (
    
      <div className="card" style={{ width: "18rem" }}>
        <img src={pokem.sprites.front_shiny} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{pokem.name}</h5>
          <button className='btn btn-danger d-grid gap-2 col-6 mx-auto' onClick={HandleClick}>Detalles</button>
        </div>
      </div>


    
  )


}

export default Pokemon
