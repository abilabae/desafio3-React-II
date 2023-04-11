import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Pokemones from '../pages/Pokemones'
import Detalles from '../pages/Detalles'


const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="pokemones" element={<Pokemones />}></Route>
                <Route path="pokemones/pokemon/:id" element={<Detalles />} ></Route>
            </Routes>
        </div>
    )
}

export default AppRouter
